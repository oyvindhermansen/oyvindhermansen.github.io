import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Centerer } from '../components/Common';
import GridSection from '../components/GridSection';
import profileOyvind from '../utils/images/profile_oyvind.jpg';
import jsImage from '../utils/images/irvan-smith-563894-unsplash.jpg';
import reactjsImage from '../utils/images/artem-sapegin-176819-unsplash.jpg';
import randomImage4 from '../utils/images/nate-grant-346782-unsplash.jpg';

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
        <GridSection
          leftRender={() => {
            return (
              <Centerer>
                <h2>This is me!</h2>
              </Centerer>
            );
          }}
          rightRender={() => {
            return (
              <Centerer>
                <img
                  width="500"
                  src={profileOyvind}
                  alt="Øyvind Hermansen profile image"
                />
              </Centerer>
            );
          }}
        />
        <GridSection
          flipForMobile={true}
          gray={true}
          leftRender={() => {
            return (
              <Centerer>
                <img src={jsImage} alt="Picture of JavaScript code" />
              </Centerer>
            );
          }}
          rightRender={() => {
            return (
              <Centerer>
                <h2>I love coding. Especially JavaScript</h2>
              </Centerer>
            );
          }}
        />
        <GridSection
          leftRender={() => {
            return (
              <Centerer>
                <h2>I mostly code ReactJS apps</h2>
              </Centerer>
            );
          }}
          rightRender={() => {
            return (
              <Centerer>
                <img src={reactjsImage} alt="Picture of React JS code" />
              </Centerer>
            );
          }}
        />
        <GridSection
          flipForMobile={true}
          gray={true}
          leftRender={() => {
            return (
              <Centerer>
                <img src={randomImage4} alt="Picture of random JS code" />
              </Centerer>
            );
          }}
          rightRender={() => {
            return (
              <Centerer>
                <h2>But I also love making packages for npm.</h2>
              </Centerer>
            );
          }}
        />
      </div>
    );
  }
}
