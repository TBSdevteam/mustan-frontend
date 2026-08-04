import {
  Box,
  FormControlLabel,
  Modal,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "@mui/material/Slider";
import { useMemo, useState } from "react";

const Calculator = ({ showCalculator, handleClose }) => {
  const [floorArea, setFloorArea] = useState(0);
  const [doors, setDoors] = useState(0);
  const [ceiling,setCeiling]=useState("");

  const doorMarks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 50,
      label: "25",
    },

    {
      value: 100,
      label: "50",
    },
  ];
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 50,
      label: "250",
    },
    {
      value: 100,
      label: "500",
    },
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // maxWidth: 500,
    // minWidth:350,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    borderRadius: "30px",
    p: 4,
    outline: "none",
  };

  // function valuetext(value) {
  //   return `${value}°C`;
  // }
  let costPerSquare=30;
  let costPerDoor=30;
  let costOfCeiling=20;

  const totalAmount=useMemo(()=>{
    if(ceiling==="Yes"){
      return floorArea*costPerSquare+doors*costPerDoor+costOfCeiling*floorArea;
    }else{
      return floorArea*costPerSquare+doors*costPerDoor;
    }
  },[doors,floorArea,ceiling, costPerDoor, costPerSquare,costOfCeiling])

  return (
    <Modal
      open={showCalculator}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper sx={style} className="ModalPaper">
        <Box
          onClick={handleClose}
          display="flex"
          justifyContent="space-between"
          sx={{ cursor: "pointer" }}
        >
          <Typography
            id="modal-modal-title"
            className="modalHeading"
            fontWeight={900}
            fontSize={24}
          >
            Calculator Based on New Builds
          </Typography>
          <CloseIcon sx={{ ml:2}} />
        </Box>
        <Box px={2}>
          <Box>
            <Typography
              id="modal-modal-description"
              sx={{ my: 2 }}
              fontWeight={600}
            >
              {" "}
              Floor Plan Area (m²)
            </Typography>
            <Typography sx={{ mt: 2, color: "black" }}>
              {floorArea * 5 + " mxm"}
            </Typography>
            <Slider
              aria-label="Custom marks"
              defaultValue={0}
              onChange={(e) => setFloorArea(e.target.value)}
              // getAriaValueText={valuetext}
              step={1}
              // valueLabelDisplay="auto"
              value={floorArea}
              marks={marks}
            />
          </Box>
          <Box>
            <Typography
              id="modal-modal-description"
              sx={{ my: 2 }}
              fontWeight={600}
            >
              {" "}
              Number of Doors
            </Typography>
            <Typography sx={{ mt: 2, color: "black" }}>{doors/2 + `${doors!==1?" doors":" door"}`}</Typography>
            <Slider
              aria-label="Custom marks"
              defaultValue={0}
              onChange={(e) => setDoors(e.target.value)}
              // getAriaValueText={valuetext}
              step={2}
              // valueLabelDisplay="auto"
              value={doors}
              marks={doorMarks}
              // max={30}
            />
          </Box>
          <Box>
            <Typography fontWeight={700}>Includes Ceilings</Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={ceiling}
              onChange={(e)=>setCeiling(e.target.value)}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </Box>
          <Box>
            <Typography fontWeight={900} fontSize={24} mt={3}>
              Total Cost
            </Typography>
            <Typography fontWeight={900} fontSize={24} mb={3}>
              $ {totalAmount}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
};
Calculator.propTypes = {
  showCalculator: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Calculator;
