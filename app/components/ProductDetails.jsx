"use client"

import React, { useState } from "react";
import d1 from '../../public/images/d1.png';
import d2 from '../../public/images/d2.png';
import d3 from '../../public/images/d3.png';
import d4 from '../../public/images/d4.png';
import { FaCheck } from "react-icons/fa";
import Tabs from "@/app/components/Tabs";
import Image from "next/image";
import ReactStars from "react-stars";

const ProductDetails = ({ product }) => {
    const colors = ["green", "gray", "black", "white"];
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const sizes = ["Small", "Medium", "Large", "X-Large"];
    const [selectedSize, setSelectedSize] = useState(sizes[1]);
    const [quantity, setQuantity] = useState(1);

    const images = [d1, d2, d3, d4];
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="p-6 container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="grid grid-cols-12 gap-10">
                    <div className="flex flex-col space-y-2 mt-4 col-span-3">
                        {product.images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-20 h-20 rounded-lg cursor-pointer border ${selectedImage === image ? "border-black" : "border-gray-300"}`}
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>
                    <div className="col-span-9">
                        <Image
                            src={selectedImage}
                            alt="Product"
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
                {/* Product Details */}
                <div>
                    <h1 className="text-2xl font-semibold text-black">{product.name}</ h1>
                    <div className="flex items-center space-x-2 mt-2">
                        <span className="text-yellow-500 text-lg">
                            <ReactStars count={5} size={24} value={product.rating} color2={'#ffd700'} />
                        </span>
                        <span className="text-sm text-gray-600 mt-1">{product.rating}/5</span>
                    </div>
                    <div className="flex items-center mt-4 gap-5">
                        <p className='text-2xl text-black font-bold'>${product.price}</p>
                        {product.oldPrice && (
                            <div className="flex gap-5 my-auto">
                                <p className="text-lg line-through font-bold text-gray-400">${product.oldPrice}</p>
                                <p className='bg-[#FFEBEB] text-[#FF3333] text-sm px-3 py-1 my-auto rounded-full'> - {product.discount} </p>
                            </div>
                        )}
                    </div>
                    <p className="mt-4 text-sm text-gray-600 border-b pb-4">
                        This graphic t-shirt is perfect for any occasion. Crafted from a soft
                        and breathable fabric, it offers superior comfort and style.
                    </p>

                    {/* Color Options */}
                    <div className="mt-4 ">
                        <h3 className="text-sm font-medium text-gray-700">Select Colors</h3>
                        <div className="flex flex-wrap space-x-4 mt-2 border-b pb-4">
                            {product.colors.map((color, index) => (
                                <button
                                    key={index}
                                    className={`w-10 h-10 rounded-full relative ${color === "white" ? "border border-black" : "border-none"}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    {selectedColor === color && (
                                        <span className={`absolute inset-0 flex items-center justify-center ${selectedColor === "white" ? "text-black" : "text-white"} text-xl`}>
                                            <FaCheck />
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Size Options */}
                    <div className="mt-4">
                        <h3 className="text-sm font-medium text-gray-700">Choose Size</h3>
                        <div className="flex flex-wrap space-x-4 mt-2">
                            {product.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-2 text-xs md:text-base rounded-3xl ${selectedSize === size
                                        ? "bg-black text-white font-semibold"
                                        : "bg-[#F0F0F0] text-[#606060]"
                                        }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="mt-4 flex items-center space-x-4 text-black">
                        <div className="flex items-center border rounded-3xl bg-[#F0F0F0]">
                            <button
                                className="px-4 py-2 text-lg"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                -
                            </button>
                            <span className="px-4 py-2">{quantity}</span>
                            <button
                                className="px-4 py-2 text-lg"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                        <button className="px-6 py-2 bg-black text-sm md:text-base text-white rounded-3xl">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full mt-5">
                <Tabs />
            </div>
        </div>
    );
}

export default ProductDetails;