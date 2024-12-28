"use client"

import React, { Suspense, useState } from "react";

import p1 from '../../public/images/p1.png'
import p2 from '../../public/images/p2.png'
import p3 from '../../public/images/p3.png'
import { GrFavorite } from "react-icons/gr";
import Image from 'next/image';
import ReactStars from 'react-stars'
import Link from 'next/link';
import { useSearchParams } from "next/navigation";

const products = [
    {
        id: 1,
        name: "T-shirt with Tape Details",
        image: p2, // Replace with your image paths
        price: 120,
        oldPrice: null,
        discount: null,
        rating: 4.5,
        category: "polo"
    },
    {
        id: 2,
        name: "Skinny Fit Jeans",
        image: p1,
        price: 240,
        oldPrice: 260,
        discount: "20%",
        rating: 3.5,
        category: "hanley"
    },
    {
        id: 3,
        name: "T-shirt with Tape Details",
        image: p3,
        price: 120,
        oldPrice: null,
        discount: null,
        rating: 4.5,
        category: "polo"
    },
    {
        id: 4,
        name: "Sleeve Striped T-shirt",
        image: p2,
        price: 130,
        oldPrice: 160,
        discount: "30%",
        rating: 4.5,
        category: "graphics"
    },
    {
        id: 5,
        name: "Sleeve Striped T-shirt",
        image: p2,
        price: 130,
        oldPrice: 160,
        discount: "30%",
        rating: 4.5,
        category: "polo"
    },
    {
        id: 6,
        name: "Sleeve Striped T-shirt",
        image: p2,
        price: 130,
        oldPrice: 160,
        discount: "30%",
        rating: 4.5,
        category: "henley"
    },
];

const Page = () => {

    const searchParams = useSearchParams();

    const query = searchParams.get("query") || ""; // Get the query from search params, default to empty string if not found

    const [filter, setFilter] = useState("");


    const normalizeString = (str) => str.replace(/[-\s]+/g, '').toLowerCase();


    // Filter products based on the query and selected filter

    const filteredProducts = products.filter(product => {

        const normalizedProductName = normalizeString(product.name);

        const normalizedQuery = normalizeString(query);


        // Only check for matches if the query is not empty

        const matchesQuery = normalizedQuery ? normalizedProductName.includes(normalizedQuery) : true;

        const matchesCategory = filter ? product.category === filter : true; // Check if category matches if filter is set


        return matchesQuery && matchesCategory; // Return true if both conditions are met

    });


    const count = filteredProducts.length;


    return (

        <div className="container mx-auto px-4 py-8">

            <div className="flex justify-between">

                <div>

                    <h1 className="text-2xl font-bold mb-4 text-black">{query}</h1>

                    <p className="text-gray-500 mb-6">{count} items found for "{query}"</p>

                </div>

                <div>

                    <div className="relative mb-6">

                        <select

                            className="block appearance-none w-48 bg-white border-b-2 border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none"

                            onChange={(e) => setFilter(e.target.value)}

                        >

                            <option value="">Sort by</option>

                            <option value="pocket">Pocket Tee</option>

                            <option value="henley">Henley</option>

                            <option value="polo">Polo</option>

                            <option value="graphics">Graphic</option>

                        </select>

                    </div>

                </div>

            </div>


            {/* Product Grid */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {filteredProducts.map((product) => (

                    <Link href={`product-details/${product.id}`} key={product.id}>

                        <div className="relative bg-[#F0EEED] hover:shadow-lg rounded-lg w-full">

                            <Image src={product.image} alt='products' className='flex mx-auto justify-center' />

                            <span className='top-4 absolute right-4'> <GrFavorite /> </span>

                        </div>


                        <div>

                            <h1 className='font-medium text-xl mt-2 text-black'>{product.name}</h1>

                            <div className='flex gap-3 items-center'>

                                <ReactStars count={5} size={24} value={product.rating} color2={'#ffd700'} />

                                <p className='mt-1 text-black'>{product.rating}/5</p>

                            </div>

                            <div className='flex gap-5'>

                                <p className='text-2xl text-black font-bold'>${product.price}</p>

                                {product.oldPrice && (

                                    <div className='flex gap-5'>

                                        <p className='text-2xl text-gray-500 line-through font-bold '>${product.oldPrice}</p>

                                        <p className=' bg-[#FFEBEB] text-[#FF3333] text-sm px-3 py-1 my-auto rounded-full'> - {product.discount} </p>

                                    </div>

                                )}

                            </div>

                        </div>

                    </Link>

                ))}

            </div>

        </div>

    );

};


const WrappedPage = () => (

    <Suspense fallback={<div>Loading...</div>}>

        <Page />

    </Suspense>

);


export default WrappedPage;