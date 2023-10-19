import React, { FC } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

const GlobalStyles = createGlobalStyle`
    html, body, #root {
        height: 100%;
    }            
    ${({ theme }) => css`
      html body {
        height: 100%;
    `}
`;

interface WrapperProps {
  appId?: string;
  spacing?: boolean;
  grid?: boolean;
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
