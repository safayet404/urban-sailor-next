"use client";

import React, { useState } from "react";
import FilterComponent from "./FilterComponent";
import CommonComponent from "@/app/components/CommonComponent";

const FilterAndDisplay = ({ products, title }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const categoryNames = products.map((product) => product.category.name);

  console.log("cat name",categoryNames);
  
  const normalizeString = (str) => str.toLowerCase().trim();

  const handleFilterChange = (filter) => {
    console.log("Selected Filter:", filter);
    if (!filter) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          normalizeString(product.category.name) === normalizeString(filter)
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <FilterComponent onFilterChange={handleFilterChange} />
      <CommonComponent title={title} products={filteredProducts} />
    </div>
  );
};

export default FilterAndDisplay;
