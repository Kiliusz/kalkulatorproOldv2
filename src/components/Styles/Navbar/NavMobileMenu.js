import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 0;
  position: absolute;
  background-color: ${({ theme }) => theme.primaryblue};
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  z-index: 6;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transform-origin: right;
  transition: transform 0.2s ease-in-out;
  ${({ theme }) => theme.mediaQ.desktop} {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    font-size: 2rem;
    list-style: none;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    transition: opacity 0.2s ease-in-out 0.1s;
  }
  li {
    margin-bottom: 1em;
    cursor: pointer;
  }
`;

const NavMobileMenu = ({ isOpen }) => (
  <StyledWrapper isOpen={isOpen}>
    <ul>
      <li>
        <Link to="/Heating">Ogrzewanie</Link>
      </li>
      <li>
        <Link to="/Vent">Wentylacja</Link>
      </li>
      <li>
        <Link to="/Gas">Gaz</Link>
      </li>
      <li>
        <Link to="/Water">Wodkan</Link>
      </li>
      <li>
        <Link to="/Contact">Kontakt</Link>
      </li>
    </ul>
  </StyledWrapper>
);
export default NavMobileMenu;
