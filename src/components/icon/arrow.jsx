import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ArrowButton(props) {
  return (   
      <Button
        style={{color:'white',backgroundColor: "transparent", padding: 0, border: "none" }}
        disableRipple
        disableTouchRipple
        endIcon={<ArrowForwardIosIcon />}
        onClick={props.onClick}
      >
        {props.label}
      </Button>
  );
}

export default ArrowButton;
