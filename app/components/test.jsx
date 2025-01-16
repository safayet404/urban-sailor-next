"use client"

import React, { useState } from "react";

const PaymentOption = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    { id: "credit", label: "Credit", icon: "💳" },
    { id: "debit", label: "Debit", icon: "💳" },
    { id: "boleto", label: "Boleto", icon: "📄" },
    { id: "pix", label: "Pix", icon: "◆" },
  ];

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className=" bg-gray-50 p-6 flex justify-center items-center">
      <div className="container w-full bg-white rounded-lg shadow-md flex">
        {/* Left Section: Payment Methods */}
        <div className="w-2/3 p-6 border-r">
          <h2 className="text-lg font-semibold mb-4">SELECT PAYMENT METHOD</h2>
          <ul className="space-y-4">
            {paymentMethods.map((method) => (
              <li
                key={method.id}
                className={`flex items-center p-4 border rounded-lg cursor-pointer ${
                  selectedMethod === method.id
                    ? "border-black"
                    : "border-gray-300"
                }`}
                onClick={() => handleMethodChange(method.id)}
              >
                <span className="text-2xl mr-4">{method.icon}</span>
                <span className="text-gray-800 font-medium">{method.label}</span>
                <span className="ml-auto">
                  <input
                    type="radio"
                    name="payment-method"
                    value={method.id}
                    checked={selectedMethod === method.id}
                    onChange={() => handleMethodChange(method.id)}
                    className="form-radio h-5 w-5 text-black"
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Summary */}
        <div className="w-1/3 p-6">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800 font-medium">$150.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Shipping & Handling</span>
              <span className="text-red-500 font-medium">FREE</span>
            </div>
            <div className="flex justify-between border-t pt-4">
              <span className="text-gray-800 font-semibold">Total</span>
              <span className="text-gray-800 font-semibold">$100.00</span>
            </div>
          </div>
          <button
            className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800"
            onClick={() => alert("Proceed to Payment")}
          >
            Process to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOption;
