const AllGhostPage = gql`
query {
  allGhostPage {
    edges {
      node {
        uuid
        title
        slug
        html
        comment_id
        plaintext
        feature_image
        featured
        page
        custom_excerpt
        custom_template
        tags {
          id
        }
        authors {
          id
        }
        primary_author {
          id
        }
        primary_tag {
          id
        }
        url
        excerpt
        ghostId
        internal {
          type
          contentDigest
          owner
        }
        mobiledoc
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
`
const AllGhostSettings = gql`
query {
  allGhostSettings {
    edges {
      node {
        title
        description
        logo
        icon
        cover_image
        facebook
        twitter
        lang
        }
    }
    pageInfo {
      hasNextPage
    }
    totalCount
  }
}
`

const AllGhostTag = gql`
query {
  allGhostTag {
    edges {
      node {
        name
        slug
        description
        feature_image
        visibility
        count {
          posts
        }
        url
        postCount
      }
    }
    pageInfo {
      hasNextPage
    }
    totalCount
  }
}
`

