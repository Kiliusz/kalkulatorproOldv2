import React from "react";
import styled from "styled-components";

import { Link } from "gatsby";

const StyledWrapper = styled.div`
  position: relative;

  min-height: 360px;
  min-width: 100px;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.36);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.36);
`;

const ImageContainer = styled.div`
  height: 170px;
  background-image: ${({ imgPath }) => `url(${imgPath})`};
  background-size: cover;
`;

const Content = styled.div`
  padding: 1rem 2rem 5rem 2rem;
  h3 {
    color: ${({ theme }) => theme.graydark};
    font-size: 2rem;
    text-transform: uppercase;
  }
  p {
    font-size: 1.6rem;
    line-height: 2.3rem;
    color: ${({ theme }) => theme.graydark};
  }
`;

const StyledButton = styled(Link)`
  display: block;
  color: white;
  padding: 0.5rem 2rem;
  background-color: ${({ theme }) => theme.primaryblue};
  position: absolute;
  bottom: 15px;
  left: 20px;
  -webkit-box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.36);
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.36);

  transition: transform ease-in-out 0.1s;

  :hover {
    transform: translate(3px, -3px);
  }
`;

const Card = ({ imgPath, children, tittle, to }) => {
  return (
    <StyledWrapper>
      <ImageContainer imgPath={imgPath} />
      <Content>
        <h3>{tittle}</h3>
        {children}
      </Content>
      <StyledButton to={to}>Przejdź</StyledButton>
    </StyledWrapper>
  );
};

export default Card;
