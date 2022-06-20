import { useState } from "react";
import { Link } from "react-router-dom";

import StyledNavbar, { DesktopMenu, HamburgerButton, MobileMenu }  from "./styled/Navbar.styled";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <StyledNavbar>
        <HamburgerButton className="fas fa-bars" onClick={() => setNavOpen(currentValue => !currentValue) } />
        <MobileMenu open={navOpen}>
            <Link onClick={() => setNavOpen(false)} to="/"><h1>Social Media</h1></Link>
            <Link onClick={() => setNavOpen(false)} to="/"><p>Feed</p></Link>
            <Link onClick={() => setNavOpen(false)} to="/account"><p>Account</p></Link>
        </MobileMenu>
        <DesktopMenu>
            <Link to="/"><h1>Social Media</h1></Link>
            <Link to="/"><p>Feed</p></Link>
            <Link to="/account"><p>Account</p></Link>
        </DesktopMenu>
    </StyledNavbar>
  );
};

export default Navbar