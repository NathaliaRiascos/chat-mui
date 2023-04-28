import { Visibility } from "@mui/icons-material";
import {
  InputAdornment,
  FormControl,
  InputLabel,
  FilledInput,
  IconButton,
} from "@mui/material";


function InputIcon() {
  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
      <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
      <FilledInput
        id="filled-adornment-password"
        className="success-custom"
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              <Visibility />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default InputIcon;
