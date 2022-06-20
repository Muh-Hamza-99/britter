import styled from "styled-components";

const Navbar = styled.div`
`;

export const HamburgerButton = styled.i`
position: absolute;
top: 0;
left: 0;
margin: 1rem;
font-size: 2.1rem;
z-index: 2;
@media(min-width: 600px) {
    display: none;
}
`
export const MobileMenu = styled.nav`
display: flex;
background-color: ${({ theme }) => theme.elevation_2};
position: absolute;
top: 0;
bottom: 0;
left: 0;
width: 35%;
flex-direction: column;
padding: 4rem 0.5rem;
gap: 2rem;
text-align: center;
font-size: 1.3rem;
font-weight: bold;
transform: ${({ open }) => open ? "translateX(0%);" : "translateX(-100%);"};
transition: transform 150ms ease-in;
a:first-child {
    text-decoration: none;
}
a {
    color: white;
}
@media (min-width: 600px) {
    display: none;
}
`;

export const DesktopMenu = styled.nav``;

export default Navbar;