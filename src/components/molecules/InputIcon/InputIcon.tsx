import React from 'react'

function InputIcon({ children}) {
  return (
    <div>
        <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        />
        {/* { children } */}
    </div>
  )
}

export default InputIcon