import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import CodeEditor from "./CodeEditor";
import { useContext } from "react";
import { Context } from "../features/Data";
import "../App.css";
const Container = styled(Box)`
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;

const Code = () => {
  const { html, sethtml, css, setcss, js, setjs } = useContext(Context);
  return (
    <>
      <Container>
        <CodeEditor
          className="code"
          heading="HTML"
          logo="/"
          color="#FF3C41"
          value={html}
          onChange={sethtml}
          language="xml"
        />

        <CodeEditor
          className="code"
          heading="CSS"
          logo="⋆"
          color="#0E3EFF"
          value={css}
          onChange={setcss}
          language="css"
        />
        <CodeEditor
          className="code"
          heading="Javascript"
          logo="{}"
          color="#FCD000"
          value={js}
          onChange={setjs}
          language="javascript"
        />
      </Container>
    </>
  );
};

export default Code;
