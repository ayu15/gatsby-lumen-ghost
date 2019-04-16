import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import styles from './Feed.module.scss';

const Feed = ({ edges }) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.updated_at).format('MMMM D, YYYY')}>
            {moment(edge.node.updated_at).format('MMMM YYYY')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          {/* <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span> */}
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.slug}>{edge.node.title}</Link>
        </h2>
        <p className={styles['feed__item-description']}>{edge.node.excerpt}</p>
        <Link className={styles['feed__item-readmore']} to={edge.node.slug}>Read</Link>
      </div>
    ))}
  </div>
);

export default Feed;
