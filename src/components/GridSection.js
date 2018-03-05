import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Container } from './Common';

const SectionContainer = styled.section`
  padding: 4rem 0;

  @media all and (max-width: 966px) {
    padding: 2rem 0 0 0;
    text-align: center;
  }

  ${props =>
    props.gray &&
    css`
      background-color: #fafafa;
    `};
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media all and (max-width: 966px) {
    flex-direction: column;

    ${props =>
      props.flipForMobile &&
      css`
        flex-direction: column-reverse;
      `};
  }
`;

const LeftHalf = styled.div`
  width: 50%;
  padding-right: 1rem;

  @media all and (max-width: 966px) {
    width: 100%;
    padding-right: 0;
  }
`;

const RightHalf = styled.div`
  width: 50%;
  padding-left: 1rem;

  @media all and (max-width: 966px) {
    width: 100%;
    padding-left: 0;
  }
`;

const GridSection = ({ flipForMobile, gray, leftRender, rightRender }) => {
  return (
    <SectionContainer gray={gray}>
      <Container>
        <FlexWrapper flipForMobile={flipForMobile}>
          <LeftHalf>{leftRender()}</LeftHalf>
          <RightHalf>{rightRender()}</RightHalf>
        </FlexWrapper>
      </Container>
    </SectionContainer>
  );
};

GridSection.propTypes = {
  leftRender: PropTypes.func.isRequired,
  rightRender: PropTypes.func.isRequired
};

export default GridSection;
