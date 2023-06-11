import { Box } from "@mui/material";
import React from "react";
import { Context } from "../features/Data";
import { useContext } from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import "../App.css";
const Container = styled(Box)`
  height: 41vh;
`;
const Output = () => {
  const [src, setsrc] = useState("");
  const myContext = useContext(Context);
  const { html, css, js } = myContext;
  const sourcCode = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `;

  useEffect(() => {
    let timeout = setTimeout(() => {
      setsrc(sourcCode);
    }, 500);
    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
    <Container>
      <iframe
        srcDoc={src}
        sandbox="allow-scripts"
        title="Output"
        width="100%"
        height="100%"
        frameBorder={0}
        style={{ marginTop: "1rem" }}
      />
    </Container>
  );
};

export default Output;
