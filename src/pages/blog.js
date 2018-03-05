import React from 'react';
import styled from 'styled-components';
import { Container, BaseLink } from '../components/Common';

const ArticlesContainer = styled.div`
  margin-top: 2rem;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0;
`;

const ListItemLink = BaseLink.extend`
  color: #232528;
  text-decoration: none;
  margin: 2rem 0 !important;
  display: block;
  padding: 1rem;
  transition: all 0.1s ease-in-out;
  background: #fafafa;
`;

const PostTitle = styled.h2`
  color: salmon;
`;

const Meta = styled.em`
  font-size: 0.85rem;
  margin-top: -1rem;
  margin-bottom: 1rem;
  display: block;
`;

const BlogPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;

  console.log(data);

  return (
    <ArticlesContainer>
      <Container small>
        <List>
          {edges.map(({ node, location }) => {
            return (
              <ListItem key={node.id}>
                <ListItemLink to={node.frontmatter.path}>
                  <PostTitle>{node.frontmatter.title}</PostTitle>
                  <Meta>
                    Published {node.frontmatter.date} by{' '}
                    {node.frontmatter.author}
                  </Meta>
                  <p>{node.frontmatter.excerpt}</p>
                </ListItemLink>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </ArticlesContainer>
  );
};

export default BlogPage;

export const postsQuery = graphql`
  query ListQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            excerpt
            author
            date(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  }
`;
