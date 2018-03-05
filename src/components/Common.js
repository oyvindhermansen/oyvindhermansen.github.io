import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.div`
  max-width: 70rem;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;

  @media all and (max-width: 966px) {
    max-width: 100%;
    margin: 0;
  }

  ${props =>
    props.small &&
    css`
      max-width: 35rem;
    `};
`;

const Centerer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BaseLink = styled(({ activePath, ...rest }) => <Link {...rest} />)``;

const Button = styled.button`
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  padding: 0.5rem 1.5rem;
  background-color: salmon;
  border: 0;
  font-family: 'Allerta Stencil', sans-serif;
`;

export { Container, BaseLink, Button, Centerer };
