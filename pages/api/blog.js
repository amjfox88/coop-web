const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, variables) {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: query,
      variables
    }),
  })

  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPostAndNews(cat) {
  const data = await fetchAPI(
      `
    query getBlogPosts {
    posts(first: 4, where: {categoryName: "${cat}",  orderby: { field: DATE, order: DESC } }) {
      nodes {
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        slug
        postLink {
          externalLink
          }
      }
    }
  }
  `
  )
  return data?.posts
}

export async function getAllPosts() {
  // https://www.wpgraphql.com/2020/03/26/forward-and-backward-pagination-with-wpgraphql/
  // Bind endCursor and startCursor to first and last properties to fetch more posts. Then push result to data array in front
  /*const data = await fetchAPI(
      `
    query getAllPosts {
      posts(
        where: {categoryName: "publicaciones", orderby: {field: DATE, order: DESC}}
        after: ""
        first: "10"
        before: ""
      ) {
        nodes {
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          title
          slug
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
    }
  }
  `
  )*/
  const data = await fetchAPI(
      `
    query getAllPosts {
      posts(
        where: {categoryName: "publicaciones", orderby: {field: DATE, order: DESC}}
      ) {
        nodes {
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          title
          slug
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
    }
  }
  `
  )
  return data?.posts
}

export async function getSinglePost(context) {
  const data = await fetchAPI(
      `
    query getSinglePost($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      content
      slug
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
  `
  , {
        id: context.params.slug,
        idType: 'SLUG'
      })

  return data?.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    query getAllPostsSlug {
      posts(where: {categoryName: "publicaciones"}) {
        nodes {
          slug
          title
        }
      }
    }
  `)

  return data?.posts
}