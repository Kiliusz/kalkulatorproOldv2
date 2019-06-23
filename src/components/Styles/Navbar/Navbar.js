import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import kalk from "../../../assets/kalk.png";
import HamburgerMenu from "./HamburgerMenu";
import NavMobileMenu from "./NavMobileMenu";
import NavDesktopMenu from "./NavDesktopMenu";

const StyledNav = styled.nav`
  height: 70px;
  background-color: ${({ theme }) => theme.primaryblue};
  a {
    color: white;
  }
`;
const ContentWrapper = styled.div`
  width: 92%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 999;

  ${({ theme }) => theme.mediaQ.desktop} {
    width: 75%;
  }
  ${({ theme }) => theme.mediaQ.large} {
    width: 65%;
  }
`;
const Brand = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  img {
    height: 40px;
    margin-right: 0.5em;
  }
  span {
    font-weight: bold;
  }
  a {
    display: flex;
    align-items: center;
  }
`;

class Navbar extends Component {
  state = {
    isMobileMenuOpen: false,
  };

  handleMenuToggle = () => {
    this.setState({
      isMobileMenuOpen: !this.state.isMobileMenuOpen,
    });
  };

  render() {
    return (
      <StyledNav>
        <ContentWrapper>
          <Brand>
            <Link to="/">
              <img src={kalk} alt="" />
              Kalkulator<span>Pro</span>
            </Link>
          </Brand>
          <HamburgerMenu onClick={this.handleMenuToggle} />
          <NavDesktopMenu />
        </ContentWrapper>
        <NavMobileMenu isOpen={this.state.isMobileMenuOpen} />
      </StyledNav>
    );
  }
}

export default Navbar;
