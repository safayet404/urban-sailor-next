import CommonComponent from '@/app/components/CommonComponent';
import { fetchData } from '@/app/lib/fetchData';
import React from 'react';

const page = async ({ params }) => {
    const { category } = await params;

    const { productByCategory } = await fetchData(category,null);
  

    const products = productByCategory.map((edge) => edge.node);

    console.log("Productssdadad:", products);
    

    return (
        <div>
            <CommonComponent title={category} products={products} />
        </div>
    );
}

export default page;