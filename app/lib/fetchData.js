// lib/fetchData.js
import { gql, request } from "graphql-request";

const newArrival = gql`
  {
    products(channel: "channel-pln", first: 40, sortBy: { field: PUBLISHED, direction: DESC }) {
      edges {
        node {
          id
          name
          description
          category {
            id
            name
          }
          pricing {
            priceRange {
              start {
                gross {
                  amount
                  currency
                }
              }
              stop {
                gross {
                  amount
                  currency
                }
              }
            }
            discount {
              gross {
                amount
              }
            }
          }
          media {
            id
            url
          }
          variants {
            id
            name
            sku
            pricing {
              price {
                gross {
                  amount
                  currency
                }
              }
            }
          }
        }
      }
    }
  }
`;


const topSelling = gql`
  {
    products(channel: "channel-pln", first: 10, sortBy: { field: PUBLISHED, direction: ASC }) {
      edges {
        node {
          id
          name
          description
          rating
          category {
            id
            name
          }
          pricing {
            priceRange {
              start {
                gross {
                  amount
                  currency
                }
              }
              stop {
                gross {
                  amount
                  currency
                }
              }
            }
            discount {
              gross {
                amount
              }
            }
          }
          media {
            id
            url
          }
          variants {
            id
            name
            sku
            pricing {
              price {
                gross {
                  amount
                  currency
                }
              }
            }
          }
        }
      }
    }
  }
`;

const allProducts = gql`
  {
    products(channel: "channel-pln", first: 40) {
      edges {
        node {
          id
          name
          description
          category {
            id
            name
          }
          pricing {
            priceRange {
              start {
                gross {
                  amount
                  currency
                }
              }
              stop {
                gross {
                  amount
                  currency
                }
              }
            }
            discount {
              gross {
                amount
              }
            }
          }
          media {
            id
            url
          }
          variants {
            id
            name
            sku
            pricing {
              price {
                gross {
                  amount
                  currency
                }
              }
            }
          }
        }
      }
    }
  }
`;

const filterByCategory = gql` query getProductsByCategory($slug: String!)  {
 category(slug : $slug ) {
  id
  name
  products(channel :"channel-pln",first : 50) {
    edges {
      node {
        id
        name
         media {
          id,
          url
        }
        description
        rating
        pricing {
          priceRange {
            start {
              gross {
                amount
              }
            }
          }
        }
      }
    }
  }
}
}`

export async function fetchData(slug) {
  const response = await request("https://urban-api.barrzen.com/graphql/", newArrival);
  const response1 = await request("https://urban-api.barrzen.com/graphql/", topSelling);
  const allData = await request("https://urban-api.barrzen.com/graphql/", allProducts);
  const categoryProduct = await  request("https://urban-api.barrzen.com/graphql/", filterByCategory,{slug});
  return {
    productsData: response?.products?.edges || [],
    productsData1: response1?.products?.edges || [],
    allProductsData: allData?.products?.edges || [],
    productByCategory: categoryProduct?.category?.products?.edges || []
  };
}