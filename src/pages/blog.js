import React from 'react';
import Link from 'gatsby-link';

const BlogPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  console.log(edges);

  return (
    <div>
      <ul>
        {edges.map(({ node, location }) => {
          return (
            <li key={node.id}>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPage;

export const postsQuery = graphql`
  query DocsNavQuery {
    allMarkdownRemark(sort: { fields: [], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
