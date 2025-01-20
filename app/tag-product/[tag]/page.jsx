
import CommonComponent from '@/app/components/CommonComponent';
import products from '@/app/data/productsData';
import React from 'react'
const page = async ({params}) => {
    
    const { tag } = params || {}; 

    const filterProductsByTag = (tag) => {
        return products.filter(product => product.tags.includes(tag))

    }
    
    
    const filterProducts = filterProductsByTag(tag)   

    return <div>
        <CommonComponent title={tag} products={filterProducts} />
    </div>;
}

export default page