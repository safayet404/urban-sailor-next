import { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { FaHeart } from "react-icons/fa"; // For filled heart
import Image from "next/image";
import ReactStars from "react-stars";
import Link from "next/link";
import { useFavorites } from "@/app/context/FavoriteContext"; // Import the context

const CommonComponent = ({ title, subTitle, products }) => {
    const [visibleProducts, setVisibleProducts] = useState(4);
    const { favorites, dispatch } = useFavorites(); // Access favorites and dispatch

    const handleAddToFavorites = (product) => {
        if (isFavorite(product.id)) {
            // If product is already in favorites, remove it
            dispatch({ type: "REMOVE_FROM_FAVORITES", payload: product });
        } else {
            // If product is not in favorites, add it
            dispatch({ type: "ADD_TO_FAVORITES", payload: product });
        }
    };

    const isFavorite = (productId) => {
        return favorites.some((item) => item.id === productId);
    };

    const handleViewAll = () => {
        setVisibleProducts(products.length);
    };

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-lg md:text-3xl font-bold text-center uppercase text-black mb-8">
                {title} {subTitle && `- ${subTitle}`}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mx-auto gap-5 p-4">
                {
                    products.length !== 0 ? (products.slice(0, visibleProducts).map((product) => {
                        // Accessing the image URL from the product data
                        const imageUrl = product?.media?.[0]?.url || "/fallback-image.jpg";
        
                        

                        return (
                            <Link href={`product-details/${product.id}`} key={product.id}>
                                <div>
                                    <div className="relative bg-[#F0EEED] rounded-lg w-full">
                                        {imageUrl ? (
                                            <Image
                                                src={imageUrl}
                                                alt="product image"
                                                layout="responsive"
                                                width={500}
                                                height={500}
                                                objectFit="cover"
                                                className="flex mx-auto h-auto justify-center rounded-lg"
                                            />
                                        ) : (
                                            <div>No image available</div>
                                        )}
                                        <span
                                            className="top-4 absolute right-4 cursor-pointer"
                                            onClick={(e) => {
                                                e.preventDefault(); // Prevent navigation when clicking the icon
                                                handleAddToFavorites(product);
                                            }}
                                        >
                                            {isFavorite(product.id) ? (
                                                <FaHeart className="text-black" />
                                            ) : (
                                                <GrFavorite />
                                            )}
                                        </span>
                                    </div>

                                    <div>
                                        <h1 className="font-medium text-xs sm:text-base md:text-lg lg:text-xl mt-2 text-black">
                                            {product.name}
                                        </h1>
                                        <div className="flex flex-wrap gap-3 items-center">
                                            <ReactStars count={5} size={18} value={product.rating} color2={"#ffd700"} />
                                            <p className="mt-1 text-sm md:text-base text-black">{product.rating}/5</p>
                                        </div>
                                        <div className="flex gap-5">
                                        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-black font-bold">$ {product.pricing?.priceRange?.start?.gross?.amount} </p>
                                            {product.oldPrice && (
                                                <div className="flex gap-5">
                                                    <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-500 line-through font-bold">
                                                        ${product.oldPrice}
                                                    </p>
                                                    <p className="bg-[#FFEBEB] text-[#FF3333] mt-1 md:mt-1 text-[8px] md:text-xs lg:text-sm md:px-3 md:py-1 px-1 py-1 my-auto rounded-full">
                                                        - {product.discount}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })) : "No Product is here"
                }
            </div>

            {visibleProducts < products.length && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleViewAll}
                        className="px-6 py-2 bg-white border border-gray-300 rounded-full text-black font-semibold hover:bg-gray-100"
                    >
                        View All
                    </button>
                </div>
            )}
        </div>
    );
};

export default CommonComponent;
