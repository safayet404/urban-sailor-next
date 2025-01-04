"use client"
import { useState } from 'react';
import { LiaEditSolid } from "react-icons/lia";
import order from "../../../public/images/order.png"
import Image from 'next/image';

import p1 from '../../../public/images/p1.png'
import p2 from '../../../public/images/p2.png'
import p3 from '../../../public/images/p3.png'

import { PiListBulletsFill } from "react-icons/pi";const ManageAccount = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: "profile", label: "Profile" },
        { id: "orders", icon: <PiListBulletsFill />, label: "My Orders" },
        { id: "security", label: "Security" },
        { id: "payment", label: "Payment" },
        { id: "affiliate", label: "Affiliate" },
        { id: "help", label: "Need Help" },
        { id: "logout", label: "Log Out" },
    ];

    const orderProducts = [
        {
            id: 1,
            name: "T-shirt with Tape Details",
            image: p2, // Replace with your image paths
            price: 120,
            color: "Green",
            size: "Large",
            status: "Canceled"
        },
        {
            id: 2,
            name: "Skinny Fit Jeans",
            image: p1,
            price: 240,
            color: "Blue",
            size: "Small",
            status: "On the way"
        },
        {
            id: 3,
            name: "T-shirt with Tape Details",
            image: p3,
            price: 120,
            color: "Black",
            size: "Medium",
            status: "Pending"
        },
        {
            id: 4,
            name: "Sleeve Striped T-shirt",
            image: p2,
            price: 130,
            color: "Brown",
            size: "Large",
            status: "Completed"
        },
        {
            id: 5,
            name: "Sleeve Striped T-shirt",
            image: p2,
            price: 130,
            color: "Green",
            size: "Large",
            status: "Completed"
        },
        {
            id: 6,
            name: "Sleeve Striped T-shirt",
            image: p2,
            price: 130,
            color: "Green",
            size: "Large",
            status: "On the way"
        },
    ];

    const statusStyles = {
        Canceled: "text-gray-400",
        "On the way": "text-red-500",
        Pending: "text-red-500",
        Completed: "text-gray-500",
    };

    const activeTabObject = tabs.find(tab => tab.id === activeTab);

    const renderContent = () => {
        switch (activeTab) {
            case "profile":
                return (
                    <div>
                        <div className='bg-white rounded-lg p-5'>
                            <h1 className='text-2xl text-black'>Personal Information</h1>
                            <p className='mt-4'>João Carlos da Silva, 29 years old, Male, CPF: 123.456.789-00</p>
                        </div>
                        <div className='bg-white rounded-lg p-5 mt-5'>
                            <h1 className='text-2xl text-black'>Address</h1>
                            <p className='mt-5'>Here’s the Brazilian address in a single line format:</p>
                            <p>
                                Rua João da Silva, 123, Apartamento 402, Bloco 12A, Centro, São Paulo - SP, CEP 01001-000, Brasil</p>
                        </div>
                        <div className='bg-white rounded-lg p-5 mt-5'>
                            <h1 className='text-2xl text-black'>Contact Information</h1>

                            <p className='font-semibold text-gray-500 mt-5'>Email Address</p>
                            <p className='text-lg'>example@gmail.com</p>
                            <p>
                                Rua João da Silva, 123, Apartamento 402, Bloco 12A, Centro, São Paulo - SP, CEP 01001-000, Brasil</p>
                        </div>


                    </div>
                )
            case "orders":
                return (
                    <div>
                        {orderProducts.map((item) => (
                            <div key={item.id} className="flex flex-col md:flex-row items-start p-4 bg-white rounded-lg mb-5">
                                <div className="flex-shrink-0">
                                    <Image
                                        src={order}
                                        alt="Product"
                                        className="w-20 h-28 object-cover rounded"
                                    />
                                </div>
                                <div className="flex-grow ml-4">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-600">
                                        Product Size: {item.size} Color: {item.color}
                                    </p>
                                    <p className="text-lg font-semibold mt-1">${item.price}</p>
                                    <button className="text-black font-semibold underline mt-1">Purchase History</button>
                                </div>
                                <div className="flex flex-col justify-between h-full gap-2 items-end md:gap-5">
                                    <div>
                                        <p className={`text-sm font-semibold  ${statusStyles[item.status]}`}>{item.status}</p>
                                    </div>
                                    <div className="flex flex-col items-end ">
                                        {item.status === "Completed" && (
                                            <div className="flex flex-col gap-2">
                                                <button className="px-4 py-2 bg-black text-white rounded-3xl">Buy Again</button>
                                                <button className="px-4 py-2 bg-white border border-black text-black rounded-3xl">
                                                    Return/Refund
                                                </button>
                                            </div>
                                        )}
                                        {item.status === "Pending" && (
                                            <div className="flex flex-col gap-2">
                                                <button className="px-4 py-2 bg-black text-white rounded-3xl">Buy Again</button>
                                                <button className="px-4 py-2 bg-white border border-black text-black rounded-3xl">
                                                    Cancel
                                                </button>
                                            </div>
                                        )}
                                        {item.status === "On the way" && (
                                            <div className="flex flex-col gap-2">
                                                <button className="px-4 py-2 bg-black text-white rounded-3xl">Track</button>
                                            </div>
                                        )}
                                        {item.status === "Canceled" && (
                                            <div className="flex flex-col gap-2">
                                                <button className="px-4 py-2 bg-black text-white rounded-3xl">Buy Again</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                )
        }
    }

    return (

        <div className='container mx-auto'>
            <h1 className="text-xl font-bold mb-6">MANAGE ACCOUNT</h1>

            <div className='p-5 rounded-t-lg bg-gray-100'>
                <div className='flex rounded-lg justify-between bg-white p-5'>
                    <div >
                        {activeTabObject && (

                            <button>{activeTabObject.label}</button>

                        )}
                    </div>
                    <div>
                        <LiaEditSolid className='text-xl font-bold' />
                    </div>
                </div>
            </div>
            <div className="mb-5 rounded-b-lg bg-gray-100 flex md:flex-row flex-col">


                {/* Sidebar */}
                <aside className="w-64  p-4 border-r mx-auto">
                    <nav className="space-y-4">
                        {tabs.map((tab) => (
                            <button key={tab.id}
                                className={`flex items-center w-full p-2 text-left rounded-lg hover:bg-white ${activeTab === tab.id && 'bg-white'}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                               <span className='my-auto'>{tab.icon}</span>   {tab.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Content */}
                <main className="flex-1 p-6">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}


export default ManageAccount