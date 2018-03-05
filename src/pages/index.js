import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../components/Common';
import Link from 'gatsby-link';

const Hero = styled.div`
  background: #232528;
  padding: 5rem 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 5.5rem;
  font-family: 'Allerta Stencil', sans-serif;
  color: #555;

  @media all and (max-width: 40rem) {
    font-size: 3.5rem;
  }
`;

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <Hero>
          <Container>
            <HeroTitle>Hi, I'm Øyvind</HeroTitle>
          </Container>
        </Hero>
      </div>
    );
  }
}
