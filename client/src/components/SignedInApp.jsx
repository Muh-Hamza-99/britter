import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Account from "./Account";
import Feed from "./Feed";
import Navbar from "./Navbar";
import PostModal from "./PostModal";

import StyledSignedInApp from "./styled/SignInApp.styled";

const queryClient = new QueryClient()

const SignedInApp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <StyledSignedInApp>
        <Navbar setModalOpen={setModalOpen} />
        <Routes>
          <Route path="/" element={ <Feed /> } />
          <Route path="/account" element={ <Account /> } />
        </Routes>
       {modalOpen &&  <PostModal setModalOpen={setModalOpen} />}
      </StyledSignedInApp>
      <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default SignedInApp;