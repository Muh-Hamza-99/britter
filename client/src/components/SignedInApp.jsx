import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Account from "./Account";
import Feed from "./Feed";
import Navbar from "./Navbar";
import PostModal from "./PostModal";

import StyledSignedInApp from "./styled/SignInApp.styled";

const SignedInApp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <StyledSignedInApp>
        <Navbar setModalOpen={setModalOpen} />
        <Routes>
          <Route path="/" element={ <Feed /> } />
          <Route path="/account" element={ <Account /> } />
        </Routes>
       {modalOpen &&  <PostModal setModalOpen={setModalOpen} />}
    </StyledSignedInApp>
  );
};

export default SignedInApp;