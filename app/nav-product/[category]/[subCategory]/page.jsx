import CommonComponent from '@/app/components/CommonComponent';
import products from '@/app/data/productsData';
import React from 'react';

const Page = ({ params }) => {
  const { category, subCategory } = params; 

  const fetchProaductByCategory=(category,subCategory = null) => {
   return products.filter((product) => {
    const isCategoryMatch = product.category.toLowerCase() === category.toLowerCase()
    const isSubCategoryMatch = subCategory ? product.subCategory.toLowerCase() === subCategory.toLowerCase() : true

    return isCategoryMatch && isSubCategoryMatch
   })
  } 

  const filteredProducts = fetchProaductByCategory(category,subCategory)

  console.log("cheeeck data",filteredProducts);
  

  return (
    <div>
      <h1>Category: {category}</h1>
      <h2>Subcategory: {subCategory}</h2>

      <CommonComponent title={category} subTitle={subCategory} products={filteredProducts} />
    </div>
  );
};

export default Page;
