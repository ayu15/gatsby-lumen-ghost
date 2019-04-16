'use strict';

const _ = require('lodash');
const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;
  const { postsPerPage } = siteConfig;

  const result = await graphql(`
    {
      allGhostTag {
        totalCount
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `);

  _.each(result.data.allGhostTag.edges, (tag) => {
    const numPages = Math.ceil(result.data.allGhostTag.totalCount / postsPerPage);
    const tagSlug = `/tag/${tag.node.slug}`;

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? tagSlug : `${tagSlug}/page/${i}`,
        component: path.resolve('./src/templates/tag-template.js'),
        context: {
          tagName: tag.node.name,
          tagSlug: tag.node.slug,
          currentPage: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPagePath: i <= 1 ? tagSlug : `${tagSlug}/page/${i - 1}`,
          nextPagePath: `${tagSlug}/page/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1
        }
      });
    }
  });
};
