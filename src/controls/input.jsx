import React from 'react'
import { TextField} from '@mui/material';

export default function Input(props) {
    const { name,multiline, label, value, dataId , type ,variant, onChange, error = null, ...other } = props;
    return (
        <TextField
           className= 'form-control'
           fullWidth= {true}
            variant={variant || "outlined"}
            label={label}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && { error: true, helperText: error })}
        />
    )
}