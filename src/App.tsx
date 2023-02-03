import { Box } from '@mui/material';
import React from 'react';
import { CustomButton } from './stories/CustomButton';
import { DefaultText } from './stories/DefaultText';
import { TextInput } from './stories/TextInput';
import { MdLaunch } from "react-icons/md";

function App() {
  return (
    <Box sx={styles.parent}>
      <Box sx={styles.header}>
        <DefaultText
          text="Envelope"
          size="24px"
          sizeXs="24px"
          fontFamily="Roboto-Black"
        />
      </Box>
      <Box sx={styles.parentLeft}>
        <DefaultText
          text="Introducing our"
          size="46px"
          sizeXs="28px"
          fontFamily="Roboto-Black"
          color="white"
          style={{ textAlign: "center" }}
        />
        <DefaultText
          text="2020 report"
          size="46px"
          sizeXs="28px"
          fontFamily="Roboto-Black"
          color="white"
          style={{ textAlign: "center" }}
        />
        <DefaultText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
          color="white"
          style={{ textAlign: "center" }}
          paddingTop={"20px"}
          paddingBottom={"20px"}
        />
        <CustomButton label="View Report" type="secondary">
          <Box display={"flex"} alignItems="center" pl={"6px"}>
            <MdLaunch size={18} />
          </Box>
        </CustomButton>
      </Box>
      <Box sx={styles.parentRight}>
        <DefaultText
          text="Welcome Back"
          size="46px"
          sizeXs="28px"
          fontFamily="Roboto-Black"
          color="#2763A4"
        />
        <DefaultText
          text="Sign in to continue"
          size="28px"
          sizeXs="22px"
          fontFamily="Roboto-Bold"
          color="#66758A"
        />
        <Box sx={styles.form}>
          <TextInput type="email" label="Email" sx={{ pb: "30px" }} />
          <TextInput type="password" label="Password " sx={{ pb: "15px" }} />
          <DefaultText
            text="Forgot password?"
            size="16px"
            sizeXs="16px"
            fontFamily="Roboto-Medium"
            color="#2763A4"
            style={{
              cursor: "pointer",
              "&:hover": {
                background: "#4A84C3",
              },
            }}
          />
          <Box sx={styles.formBottom}>
            <Box display={"flex"} flexDirection={"row"}>
              <DefaultText
                text="New user?"
                size="16px"
                sizeXs="16px"
                fontFamily="Roboto-Medium"
                color="#66758A"
              />
              <DefaultText
                text="Create account"
                size="16px"
                sizeXs="16px"
                fontFamily="Roboto-Medium"
                color="#2763A4"
                paddingLeft="5px"
                style={{ cursor: "pointer" }}
              />
            </Box>
            <CustomButton label="Sign in" type="primary" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;

const styles = {
  parent: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    height: {
      xs: "100vh",
      md: "100vh",
    },
  },
  header: {
    paddingX: {
      xs: "20px",
      md: "80px",
    },
    position: "absolute",
    top: "25px",
    color: "white",
  },
  parentLeft: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#2763A4",
    paddingX: {
      xs: "10px",
      md: "80px",
    },
  },
  parentRight: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    paddingX: {
      xs: "20px",
      md: "80px",
    },
    paddingTop: "0px",
  },
  form: {
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    padding: "30px",
    marginTop: "30px",
    borderRadius: "10px",
  },
  formBottom: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "30px",
    alignItems: "center",
    justifyContent: "space-between",
  },
};
