import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Container, Button } from '../components/Common';

const ArticleTemplate = styled.article`
  margin-top: 2rem;
`;

const MainMarkdown = Container.extend`
  .gatsby-highlight {
    margin-bottom: 1.45rem;
  }
`;

const StyledArticleTitle = styled.h1`
  font-family: 'Allerta Stencil', sans-serif;
`;

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
    const { data: { markdownRemark: { frontmatter, html } } } = this.props;

    return (
      <ArticleTemplate>
        <Helmet
          title="Øyvind"
          meta={[
            { name: 'title', content: frontmatter.title },
            { property: 'og:title', content: frontmatter.title },
            { name: 'description', content: frontmatter.description },
            { property: 'og:description', content: frontmatter.description }
          ]}
        />
        <MainMarkdown small>
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
