import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@mui/material';

export default function Select(props) {
    const { name, label, value, varient, onChange, options, error = null } = props;

    return (
        <FormControl
           className= 'form-control'
            variant={varient || "outlined"}
            {...(error && { error: true })}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
            fullWidth= {true}
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                >
                {
                    options.map(
                        item => (
                           <MenuItem key={item.schoolId} value={item.schoolId}>
                                {item.scoolName}
                        </MenuItem>
                        )
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}