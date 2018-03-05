import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.div`
  max-width: 70rem;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
`;

const BaseLink = styled(({ activePath, ...rest }) => <Link {...rest} />)``;

export { Container, BaseLink };
