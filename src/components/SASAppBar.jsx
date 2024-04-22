import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MyIcon from "/assets/imageIcon.png";

const SASAppBar = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          style={{ backgroundColor: "#074173", height: "70px" }}
        >
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img
              src={MyIcon}
              alt="My Icon"
              style={{ width: "60px", height: "60px" }}
            />
          </IconButton>
          <Typography variant="h6" color="#fff" component="div">
            SAS
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default SASAppBar;
