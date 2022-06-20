import { Route, Routes } from "react-router-dom";

import Account from "./Account";
import Feed from "./Feed";
import Navbar from "./Navbar";

import StyledSignedInApp from "./styled/SignInApp.styled";

const SignedInApp = () => {
  return (
    <StyledSignedInApp>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Feed /> } />
          <Route path="/account" element={ <Account /> } />
        </Routes>
    </StyledSignedInApp>
  );
};

export default SignedInApp;