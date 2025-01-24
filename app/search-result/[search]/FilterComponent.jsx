"use client";

import React, { useState } from "react";

const FilterComponent = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    onFilterChange(value); // Pass the selected filter to the parent
  };

  return (
    <div className="relative mb-6">
      <select
        className="block appearance-none w-48 bg-white border-b-2 border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none"
        value={filter}
        onChange={handleFilterChange}
      >
        <option value="">All Categories</option>
        <option value="juices">Juices</option>
        <option value="henley">Henley</option>
        <option value="polo">Polo</option>
        <option value="graphics">Graphic</option>
      </select>
    </div>
  );
};

export default FilterComponent;
