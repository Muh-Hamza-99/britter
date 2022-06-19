import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import SignUp from "./components/styled/SignUp";

import StyledApp from "./components/styled/App.styled";
import GlobalStyle from "./components/styled/GlobalStyles";
import { darkTheme } from "./themes";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledApp>
          <SignUp />
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;