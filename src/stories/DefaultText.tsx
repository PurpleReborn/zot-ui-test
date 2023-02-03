import React from "react";
import './defaultText.css' 
import { Box } from "@mui/material";

interface DefaultTextProps {
  color?: string;
  size?: string;
  sizeXs?: string;
  text?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  fontFamily?: string;
  style?: any;
}

/**
 * Primary UI component for user interaction
 */
export const DefaultText = ({
  size,
  sizeXs,
  color,
  text,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  fontFamily,
  style,
  ...props
}: DefaultTextProps) => {
  return (
    <Box
      sx={{
        fontSize: {
          xs: sizeXs,
          md: size,
        },
      }}
      style={{
        color: color,
        paddingTop: paddingTop,
        paddingRight: paddingRight,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        fontFamily: fontFamily,
        ...style,
      }}
      {...props}
    >
      {text}
    </Box>
  );
};
