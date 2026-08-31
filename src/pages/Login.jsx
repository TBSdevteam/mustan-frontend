import { useEffect, useState } from "react";
import { useLoginMutation } from "../store/allApi";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {loggedIn} from "../store/mainSlice";
import {Box, Typography } from "@mui/material";
import logo from "../assets/logo.png"
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [login]=useLoginMutation();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.reducer);

  useEffect(()=>{
    if(user.loading){
      return <p>Loading...</p>
    }
    if(user.token){
      navigate("/responses");
    }
  },[navigate, user])

  const handleSubmit=(e)=>{
    e.preventDefault();
    login({email,password}).unwrap()
    .then((res)=>{
      setEmail("");
      setPassword("");
      toast.success(res.message || "Unexpected Response");
      const user={
        email:res.data.email,
        name:res.data.name
      }
      dispatch(loggedIn({ user: user, token: res.token }))
      navigate("/responses");
    })
    .catch((err)=>{
      console.log(err);
      toast.error(err.message || err.data.message || err || "Something went wrong")
    })
  }
  return (
    <Box className="Home px-md-0 px-3" height='100vh' display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
      <Helmet>
        <title>Login | Mustan Painting and Decorating</title>
        <meta name="description" content="Admin login portal for Mustan Painting and Decorating." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Box textAlign="center">
        <img src={logo} height={100} width={200}  alt="logo" />
        <Typography textAlign="center"  className="fs-2 fw-max" mt={1}>Login to continue</Typography>
      
      <form onSubmit={handleSubmit} className="text-center" style={{ maxWidth:"400px" }}>
          {/* <FormControl fullWidth>  */}
        <input type="email" required value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className=" bg-white w-100 p-3 my-3 border-0"
        placeholder="Enter the email"
         style={{ outline:"none"}}
        />
            
          {/* </FormControl> */}
        <input type="password" name="password" id="password" value={password} required
        onChange={(e)=>setPassword(e.target.value)}
        className=" bg-white w-100 p-3 mb-3 border-0"
        placeholder="Enter the password"
         style={{ outline:"none"}}
        />

        <button type="submit" className="w-100 border-0 bg-black text-white fw-max" style={{  paddingBlock:"16px"}}>Login</button>
      </form>

      </Box>
    </Box>
  )
}

export default Login
