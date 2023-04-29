import React from "react";
import { styled } from '@mui/material/styles';
import { FilledInput, Input, InputProps, TextField, TextFieldProps } from "@mui/material";


const InputComponent = styled(TextField)<TextFieldProps>(({ theme }) => ({
  color: 'var(--color-purple-dark)',
  borderColor: 'var(--color-purple-dark)',
  '&:after': {
    borderBottom: 'none',
  },
  '&:before': {
    borderBottom: 'none',
  },
  '&.focus': {
    color: 'var(--color-purple-dark)',
  },
  '&.hover': {
    color: 'var(--color-purple-dark)',
  }
}));


export default InputComponent;
