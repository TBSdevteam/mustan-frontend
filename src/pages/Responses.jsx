import {Box,Typography,Grid,CircularProgress} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useGetAllResponsesQuery } from "../store/allApi";
import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import { useEffect } from "react";
import logo from "../assets/logo.png";


const Responses = () => {
const {user}=useSelector((state)=>state.reducer);
const navigate=useNavigate();

useEffect(()=>{
  if(user.loading){
    return <p>Loading...</p>
  }

  if(!user?.token){
    navigate("/login")
  }
},[navigate, user])

 const {data:allResponses,isLoading,error}=useGetAllResponsesQuery();

 if (isLoading) {
   return (
     <Box textAlign="center" py={10}>
       <CircularProgress />
       {/* <Typography>Getting all responses...</Typography> */}
     </Box>
   );
 }
 if (error){
  return <Box textAlign="center" fontWeight={700} py={10}>
    Failed to get all responses
  </Box>
 }

  // const responses = [
  //   {
  //     _id:"1",
  //     firstName: "Ameer",
  //     lastName: "Hamza",
  //     email: "ameer.hamza@mail.com",
  //     phone: "+123456789",
  //     message:
  //       "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  //   {
  //     _id:"2",
  //     firstName: "Husnain",
  //     lastName: "Anwar",
  //     email: "husnain.anwar@mail.com",
  //     phone: "+123456789",
  //     message:
  //       "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  //   {
  //     _id:"3",
  //     firstName: "Husnain",
  //     lastName: "Anwar",
  //     email: "husnain.anwar@mail.com",
  //     phone: "+123456789",
  //     message:
  //       "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  //   {
  //     _id:"4",
  //     firstName: "Husnain",
  //     lastName: "Anwar",
  //     email: "husnain.anwar@mail.com",
  //     phone: "+123456789",
  //     message:
  //       "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  //   {
  //     _id:"5",
  //     firstName: "Husnain",
  //     lastName: "Anwar",
  //     email: "husnain.anwar@mail.com",
  //     phone: "+123456789",
  //     message:
  //       "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  //   {
  //     _id:"6",
  //     firstName: "Husnain",
  //     lastName: "Anwar",
  //     email: "husnain.anwar@mail.com",
  //     phone: "+123456789",
  //     message:
  //       "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   },
  // ];
  return (
    <Box p={[3, 5, 10]} className="Home" sx={{ height: "100vh" }}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item md={6} sm={12} className="d-flex d-md-none mx-auto">
          <img src={logo} alt="logo" style={{ maxHeight: "100px" }} />
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography
            variant="h3"
            className="d-md-block d-none"
            textAlign={["center", "start", "start"]}
            fontWeight={900}
          >
            All Responses
          </Typography>
          <Typography
            variant="h4"
            className="d-md-none d-block"
            textAlign={["center", "start", "start"]}
            fontWeight={900}
          >
            All Responses
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          textAlign="end"
          className="d-md-inline-block d-none"
        >
          <img src={logo} alt="logo" style={{ maxHeight: "100px" }} />
        </Grid>
      </Grid>

      <Grid container mt={[3, 4, 5]} spacing={2} p={0}>
        {allResponses ? (
          allResponses.map((response) => (
            <Grid
              item
              md={6}
              sm={12}
              width="100%"
              data-aos="fade-right"
              key={response._id}
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  // sx={{ py:1}}
                >
                  <Typography fontWeight={900}>
                    {response.first_name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box display="flex" gap={1}>
                    <Typography fontWeight={700}>Name: </Typography>
                    <Typography>
                      {response.first_name + " " + response.last_name}
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1}>
                    <Typography fontWeight={700}>Email: </Typography>
                    <Typography>{response.email}</Typography>
                  </Box>
                  <Box display="flex" gap={1}>
                    <Typography fontWeight={700}>Phone: </Typography>
                    <Typography>{response.phone}</Typography>
                  </Box>
                  <Box display="flex" gap={1}>
                    <Typography fontWeight={700}>Message: </Typography>
                    <Typography>{response.message}</Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))
        ) : (
          // responses.map((response)=>(
          //   <Grid item md={6} sm={12}  data-aos="fade-right" key={response._id}>
          //   <Accordion>
          //     <AccordionSummary
          //       expandIcon={<ExpandMoreIcon />}
          //       aria-controls="panel1-content"
          //       id="panel1-header"
          //       // sx={{ py:1}}
          //     >
          //       <Typography fontWeight={900}>{response.firstName}</Typography>
          //     </AccordionSummary>
          //     <AccordionDetails>
          //       <Box display="flex" gap={1}>
          //         <Typography fontWeight={700}>Name: </Typography>
          //         <Typography>
          //           {response.firstName + " " + response.lastName}
          //         </Typography>
          //       </Box>
          //       <Box display="flex" gap={1}>
          //         <Typography fontWeight={700}>Email: </Typography>
          //         <Typography>
          //           {response.email}
          //         </Typography>
          //       </Box>
          //       <Box display="flex" gap={1}>
          //         <Typography fontWeight={700}>Phone: </Typography>
          //         <Typography>
          //           {response.phone}
          //         </Typography>
          //       </Box>
          //       <Box display="flex" gap={1}>
          //         <Typography fontWeight={700}>Message: </Typography>
          //         <Typography>
          //           {response.message}
          //         </Typography>
          //       </Box>

          //     </AccordionDetails>
          //   </Accordion>
          // </Grid>
          // ))
          <Box textAlign="center" fontWeight={700} py={10}>
            No response to show
          </Box>
        )}
      </Grid>
    </Box>
  );
}

export default Responses
