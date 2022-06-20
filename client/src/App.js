import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import SignUp from "./components/SignUp";

import { UserContext } from "./components/UserContext";

import StyledApp from "./components/styled/App.styled";
import GlobalStyle from "./components/styled/GlobalStyles";
import { darkTheme } from "./themes";
import SignedInApp from "./components/SignedInApp";

const App = () => {
  const user = useContext(UserContext);
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledApp>
          {user?.loggedIn === null ? ("") : user?.loggedIn === true ? (<SignedInApp />) : (<SignUp  />)}
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;