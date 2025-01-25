"use client"

import React, { useEffect, useState } from "react";
import d1 from '../../public/images/d1.png';
import d2 from '../../public/images/d2.png';
import d3 from '../../public/images/d3.png';
import d4 from '../../public/images/d4.png';
import { FaCheck } from "react-icons/fa";
import Tabs from "@/app/components/Tabs";
import Image from "next/image";
import ReactStars from "react-stars";
import { useCart } from "../context/CartContext";
import { Loader } from "./Loader";

const ProductDetails = ({ product }) => {

    const { dispatch } = useCart()
    const colors = ["green", "gray", "black", "white"];
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [sizes, setSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [quantity, setQuantity] = useState(1);
    const [material, setMaterial] = useState(""); // State to store material

    const [images, setImages] = useState([]); // State to store all images
    const [selectedImage, setSelectedImage] = useState("");

    if(!product)
    {
         return (
                    <div className="flex justify-center items-center h-40">
                  
                   <Loader />
                    </div>
                )
    }

    useEffect(() => {

        

        if (product?.media?.length > 0) {

            const productImages = product.media.map(image => image.url);

            setImages(productImages);

            setSelectedImage(productImages[0]); // Set the first image as the selected image

        }

        if (product?.variants?.length > 0) {
            const productSizes = product.variants.map(variant => {
                const sizeAttribute = variant.attributes.find(attr => attr.attribute.name === "Size");
                return sizeAttribute ? sizeAttribute.values[0].name : null;
            }).filter(size => size); // Filter out any null values
            setSizes(productSizes);
            console.log(productSizes);
            
            setSelectedSize(productSizes[0]); // Set the first size as the selected size
        }

        if (product?.attributes?.length > 0) {

            const materialAttribute = product.attributes.find(attr => attr.attribute.name === "Material");

            if (materialAttribute) {

                setMaterial(materialAttribute.values[0].name); // Set the material

            }

        }

    }, [product]);


    const handleAddToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                id: product.id,
                name: product.name,
                price: product.price,
                size: selectedSize,
                quantity,
                color: selectedColor,
                image: selectedImage,
                oldPrice: product.oldPrice


            }
        })
    }

    let productDescription = "";

    if (product?.description) {

        try {

            const descriptionData = JSON.parse(product.description);

            productDescription = descriptionData.blocks.map(block => block.data.text).join(' ');

        } catch (error) {

            console.error("Error parsing product description:", error);

        }

    }


    return (
        <div className="p-6 container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="grid grid-cols-12 gap-y-4 lg:gap-x-4">
                    <div className="flex flex-row lg:flex-col space-y-0 lg:space-y-2 space-x-2 md:space-x-0 mt-4 col-span-12 lg:col-span-3">
                        {images?.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                width={500}
                                height={500}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-20 h-20 rounded-lg cursor-pointer border ${selectedImage === image ? "border-black" : "border-gray-300"}`}
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                        <Image
                            src={selectedImage}
                            alt="Product"
                            width={500}
                            height={500}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
                {/* Product Details */}
                <div>
                    <h1 className="text-2xl font-semibold text-black">{product.name}</ h1>
                    {product.rating > 0 && 
                    <div className="flex items-center space-x-2 mt-2">
                    <span className="text-yellow-500 text-lg">
                        <ReactStars count={5} size={24} value={product.rating} color2={'#ffd700'} />
                    </span>
                    <span className="text-sm text-gray-600 mt-1">{product.rating}/5</span>
                </div>
                }
                    <div className="flex items-center mt-4 gap-5">
                        <p className='text-2xl text-black font-bold'>${product.pricing?.priceRange?.start?.gross?.amount}</p>
                        {product?.pricing?.discount?.gross?.amount && (
                            <div className="flex gap-5 my-auto">
                                <p className="text-lg line-through font-bold text-gray-400">${product?.pricing?.discount?.gross?.amount}</p>
                                <p className='bg-[#FFEBEB] text-[#FF3333] text-sm px-3 py-1 my-auto rounded-full'> - {product.discount} </p>
                            </div>
                        )}
                    </div>
                    <p className="mt-4 text-sm text-gray-600 border-b pb-4">
                        {productDescription}
                    </p>

                    {/* Color Options */}
                    <div className="mt-4 ">
                        <h3 className="text-sm font-medium text-gray-700">Select Colors</h3>
                        <div className="flex flex-wrap space-x-4 mt-2 border-b pb-4">
                            {colors.map((color, index) => (
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

                        {sizes.length > 0 &&  
                        <div>
                        <h3 className="text-sm font-medium text-gray-700">Choose Size</h3>
                        <div className="flex flex-wrap space-x-2 sm:space-x-4 mt-2">
                            {sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-2 mt-2 text-xs md:text-base rounded-3xl ${selectedSize === size
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

                        
                        }
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
                        <button onClick={handleAddToCart} className="px-6 py-2 bg-black text-sm md:text-base text-white rounded-3xl">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full mt-5">
                <Tabs material={material} />
            </div>
        </div>
    );
}

export default ProductDetails;