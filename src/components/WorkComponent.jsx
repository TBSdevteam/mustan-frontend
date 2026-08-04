import {Box} from "@mui/material"
import Masonry from '@mui/lab/Masonry';
// import G1 from "../assets/Main/first.jpeg";
// import G2 from "../assets/Main/Second.jpeg";
// import G3 from "../assets/Main/third.jpeg";
// import G4 from "../assets/Main/fourth.jpeg";
// import G5 from "../assets/Main/fifth.jpeg";
// import G6 from "../assets/Main/sixth.jpeg";
// import G8 from "../assets/Main/eight.jpeg";
// import G9 from "../assets/Main/nine.jpeg";
// import G10 from "../assets/Main/tenth.jpeg";
// import G11 from "../assets/Main/eleventh.jpeg";
// import G12 from "../assets/Main/twelve.jpeg";
// import G13 from "../assets/Main/thirteen.jpeg";
// import G14 from "../assets/Main/fourteen.jpeg";
// import G15 from "../assets/Main/fifteen.jpeg";
// import G16  from "../assets/Main/sixteen.jpeg";
// import G17 from "../assets/Main/seventeen.jpeg";
// import G18 from "../assets/Main/eighteen.jpeg";
// import G19 from "../assets/Main/nineteen.jpeg";
// import G20 from "../assets/Main/twenty.jpeg";
// import G21 from "../assets/Main/twenty-one.jpeg";
// import G22 from "../assets/Main/twenty-two.jpeg";
// import G23 from "../assets/Main/twenty-three.jpeg";
// import G24 from "../assets/Main/twenty-four.jpeg";
// import G25 from "../assets/Main/twenty-five.jpeg";
// import G26 from "../assets/Main/image3.jpg";
// import G27 from "../assets/Main/image3.jpeg";
// import G30 from "../assets/Gallery-images/G30.jpeg";
import { useMemo } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import G30 from "../assets/Main/Gallery/G1.jpeg";
import G4 from "../assets/Main/Gallery/G2.jpeg";
import G6 from "../assets/Main/Gallery/G3.jpeg";
import G5 from "../assets/Main/Gallery/G4.jpeg";
import G8 from "../assets/Main/Gallery/G5.jpeg";
import G9 from "../assets/Main/Gallery/G6.jpeg";
import G11 from "../assets/Main/Gallery/G7.jpeg";
import G10 from "../assets/Main/Gallery/G8.jpeg";
import G12 from "../assets/Main/Gallery/G9.jpeg";
import G14 from "../assets/Main/Gallery/G10.jpeg";
import G13 from "../assets/Main/Gallery/G11.jpeg";
import G15 from "../assets/Main/Gallery/G12.jpeg";
import G16 from "../assets/Main/Gallery/G13.jpeg";
import G17 from "../assets/Main/Gallery/G14.jpeg";
import G18 from "../assets/Main/Gallery/G15.jpeg";
import G19 from "../assets/Main/Gallery/G16.jpeg";
import G20 from "../assets/Main/Gallery/G17.jpeg";
import G21 from "../assets/Main/Gallery/G18.jpeg";
import G22 from "../assets/Main/Gallery/G19.jpeg";
import G23 from "../assets/Main/Gallery/G20.jpeg";
import GN1 from "../assets/Main/Gallery/G28.jpeg";
import GN2 from "../assets/Main/Gallery/G29.jpeg";
import GN3 from "../assets/Main/Gallery/G22.jpeg";
import GN4 from "../assets/Main/Gallery/G23.jpeg";
import GN5 from "../assets/Main/Gallery/G24.jpeg";
import GN6 from "../assets/Main/Gallery/G25.jpeg";
import GN7 from "../assets/Main/Gallery/G26.jpeg";
import GN8 from "../assets/Main/Gallery/G27.jpeg";
import GN9 from "../assets/Main/Gallery/G30.jpeg";
import GN10 from "../assets/Main/Gallery/G31.jpeg";
import GN11 from "../assets/Main/Gallery/G32.jpeg";
import GN12 from "../assets/Main/Gallery/G33.jpeg";



// ?w=162&auto=format&dpr=2 2x
// ?w=162&auto=format

const ImageMasonry=()=> {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('md'));
  const numberOfColumns=useMemo(()=>{
    if(small){
      return 1
    }else{
      return 4
    }

  },[small])

const imageWidth=useMemo(()=>{
if(small){
  return 350
}else{
  850
}
},[small])

const imageArray =useMemo(()=>{
  if(small){
    return [
      { img: G4, title: 'Image 4' },
      { img: G30, title: 'Image 1' },
      { img: G6, title: 'Image 6' },
      { img: G5, title: 'Image 5' },
      { img: G9, title: 'Image 9' },
      { img: G8, title: 'Image 8' },
      { img: G11, title: 'Image 11' },
      { img: G10, title: 'Image 10' },
      { img: G13, title: 'Image 13' },
      { img: G12, title: 'Image 12' },
      { img: G17, title: 'Image 17' },
      { img: G14, title: 'Image 14' },
      { img: G15, title: 'Image 15' },
      { img: G16, title: 'Image 16' },
      { img: G18, title: 'Image 18' },
      { img: G19, title: 'Image 19' },
      { img: GN1, title: 'Image n1' },
      { img: GN2, title: 'Image n2' },  
      { img: GN3, title: 'Image n3' },  
      { img: GN4, title: 'Image n4' },  
      { img: GN5, title: 'Image n4' },  
      { img: GN6, title: 'Image n5' },  
      { img: GN7, title: 'Image n6' },  
      { img: GN8, title: 'Image n7' },  
      { img: GN9, title: 'Image n8' },  
      { img: GN10, title: 'Image n9' },  
      { img: GN12, title: 'Image n11' },  
      { img: GN11, title: 'Image n10' },  
    
      { img: G20, title: 'Image 20' },
      { img: G21, title: 'Image 21' },
      { img: G22, title: 'Image 22' },
      { img: G23, title: 'Image 23' },
    
      // { img: G24, title: 'Image 24' },
      // { img: G25, title: 'Image 25' },
      // { img: G26, title: 'Image 26' },
      // { img: G27, title: 'Image 27' },
      // { img: G1, title: 'Image 30' },
      // { img: G2, title: 'Image 31' },
      // { img: G3, title: 'Image 32' },
    ]
    
  }else{
    return [
    { img: G4, title: 'Image 4' },
    { img: G30, title: 'Image 1' },
    { img: G6, title: 'Image 6' },
    { img: G5, title: 'Image 5' },
    { img: G9, title: 'Image 9' },
    { img: G8, title: 'Image 8' },
    { img: G10, title: 'Image 10' },
    { img: G11, title: 'Image 11' },
    { img: G13, title: 'Image 13' },
    { img: G12, title: 'Image 12' },
    { img: G14, title: 'Image 14' },
    { img: G17, title: 'Image 17' },
    { img: G15, title: 'Image 15' },
    { img: G16, title: 'Image 16' },
    { img: G18, title: 'Image 18' },
    { img: GN1, title: 'Image n1' },
    { img: GN2, title: 'Image n2' },  
    { img: GN4, title: 'Image n4' },  
    { img: GN3, title: 'Image n3' },  
    { img: GN5, title: 'Image n4' },  
    { img: GN6, title: 'Image n5' },  
    { img: GN7, title: 'Image n6' },  
    { img: GN8, title: 'Image n7' },  
    { img: GN9, title: 'Image n8' },  
    { img: GN10, title: 'Image n9' },  
    { img: GN11, title: 'Image n10' },  
    { img: GN12, title: 'Image n11' },  
  
    { img: G19, title: 'Image 19' },
    { img: G21, title: 'Image 21' },
    { img: G23, title: 'Image 23' },
    { img: G22, title: 'Image 22' },
    { img: G20, title: 'Image 20' },
  
    // { img: G24, title: 'Image 24' },
    // { img: G25, title: 'Image 25' },
    // { img: G26, title: 'Image 26' },
    // { img: G27, title: 'Image 27' },
    // { img: G1, title: 'Image 30' },
    // { img: G2, title: 'Image 31' },
    // { img: G3, title: 'Image 32' },
  ]}
},[small]) 

  return (
    <Box sx={{ width: imageWidth, minHeight: 529 }}>
      <Masonry columns={numberOfColumns} spacing={3}>
        {imageArray && imageArray.map((item, index) => (
          <div key={index}>
            <img
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}




export default ImageMasonry;