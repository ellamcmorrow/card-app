import React, { FC } from "react";
import styled, {
  css,
  createGlobalStyle,
  ThemeProvider,
} from "styled-components";
import theme from "../../theme";
import "bootstrap-grid";

// Define global styles
const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  html, body {
    height: 100%;
    background-color: ${theme.primary};
    font-size: ${theme.fontSizeBase};
    font-weight: ${theme.fontWeightBase};

    `}
`;

interface WrapperProps {
  children?: React.ReactNode;
}

const App = styled.div`
  height: 100%;
`;

export const Wrapper: FC<WrapperProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App className="app">{children}</App>
  </ThemeProvider>
);

export default Wrapper;
