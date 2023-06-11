import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import styled from "@emotion/styled";

const Header = () => {
  const logo =
    "https://res.cloudinary.com/css-tricks/images/f_auto,q_auto/v1642454945/codepen-wordmark-display-inside-white@10x_163987fcdd/codepen-wordmark-display-inside-white@10x_163987fcdd.png?_i=AA";
  const Container = styled(AppBar)`
    background: #060606;
    position: static;
    height: 9vh;
  `;
  return (
    <Container>
      <Toolbar>
        <img src={logo} alt="logo" width={90} />
      </Toolbar>
    </Container>
  );
};

export default Header;
