// utils/fetchProducts.js

export async function fetchProducts() {
    try {
      const response = await fetch("https://urban-api.barrzen.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            {
              products(channel: "channel-pln", first: 10) {
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
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
        cache: "no-store", // Ensures fresh data on each request
      });
  
      // Check if the response is OK (status code 200)
      if (!response.ok) {
        const errorText = await response.text(); // Read the response body as text
        console.error("Error fetching data:", errorText); // Log the error text
        throw new Error(`Error fetching data: ${response.statusText} - ${errorText}`);
      }
  
      // Parse the JSON response
      const data = await response.json();
      return data.data.products.edges.map((edge) => ({
        id: edge.node.id,
        name: edge.node.name,
        description: edge.node.description,
        category: edge.node.category,
        price: edge.node.pricing.priceRange.start.gross.amount,
        currency: edge.node.pricing.priceRange.start.gross.currency,
      }));
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return []; // Return an empty array if an error occurs
    }
  }
  