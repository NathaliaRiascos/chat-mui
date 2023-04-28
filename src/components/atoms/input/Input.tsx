import React from "react";
import { TextField } from '@mui/material';

function Input() {
  return (
    <TextField
      label="Size"
      id="filled-size-normal"
      defaultValue="Normal"
      variant="filled"
    />
  );
}

export default Input;
