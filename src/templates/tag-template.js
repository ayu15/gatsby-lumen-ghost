import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';

const TagTemplate = ({ data, pageContext }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const {
    tagName,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage
  } = pageContext;

  const { edges } = data.allGhostPost;
  const pageTitle = currentPage > 0 ? `All Posts tagged as "${tagName}" - Page ${currentPage} - ${siteTitle}` : `All Posts tagged as "${tagName}" - ${siteTitle}`;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar />
      <Page title={tagName}>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query TagPage($tagSlug: String, $postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allGhostPost (limit:$postsLimit, skip: $postsOffset, filter: {tags : {elemMatch : {slug : { in: [$tagSlug]}}}})
    {
      totalCount
      edges {
        node {
          slug
          title
          updated_at
          excerpt
        }
      }
    }
  }
`;

export default TagTemplate;
