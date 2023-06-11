import { Box } from "@mui/material";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "../App.css";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;
const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 700;
`;
const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
  background: #060606;
`;
const MyBox = styled(Box)`
  display: flex;
`;

const SmallScreenContainer = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
  background: #060606;
  height: auto;
`;
const CodeEditor = ({ heading, logo, color, value, onChange, language }) => {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  //copy functionality:
  const [copySuccess, setCopySuccess] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setCopySuccess("");
    }, 1000);
  }, [copySuccess]);

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  const [isOpen, setOpen] = useState(true);

  return (
    <>
      {!isSmallScreen ? (
        <Container
          className="container"
          style={isOpen ? null : { flexGrow: 0 }}
        >
          <Header>
            <Heading>
              <Box
                component="span"
                style={{
                  background: color,
                  borderRadius: 5,
                  marginRight: 5,
                  height: 20,
                  width: 20,
                  display: "flex",
                  placeContent: "center",

                  color: "#000",
                  paddingBottom: 2,
                }}
              >
                {logo}
              </Box>
              {heading}
            </Heading>
            <MyBox>
              <Box className="full-screen">
                <CloseFullscreenIcon
                  fontSize="small"
                  style={{
                    alignSelf: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpen((prevState) => !prevState)}
                />
              </Box>
              <Box
                className="full-screen"
                onClick={() => copyToClipBoard(value)}
              >
                {!copySuccess ? (
                  <ContentCopyIcon />
                ) : (
                  <p style={{ fontSize: ".6rem" }}>Copied!</p>
                )}
              </Box>
            </MyBox>
          </Header>

          <CodeMirror
            className="controlled-editor code-mirror-wrapper"
            value={value}
            onBeforeChange={handleChange}
            options={{
              lineNumbers: true,
              theme: "material",
              lint: true,
              lineWrapping: true,
              mode: language,
            }}
          />
        </Container>
      ) : (
        <SmallScreenContainer
          className="container"
          style={isOpen ? null : { height: "10vh" }}
        >
          <Header>
            <Heading>
              <Box
                component="span"
                style={{
                  background: color,
                  borderRadius: 5,
                  marginRight: 5,
                  height: 20,
                  width: 20,
                  display: "flex",
                  placeContent: "center",

                  color: "#000",
                  paddingBottom: 2,
                }}
              >
                {logo}
              </Box>
              {heading}
            </Heading>
            <MyBox>
              <Box className="full-screen">
                <CloseFullscreenIcon
                  fontSize="small"
                  style={{
                    alignSelf: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpen((prevState) => !prevState)}
                />
              </Box>
              <Box
                className="full-screen"
                onClick={() => copyToClipBoard(value)}
              >
                {!copySuccess ? (
                  <ContentCopyIcon />
                ) : (
                  <p style={{ fontSize: ".6rem" }}>Copied!</p>
                )}
              </Box>
            </MyBox>
          </Header>

          <CodeMirror
            className="controlled-editor code-mirror-wrapper"
            value={value}
            onBeforeChange={handleChange}
            options={{
              lineNumbers: true,
              theme: "material",
              lint: true,
              lineWrapping: true,
              mode: language,
            }}
          />
        </SmallScreenContainer>
      )}
    </>
  );
};

export default CodeEditor;
