import { Visibility } from "@mui/icons-material";
import {
  InputAdornment,
  FormControl,
  InputLabel,
  FilledInput,
  IconButton,
  TextField,
} from "@mui/material";
import { Input }from "../../atoms";

function InputIcon({ label, children }) {
  return (
      <Input
        id="outlined-adornment-password"
        InputProps={{
          endAdornment: <InputAdornment position="end">
            { children }
          </InputAdornment>,
        }}
        fullWidth
        label={label}

      />
  );
}

export default InputIcon;
