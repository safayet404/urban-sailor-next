"use client"

import React from 'react'

const OrderConfirm = () => {
    return (
        <div className='container mx-auto p-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>
                    <form>
                        <div>
                            <label>Card Number*</label>
                            <input
                                type="text"
                                className="w-full bg-[#EFEFEF] placeholder:text-slate-400 text-slate-700 mb-2 text-sm border border-black rounded-md pl-3 pr-20 py-4 focus:outline-none shadow-sm focus:shadow"
                                placeholder="Ex: 0000 0000 0000 000"
                                required
                            />
                        </div>
                        <div className='mt-5'>
                            <label>Name on Card*</label>
                            <input
                                type="text"
                                className="w-full bg-[#EFEFEF] placeholder:text-slate-400 text-slate-700 mb-2 text-sm border border-black rounded-md pl-3 pr-20 py-4 focus:outline-none shadow-sm focus:shadow"
                                placeholder="Ex: Brooklyn Simmons"
                                required
                            />
                        </div>
                        <div className='flex flex-col md:flex-row gap-4'>
                                <div className='mt-5 flex-1'>
                                    <label>Expiry Date*</label>
                                    <input
                                        type="date"
                                        className="w-full bg-[#EFEFEF] placeholder:text-slate-400 text-slate-700 mb-2 text-sm border border-black rounded-md pl-3 pr-20 py-4 focus:outline-none shadow-sm focus:shadow"
                                        placeholder="MM/DD/YYYY"

                                    />
                                </div>
                                <div className='mt-5 flex-1'>
                                    <label>CVV*</label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#EFEFEF] placeholder:text-slate-400 text-slate-700 mb-2 text-sm border border-black rounded-md pl-3 pr-20 py-4 focus:outline-none shadow-sm focus:shadow"
                                        placeholder="e.g., 123.456.789-09"
                                        required
                                    />
                                </div>
                            </div>
                    </form>
                </div>
                <div className="bg-[#F0EFED] rounded-2xl mt-5">
                    <h2 className="text-lg font-semibold mb-4 text-center">Summary</h2>
                    <div className="space-y-4 p-5">
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
                    <div className="p-5">
                        <button
                            className="w-full block text-center bg-black text-white py-3 rounded-3xl mt-6 hover:bg-gray-800"
                          
                        >
                            Confirm Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirm