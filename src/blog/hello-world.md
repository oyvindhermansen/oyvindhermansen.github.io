---
path: "/blog/new-personal-website"
title: "New personal website"
description: "New presentational website with a simple blog solution"
ingress: "In this article i'll talk about why I build this website, and the technology behind it."
excerpt: "In this article i'll talk about why I build this website, and the technology behind it."
published: true
date: "2018-03-05T23:36:56.503Z"
author: "Øyvind Hermansen"
---

For some time now I have been wanting to create a website that could present me as a developer, but also be a place for me to write down some thoughts on technology and what interests me in the world of coding.

By having a blog platform, I will only share my own thoughts and experiences with different technology I'm using on a daily basis.

## Planning

Before I could start coding the website, I had to decide on the technology I wanted to use. I knew a few things that I wanted to include in this website:

* Use React JS.
* Markdown support for writing blog posts.
* Good performance, fast
* Easy development and deployment to github pages.

I considered several good choices like `create-react-app` and `nextjs`, but ended up using [`GatsbyJS`](https://www.gatsbyjs.org/).

## GatsbyJS

`GatsbyJS` is a fast and server-side rendered site generator for React. The great thing about Gatsby, in my opinion is that it does not care about where you get your data from. It can be from any CMS, APIs or in my case, markdown! It uses GraphQL to pull data from your wanted source, letting you gain control of which data you want to get from the backend.

I had no experience with GraphQL, so it took some time to understand both syntax and how it worked inside the Gatsby ecosystem. I followed a great [tutorial](https://www.youtube.com/watch?v=n1NaVkKdrwc) online, on how to make a blog using Gatsby, querying markdown files with GraphQL.

You can learn more about GraphQL [here](http://graphql.org/learn/)

## Developer experience

The developer experience with using Gatsby is really nice. By using the `gatsby cli`, I could easily start a new project with just one command. When the project is all set up, you can just run `yarn develop` to get the dev-environment up and running.

For the deployment of the site to github-pages, I simply followed the GatsbyJS documentation. It was as simple as installing a package named `gh-pages`, and add a script to my `package.json` that looks like this:

```json
"deploy": "gatsby build --prefix-paths && gh-pages -d public"
```

## Performance

Also one of the big wins by choosing Gatsby is the performance. I'll end this post with a quote from the Gatsby documentation site.

<blockquote>
  Gatsby.js builds the fastest possible website. Instead of waiting to generate pages when requested, pre-build pages and lift them into a global cloud of servers — ready to be delivered instantly to your users wherever they are.
</blockqoute>
