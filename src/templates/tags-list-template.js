import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

const TagsListTemplate = ({ data }) => {
  const {
    title,
    subtitle
  } = data.site.siteMetadata;
  const items = data.allGhostTag.edges;

  return (
    <Layout title={`Tags - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Tags">
        <ul>
          {items.map(({ node }) => (
            <li key={node.slug}>
              <Link to={`/tag/${node.slug}/`}>
                {node.slug} ({node.postCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query TagsListQuery {
    site {
      siteMetadata {
        title,
        subtitle
      }
    }
    allGhostTag(
        sort: {order: ASC, fields: name}
    ) {
        edges {
            node {
                slug
                url
                postCount
            }
        }
    }
}
`;

export default TagsListTemplate;