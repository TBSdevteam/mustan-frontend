import nodemailer from "nodemailer";

/**
 * Netlify serverless function for the contact form.
 *
 * Replaces the previous backend-API integration for the contact form ONLY.
 * Sends submissions by email via Gmail SMTP using Nodemailer.
 *
 * Endpoint (from the frontend): POST /.netlify/functions/contact
 * Body:      JSON { first_name, last_name, email, phone, message }
 * Response:  JSON { success: bool, message: string }
 *
 * Required Netlify environment variables (set in Site settings > Environment
 * variables, never committed to git):
 *   SMTP_HOST     e.g. smtp.gmail.com
 *   SMTP_PORT     e.g. 587
 *   SMTP_USER     e.g. rahul@absoluteranking.com
 *   SMTP_PASSWORD Gmail App Password
 */

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return respond(405, { success: false, message: "Method not allowed." });
  }

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch (err) {
    return respond(400, { success: false, message: "Invalid request body." });
  }

  const firstName = String(data.first_name || "").trim();
  const lastName = String(data.last_name || "").trim();
  const email = String(data.email || "").trim();
  const phone = String(data.phone || "").trim();
  const message = String(data.message || "").trim();

  // Minimal server-side validation, mirroring the "required" fields already
  // enforced on the frontend form. Necessary because the form now posts to a
  // public endpoint rather than an authenticated API.
  if (!firstName || !lastName || !email || !phone || !message) {
    return respond(400, { success: false, message: "Please fill in all required fields." });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return respond(400, { success: false, message: "Please enter a valid email address." });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    console.error("Contact function is missing one or more SMTP_* environment variables.");
    return respond(500, { success: false, message: "Failed to submit the response. Please try again later." });
  }

  const port = Number(SMTP_PORT);

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // true for port 465 (SSL), false for 587 (STARTTLS)
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      // Gmail requires the From address to match (or be an alias of) the
      // authenticated account, so the visitor's email is used as Reply-To
      // instead, letting you hit "Reply" and respond straight to them.
      from: `"Mustan Painting and Decorating Website" <${SMTP_USER}>`,
      to: SMTP_USER,
      replyTo: `"${firstName} ${lastName}" <${email}>`,
      subject: `New Contact Form Submission - ${firstName} ${lastName}`,
      text:
        "New Contact Form Submission\n\n" +
        `First Name: ${firstName}\n` +
        `Last Name: ${lastName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Message: ${message}\n`,
      html:
        "<h2>New Contact Form Submission</h2>" +
        `<p><strong>First Name:</strong> ${escapeHtml(firstName)}</p>` +
        `<p><strong>Last Name:</strong> ${escapeHtml(lastName)}</p>` +
        `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
        `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` +
        `<p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });

    return respond(200, { success: true, message: "Response submitted successfully!" });
  } catch (err) {
    console.error("Failed to send contact form email:", err);
    return respond(500, { success: false, message: "Failed to submit the response. Please try again later." });
  }
}

function respond(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
