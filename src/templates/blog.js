import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const ArticleTemplate = styled.article`
  margin-top: 2rem;
`;

const MainMarkdown = styled.div`
  max-width: 35rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  .gatsby-highlight {
    margin-bottom: 1.45rem;
  }

  @media all and (max-width: 966px) {
    max-width: 100%;
    margin: 0;
  }
`;

const StyledArticleTitle = styled.h1``;

const StyledArticleIngress = styled.p`
  font-size: 1.25rem;
  font-family: 'Muli', sans-serif;
  line-height: 1.7rem;
`;

export default class Template extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { markdownRemark: { frontmatter, html } } = this.props.data;

    return (
      <ArticleTemplate>
        <Helmet
          title="Øyvind"
          meta={[
            { name: 'title', content: frontmatter.title },
            { name: 'og:title', content: frontmatter.title },
            { name: 'description', content: frontmatter.description },
            { name: 'og:description', content: frontmatter.description }
          ]}
        />
        <MainMarkdown>
          <StyledArticleTitle>{frontmatter.title}</StyledArticleTitle>
          <StyledArticleIngress>{frontmatter.ingress}</StyledArticleIngress>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </MainMarkdown>
      </ArticleTemplate>
    );
  }
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        ingress
      }
    }
  }
`;
