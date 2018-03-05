import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Container, BaseLink } from '../components/Common';
import isActive from '../utils/isActive';

const StyledHeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  background: #232528;
`;

const StyledInnerHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledLogo = BaseLink.extend`
  text-decoration: none;
  color: #f5efed;
  transition: all 500ms cubic-bezier(0.23, 1, 0.32, 1);
  border-bottom: 5px solid;
  border-color: #232528;
  font-family: 'Allerta Stencil', sans-serif;

  &:hover {
    border-color: salmon;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: inline;
  margin-left: 2rem;
`;

const ListItemLink = BaseLink.extend`
  color: #f5efed;
  text-decoration: none;
`;

const FlexSpacer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const menuData = [
  {
    id: 1,
    path: '/',
    title: 'Home'
  },
  {
    id: 2,
    path: '/blog/',
    title: 'Blog'
  }
];

export default class Header extends Component {
  render() {
    const { location } = this.props;

    return (
      <StyledHeaderWrapper>
        <StyledInnerHeader>
          <Container>
            <FlexSpacer>
              <StyledLogo to="/">Øyvind</StyledLogo>
              <List>
                {menuData.map(item => {
                  return (
                    <ListItem key={item.id}>
                      <ListItemLink
                        to={item.path}
                        isActive={() => isActive(location, item.path)}
                        activePath={isActive(location, item.path)}
                        activeStyle={{ color: 'salmon' }}
                      >
                        {item.title}
                      </ListItemLink>
                    </ListItem>
                  );
                })}
              </List>
            </FlexSpacer>
          </Container>
        </StyledInnerHeader>
      </StyledHeaderWrapper>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object.isRequired
};
