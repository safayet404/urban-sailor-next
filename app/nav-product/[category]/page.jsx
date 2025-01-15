
import CommonComponent from '@/app/components/CommonComponent';
import products from '@/app/data/productsData';
import React from 'react'
const page = ({params}) => {
    
    const { category } = params; 

    const filterProductsByCategory = (category) => {
        return products.filter(product => product.category.toLowerCase() === category.toLowerCase())

    }

   const filterProducts = filterProductsByCategory(category)
   console.log("check data",filterProducts);
   

    return <div>
        
        Showing products for {category}

        <CommonComponent title={category} products={filterProducts} />
    
    </div>;
}

export default page