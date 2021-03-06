'use strict';

const path = require('path');
const _ = require('lodash');
const createCategoriesPages = require('./pagination/create-categories-pages.js');
const createTagsPages = require('./pagination/create-tags-pages.js');
const createPostsPages = require('./pagination/create-posts-pages.js');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js')
  });

  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list-template.js')
  });

  // Categories list
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories-list-template.js')
  });

  // Posts
  const posts = await graphql(`
  {
    allGhostPost(
        sort: {order: ASC, fields: published_at}
    ) {
        edges {
            node {
                slug
            }
        }
      }
    }`
  )

  _.each(posts.data.allGhostPost.edges, (edge) => {
    createPage({
      path: edge.node.slug,
      component: path.resolve('./src/templates/post-template.js'),
      context: { slug: edge.node.slug }
    });
  });

// Pages
  const pages = await graphql(`
  {
    allGhostPage(
        sort: {order: ASC, fields: published_at}
    ) {
        edges {
            node {
                slug
                url
            }
        }
      }
    }`
  )

  _.each(pages.data.allGhostPage.edges, (edge) => {
    createPage({
      path: edge.node.slug,
      component: path.resolve('./src/templates/page-template.js'),
      context: { slug: edge.node.slug }
    });
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createCategoriesPages(graphql, actions);
  await createPostsPages(graphql, actions);
};


module.exports = createPages;
