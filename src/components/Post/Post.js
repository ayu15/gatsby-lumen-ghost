import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';

const Post = ({ post }) => {
  const {
    tags,
    title,
    updated_at : date,
    html
  } = post;

  const tagSlugs = tags.map((tag) => tag.slug)
  const tagNames = tags.map((tag) => tag.name)

  console.log('tag slugs are', tagSlugs);
  console.log('tag names are', tagNames);

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">All Articles</Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        <Tags tags={tagNames} tagSlugs={tagSlugs} />
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={post.slug} postTitle={post.title} />
      </div>
    </div>
  );
};

export default Post;
