"use client"


import Image from "next/image";
import React, { useState } from "react";
import p1 from '../../../public/images/p1.png'
import p2 from '../../../public/images/p2.png'
import p3 from '../../../public/images/p3.png'
import p4 from '../../../public/images/p4.png'
import p5 from '../../../public/images/p5.png'
import p7 from '../../../public/images/p7.png'

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
    <div className="flex flex-col lg:flex-row container mx-auto justify-between p-6 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Cart Items */}
      <div className="flex-1 space-y-6">
        <h2 className="text-lg font-bold text-gray-700">SELECT ITEM(S)</h2>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center border p-4 rounded-lg shadow-sm"
          >
            <input
              type="checkbox"
              className="mr-4 w-5 h-5"
              defaultChecked={true}
            />
            <Image
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold text-black">{item.name}</h3>
              <p className="text-sm text-gray-600">
                Product Size: {item.size} &nbsp; Color: {item.color}
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-lg font-bold text-black">${item.price}</span>
                <span className="text-sm text-gray-600 line-through ">
                  ${item.originalPrice}
                </span>
              </div>
            </div>
            <div className="flex px-7 py-2 rounded-3xl text-black bg-[#F0F0F0] items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, false)}
                
              >
                -
              </button>
              <span className="font-medium">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, true)}
              
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="w-full lg:w-1/3 border p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-lg font-bold">Summary</h2>
        <input
          type="text"
          placeholder="Enter Coupon"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
        <div className="flex justify-between items-center">
          <span className="font-medium">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Estimated Shipping & Handling</span>
          <span className="text-green-500 font-medium">FREE</span>
        </div>
        <div className="flex justify-between items-center font-bold text-lg">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <button className="w-full bg-gray-300 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-400">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartPage;
