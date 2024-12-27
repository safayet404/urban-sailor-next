"use client"

import React from "react";
import products from "../../data/productsData";
import ProductDetails from "@/app/components/ProductDetails";
import RelatedProduct from "@/app/components/RelatedProduct";
import DressStyle from "@/app/components/DressStyle";
import Affiliate from "@/app/components/Affiliate";

const Page = ({ params }) => {
    // Unwrap the params using React.use()
    const { id } = React.use(params); // Unwrap params to get id
    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <ProductDetails product={product} />
            <RelatedProduct />
            <DressStyle/>
            <Affiliate/>
        </>
    );
}

export default Page;