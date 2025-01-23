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

    console.log("Fetching category with slug:", slug); // Log the slug


    // Initialize variables to hold the data

    let response = null;

    let response1 = null;

    let allData = null;

    let categoryProduct = null;


    try {

        // Fetch all product data

        response = await request("https://urban-api.barrzen.com/graphql/", newArrival);

        response1 = await request("https://urban-api.barrzen.com/graphql/", topSelling);

        allData = await request("https://urban-api.barrzen.com/graphql/", allProducts);

        

        // Attempt to fetch category product data

        categoryProduct = await request("https://urban-api.barrzen.com/graphql/", filterByCategory, { slug });


    } catch (error) {

        console.error("Error fetching data:", error);

    }


    // Check if categoryProduct is valid

    const productsByCategory = categoryProduct && categoryProduct.category 

        ? categoryProduct.category.products.edges 

        : []; // Default to an empty array if category is not found


    return {

        productsData: response?.products?.edges || [], // Return fetched data or empty array

        productsData1: response1?.products?.edges || [], // Return fetched data or empty array

        allProductsData: allData?.products?.edges || [], // Return fetched data or empty array

        productByCategory: productsByCategory, // Return products by category

    };

}