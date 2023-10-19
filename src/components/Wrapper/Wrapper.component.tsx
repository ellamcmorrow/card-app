import React, { FC } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../../theme";
import "bootstrap-grid";

// Define global styles
const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    background-color: ${(props) => props.theme.primary};
  }
`;

interface WrapperProps {
  children?: React.ReactNode;
  // If you plan to use other props like appId, spacing, grid, or theme, define them here.
}

const App = styled.div`
  height: 100%;
`;

export const Wrapper: FC<WrapperProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <App className="app">{children}</App>
  </ThemeProvider>
);

export default Wrapper;
