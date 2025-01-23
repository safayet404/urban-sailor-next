"use client";

import React, { useEffect, useState } from "react";
import ProductDetails from "@/app/components/ProductDetails";
import RelatedProduct from "@/app/components/RelatedProduct";
import DressStyle from "@/app/components/DressStyle";
import Affiliate from "@/app/components/Affiliate";
import { gql, request } from "graphql-request";

const document = gql`
    query GetProduct($id: ID!) {
        product(channel: "channel-pln", id: $id) {
           id
            name
            rating
            description
            category {
                name
            }
                   variants {
          id
          attributes{
            attribute{
              name
            }
            values{
              name
            }
          }
  }
            attributes{
          attribute{
            name
          }
          values{
            name
          }
        }
    pricing{
      priceRange {
        start {
          gross {
            amount
          }
        }
      }
    }
            media {
                url
                alt
            }
        }
    }
`;

const Page = ({ params }) => {
    const { id } = React.use(params); // Unwrap params to get id
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Decode the URL-encoded ID
                const decodedId = decodeURIComponent(id);

                // Fetch data using the decoded ID
                const response = await request(
                    "https://urban-api.barrzen.com/graphql/",
                    document,
                    { id: decodedId }
                );

                setData(response?.product || null); // Set product data
                console.log(response, "data");
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (id) fetchData(); // Fetch data only if id exists
    }, [id]);

    if (!data) {
        return <div className="mx-auto text-center">Loading....</div>;
    }

    return (
        <>
            <ProductDetails product={data} />
            <RelatedProduct />
            <DressStyle />
            <Affiliate />
        </>
    );
};

export default Page;
