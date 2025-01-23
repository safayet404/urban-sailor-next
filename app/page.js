"use client"

import DressStyle from "./components/DressStyle";
import Affiliate from "./components/Affiliate";
import ImageSlider from "./components/ImageSlider";
import products from "../app/data/productsData.js";
import CommonComponent from "./components/CommonComponent";

import { gql, request } from "graphql-request";
import { useEffect, useState } from "react";

const document = gql`
  {
    products(channel: "channel-pln", first: 40,sortBy :{ field: PUBLISHED , direction: DESC }) {
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
            discount{
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
const document2 = gql`
  {
    products(channel: "channel-pln", first: 10,sortBy: { field: PUBLISHED ,direction: ASC }) {
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
              
          discount{
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

export default function Home() {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request(
          "https://urban-api.barrzen.com/graphql/",
          document
        );
        setData(response?.products?.edges || []); // Set products data
        console.log(response, "data");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request(
          "https://urban-api.barrzen.com/graphql/",
          document2
        );
        setData1(response?.products?.edges || []); // Set products data
        console.log(response, "data1");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  

  
  const productsData = data?.map((edge) => edge.node) || [];
  const productsData1 = data1?.map((edge) => edge.node) || [];

 
 

  // Only render CommonComponent when data is available
  return (
    <main>
      <ImageSlider />
      {/* Ensure data is not null or undefined before passing to CommonComponent */}
      {data ? (
        <>
          <CommonComponent title="New Arrival" products={productsData} />
          <CommonComponent title="Top Selling" products={productsData1} />
        </>
      ) : (
        <div>Loading...</div> // Show loading indicator while data is being fetched
      )}
      <DressStyle />
      <Affiliate />
    </main>
  );
}
