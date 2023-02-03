import React from "react";
import { Box } from "@mui/material";
import "./customButton.css";

interface CustomButtonProps {
  label?: string;
  color?: string;
  bgColor?: string;
  px?: string;
  type?: string;
  style?: any;
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const CustomButton = ({
  label,
  color,
  bgColor,
  px,
  type,
  style,
  children,
  ...props
}: CustomButtonProps) => {
  return (
    <Box
      sx={type === 'primary' ? styles.primary : styles.secondary}
      {...props}
    >
      {label}
      {children}
    </Box>
  );
};

const styles = {
  primary: {
    cursor: "pointer",
    width: "fit-content",
    px: {
      xs: "20px",
      md: "20px",
    },
    borderRadius: "6px",
    fontFamily: "Roboto-Medium",
    py: {
      xs: "10px",
      md: "12px",
    },
    color: "white",
    backgroundColor: "#2763A4",
    "&:hover": {
      background: "#4A84C3",
    },
  },
  secondary: {
    cursor: "pointer",
    width: "fit-content",
    alignSelf: "center",
    px: {
      xs: "20px",
      md: "70px",
      backgroundColor: "#2763A4",
    },
    py: {
      xs: "10px",
      md: "12px",
      backgroundColor: "#2763A4",
    },
    color: "white",
    borderRadius: "6px",
    fontFamily: "Roboto-Medium",
    border: "2px solid white",
    "&:hover": {
      border: "2px solid #DDDDDD",
      color: "#DDDDDD",
    },
  },
};
