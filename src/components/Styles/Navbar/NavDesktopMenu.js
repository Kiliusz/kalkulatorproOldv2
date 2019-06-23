import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100%;
  display: none;
  margin: 0;

  ${({ theme }) => theme.mediaQ.desktop} {
    display: flex;
    align-items: center;
  }

  ul {
    height: 100%;
    display: flex;
    font-size: 1.8rem;
    list-style: none;
  }

  a {
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    cursor: pointer;
    :hover {
      background-color: ${({ theme }) => theme.secondaryblue};
    }
  }
`;

const activeStyle = {
  color: "#707daf",
};

const NavDesktopMenu = () => (
  <StyledWrapper>
    <ul>
      <li>
        <Link to="/Ogrzewanie" activeStyle={activeStyle}>
          Ogrzewanie
        </Link>
      </li>
      <li>
        <Link to="/Wentylacja" activeStyle={activeStyle}>
          Wentylacja
        </Link>
      </li>
      <li>
        <Link to="/Gaz" activeStyle={activeStyle}>
          Gaz
        </Link>
      </li>
      <li>
        <Link to="/Wodociag" activeStyle={activeStyle}>
          Wodkan
        </Link>
      </li>
      <li>
        <Link to="/Kontakt" activeStyle={activeStyle}>
          Kontakt
        </Link>
      </li>
    </ul>
  </StyledWrapper>
);

export default NavDesktopMenu;
