"use client"
import { useState } from 'react';
import { LiaEditSolid } from "react-icons/lia";
import order from "../../../public/images/order.png"
import Image from 'next/image';

import p1 from '../../../public/images/p1.png'
import p2 from '../../../public/images/p2.png'
import p3 from '../../../public/images/p3.png'
import { LuUserRound } from "react-icons/lu";
import { IoReorderFourOutline } from "react-icons/io5";
import { TiFolderDelete } from "react-icons/ti";
import { CiCreditCard1 } from "react-icons/ci";
import { TbAffiliate } from "react-icons/tb";
import { TbHelp } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaCreditCard, FaBarcode, FaPix, FaCopy } from "react-icons/fa6";
import { IoArrowUp } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa"; // Corrected import
import DefaultAccordion from '../Accordion';
const ManageAccount = () => {

    const [selectedMethod, setSelectedMethod] = useState(null);
    const [showResetForm, setShowResetForm] = useState(false);
    const [showForgetForm, setShowForgetForm] = useState(false);
    const [referralLink] = useState('https://your-ecommerce.com/referral/12345');

    const paymentMethods = [
        { id: "credit", label: "Credit", icon: <FaCreditCard /> },
        { id: "debit", label: "Debit", icon: <BsFillCreditCard2FrontFill /> },
        { id: "boleto", label: "Boleto", icon: <FaBarcode /> },
        { id: "pix", label: "Pix", icon: <FaPix /> },
    ];

    const handleMethodChange = (methodId) => {
        setSelectedMethod(methodId);
    };

    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: "profile", icon: <LuUserRound />, label: "Profile" },
        { id: "orders", icon: <IoReorderFourOutline />, label: "My Orders" },
        { id: "security", icon: <TiFolderDelete />, label: "Security" },
        { id: "payment", icon: <CiCreditCard1 />, label: "Payment" },
        { id: "affiliate", icon: <TbAffiliate />, label: "Affiliate" },
        { id: "help", icon: <TbHelp />, label: "Need Help" },
        { id: "logout", icon: <TbLogout2 />, label: "Log Out" },
    ];

    const handleResetClick = () => {
        setShowResetForm(true);
        setShowForgetForm(false);
    };

    const handleForgetClick = () => {
        setShowForgetForm(true);
        setShowResetForm(false);
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(referralLink);
        alert('Referral link copied!');
    };

    const handleShareLink = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Join Our Affiliate Program',
                url: referralLink
            }).catch(console.error);
        } else {
            alert('Share not supported on this browser.');
        }
    };

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
            case "security":
                return (
                    <div>
                        <p>Password</p>
                        <p>*********</p>

                        <p className='text-red-600'>
                            <span className='inline-flex items-center justify-center w-6 h-6 border border-red-600 rounded-full text-sm font-bold'>!</span> &nbsp;
                            You already have a password. Do you want to
                            <span className='underline cursor-pointer ml-1' onClick={handleResetClick}>reset</span> it or
                            <span className='underline cursor-pointer ml-1' onClick={handleForgetClick}>forget</span>?
                        </p>

                        {showResetForm && (
                            <div className='mt-4'>
                                <h3 className='text-lg font-semibold'>Reset Password</h3>
                                <input type='password' placeholder='Type Your Password' className='border p-2 rounded-lg w-full my-2' />
                                <input type='password' placeholder='New Password' className='border p-2 rounded-lg w-full my-2' />
                                <input type='password' placeholder='Confirm Password' className='border p-2 rounded-lg w-full my-2' />
                                <button className='px-4 py-2 bg-black text-white rounded'>Reset Password</button>
                            </div>
                        )}

                        {showForgetForm && (
                            <div className='mt-4'>
                                <h3 className='text-lg font-semibold'>Forgot Password</h3>
                                <input type='password' placeholder='New Password' className='border p-2 rounded-lg w-full my-2' />
                                <input type='password' placeholder='Confirm Password' className='border p-2 rounded-lg w-full my-2' />
                                <button className='px-4 py-2 bg-black text-white rounded'>Save Password</button>
                            </div>
                        )}

                    </div>
                )
                case "affiliate":
                    return (
                        <div>
                            <h3 className='text-xl font-bold mb-4'>Affiliate Program</h3>
                            {/* <form className='space-y-4'>
                                <input type='file' accept='image/*' className='border p-2 rounded w-full' placeholder='Upload Utility Bill' />
                                <input type='file' accept='image/*' className='border p-2 rounded w-full' placeholder='Face Verification' />
                                <button className='px-4 py-2 bg-blue-500 text-white rounded'>Register</button>
                            </form> */}
                            <div className='grid grid-cols-2 gap-4 mt-6'>
                                <div className='bg-gray-200 p-4 rounded-lg'>

                                    <h1>Total Affiliates</h1>

                                    <div className='flex justify-between mt-5'>
                                        <p> 325 Affiliates </p>
                                        <p className='flex items-center'> <IoArrowUp className='text-yellow-500'/> 5% this month </p>
                                    </div>
                                    
                                    </div>
                                <div className='bg-gray-200 p-4 rounded-lg'>

                                    <h1>Total Payouts</h1>

                                    <div className='flex justify-between mt-5'>
                                        <p> 325 Affiliates </p>
                                        <p className='flex items-center'> <IoArrowUp className='text-yellow-500'/> 5% this month </p>
                                    </div>
                                    
                                    </div>
                                <div className='bg-gray-200 p-4 rounded-lg'>

                                    <h1>Return Product</h1>

                                    <div className='flex justify-between mt-5'>
                                        <p> 325 Affiliates </p>
                                        <p className='flex items-center'> <IoArrowUp className='text-yellow-500'/> 5% this month </p>
                                    </div>
                                    
                                    </div>
                                <div className='bg-gray-200 p-4 rounded-lg'>

                                    <h1>Total Sales</h1>

                                    <div className='flex justify-between mt-5'>
                                        <p> 325 Affiliates </p>
                                        <p className='flex items-center'> <IoArrowUp className='text-yellow-500'/> 5% this month </p>
                                    </div>
                                    
                                    </div>
                                <div className='bg-gray-200 p-4 rounded-lg'>

                                    <h1>Pending Payouts</h1>

                                    <div className='flex justify-between mt-5'>
                                        <p> 325 Affiliates </p>
                                        <p className='flex items-center'> <IoArrowUp className='text-yellow-500'/> 5% this month </p>
                                    </div>
                                    
                                    </div>
                              
                            </div>
                            <div className='flex gap-4 mt-6 justify-end' >
                                <button onClick={handleCopyLink} className='px-4 py-2 bg-green-500 text-white rounded flex items-center gap-2'><FaCopy /> Copy Referral Link</button>
                                <button onClick={handleShareLink} className='px-4 py-2 bg-purple-500 text-white rounded flex items-center gap-2'><FaShareAlt /> Share Referral Link</button>
                            </div>
                        </div>
                    );
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
            case "payment":
                return (
                    <div className='grid grid-cols-1'>
                        <div>

                            <ul className="space-y-4">
                                {paymentMethods.map((method) => (
                                    <li
                                        key={method.id}
                                        className={`flex items-center p-4 border rounded-lg cursor-pointer ${selectedMethod === method.id
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
                    </div>
                )

            case "help":
                return (

                    <div className='grid grid-cols-1'>
                        <DefaultAccordion />
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
                                className={`flex gap-2 items-center w-full p-2 text-left rounded-lg hover:bg-white ${activeTab === tab.id && 'bg-white'}`}
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