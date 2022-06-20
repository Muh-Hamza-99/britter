import { useState } from "react";
import { Link } from "react-router-dom";

import StyledNavbar, { DesktopMenu, HamburgerButton, MobileMenu }  from "./styled/Navbar.styled";
import { PostModalButton } from "./styled/PostModal.styled";

const Navbar = ({ setModalOpen }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <StyledNavbar>
        <HamburgerButton className="fas fa-bars" onClick={() => setNavOpen(currentValue => !currentValue) } />
        <MobileMenu open={navOpen}>
            <Links setNavOpen={setNavOpen} setModal={setModal} />
        </MobileMenu>
        <DesktopMenu>
          <Links setNavOpen={null} setModal={setModal} />
        </DesktopMenu>
    </StyledNavbar>
  );
};

export default Navbar;

const Links = ({ setNavOpen, setModalOpen }) => (
  <>
    <Link to="/" onClick={() => {if (setNavOpen) setNavOpen(false);}}>
      <h1>Social Media</h1>
    </Link>
    <Link to="/" onClick={() => {if (setNavOpen) setNavOpen(false);}}>
      <p>Feed</p>
    </Link>
    <Link to="/account" onClick={() => { if (setNavOpen) setNavOpen(false); }}>
      <p>Account</p>
    </Link>
    <PostModalButton onClick={() => {
        if (setNavOpen) setNavOpen(false);
        setModalOpen(currentValue => !currentValue);
      }}
      className="fas fa-plus" />
  </>
);