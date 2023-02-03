import React from "react";
import { Box, TextField } from "@mui/material";
import "./customButton.css";

interface TextInputProps {
  label?: string;
  labelSize?: string;
  labelWeight?: string;
  value?: string;
  sx?: any;
  type?: string;
}

/**
 * Primary UI component for user interaction
 */
export const TextInput = ({
  label,
  labelSize = '18px',
  labelWeight = 'bold',
  value,
  sx,
  type,
  ...props
}: TextInputProps) => {
  return (
    <Box sx={sx} {...props}>
      <TextField
        fullWidth
        label={label}
        InputLabelProps={{
          shrink: true,
          style: {
            fontSize: labelSize,
            fontWeight: labelWeight,
          },
        }}
        value={value}
        size="small"
        type={type}
      />
    </Box>
  );
};
