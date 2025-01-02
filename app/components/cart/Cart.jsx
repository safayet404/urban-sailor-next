"use client"


import Image from "next/image";
import React, { useState } from "react";
import p1 from '../../../public/images/p1.png'
import p2 from '../../../public/images/p2.png'
import p3 from '../../../public/images/p3.png'
import p4 from '../../../public/images/p4.png'
import p5 from '../../../public/images/p5.png'
import p7 from '../../../public/images/p7.png'
import { Breadcrumbs } from "@material-tailwind/react";
import { FaRegTrashCan } from "react-icons/fa6";
import Link from "next/link";
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "One Life Graphic T-shirt",
      size: "Large",
      color: "Green",
      price: 260,
      originalPrice: 300,
      quantity: 1,
      image: p1, // Replace with your image path
    },
    {
      id: 2,
      name: "One Life Graphic T-shirt",
      size: "Large",
      color: "Green",
      price: 260,
      originalPrice: 300,
      quantity: 1,
      image: p2, // Replace with your image path
    },
    {
      id: 3,
      name: "One Life Graphic T-shirt",
      size: "Large",
      color: "Green",
      price: 260,
      originalPrice: 300,
      quantity: 1,
      image: p3, // Replace with your image path
    },
  ]);

  //const cartLength = cartItems.length
  

  const updateQuantity = (id, increment) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity: Math.max(1, item.quantity + (increment ? 1 : -1)),
          }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-10">
      <Breadcrumbs separator=">" className="px-0 font-semibold">
      <Link href="/" className="opacity-60">
        Home
      </Link>
      <a href="#" className="opacity-60">
        Cart
      </a>
     
    </Breadcrumbs>

    <div className="flex justify-between">
      <h2 className="text-lg font-bold text-gray-700 mb-4">SELECT ITEM(S)</h2>
      <h3 className="flex my-auto gap-2 text-gray-600 "> <FaRegTrashCan className="my-auto" /> DELETE</h3>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
        <div className="space-y-5 mb-5">
          {/* First column content */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex  items-center border shadow-md p-7 rounded-lg"
            >
              <input
                type="checkbox"
                className="mr-4 w-5 h-5"
                defaultChecked={true}
              />
              <Image
                src={item.image}
                alt={item.name}
                className="w-20 h-20 lg:w-32 lg:h-32 object-cover rounded-lg"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-black">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  Product Size: <span className="font-semibold">  {item.size}  </span> &nbsp; Color:  <span className="font-semibold">  {item.color}  </span>
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-lg font-bold text-black">${item.price}</span>
                  <span className="text-sm text-gray-600 line-through ">
                    ${item.originalPrice}
                  </span>
                </div>
                <div className="flex  px-7 py-2 w-[100px] rounded-3xl text-black bg-[#F0F0F0] mt-3 items-center space-x-2">
                  <button onClick={() => updateQuantity(item.id, false)}>-</button>
                  <span className="font-medium">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, true)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#F0EFED] self-start rounded-md p-5">
          <h1 className="text-center mt-5 font-semibold text-xl">Summary</h1>
          <div className="flex gap-3 items-start">
            <input placeholder="Enter Coupon" className="rounded-3xl w-[90%]  border border-[#1A1919] mt-5 bg-transparent p-2 " />
            <button className="px-5 rounded-3xl py-2 bg-[#D9D9D9] mt-5">Apply</button>
          </div>
            <div className="flex justify-between font-semibold text-[#1A1919] mx-auto mt-10">
              <h3 className="">Subtotal</h3>
              <p> $ {subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-semibold text-[#1A1919] mx-auto mt-5 border-b border-[#1A1A1A] pb-5">
              <h3 className="">Estimated Shipping & Handling</h3>
              <p className="text-red-600">FREE</p>
            </div>
            <div className="flex justify-between font-semibold text-[#1A1919] mx-auto mt-10">
              <h3 className="">Total</h3>
              <p>${subtotal.toFixed(2)} </p>
            </div>
        </div>
      </div>


    </div>

  );
};

export default CartPage;
