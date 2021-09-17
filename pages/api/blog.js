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

export async function getNewsBlog(cat) {
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
      posts {
        nodes {
          slug
        }
      }
    }
  `)
  return data?.posts
}