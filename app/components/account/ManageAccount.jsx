"use client"
import { useState } from 'react';
import { LiaEditSolid } from "react-icons/lia";
const ManageAccount = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const tabs = [
        { id: "profile", label: "Profile" },
        { id: "orders", label: "My Orders" },
        { id: "security", label: "Security" },
        { id: "payment", label: "Payment" },
        { id: "affiliate", label: "Affiliate" },
        { id: "help", label: "Need Help" },
        { id: "logout", label: "Log Out" },
    ];

    const activeTabObject = tabs.find(tab => tab.id === activeTab);

    const renderContent = () => {
        switch (activeTab) {
            case "profile":
                return (
                    <div>
                        <div className='bg-white rounded-lg p-5'>
                            <h1 className='text-2xl text-black'>Personal Information</h1>
                        </div>
                    </div>
                )
        }
    }

    return (

        <div className='container mx-auto'>
            <h1 className="text-xl font-bold mb-6">MANAGE ACCOUNT</h1>

                <div className='p-5 rounded-lg bg-gray-100'>
                   <div className='flex rounded-lg justify-between bg-white p-5'>
                   <div >
                        {activeTabObject && (

                            <button>{activeTabObject.label}</button>

                        )}
                    </div>
                    <div>
                    <LiaEditSolid />
                    </div>
                   </div>
                </div>
            <div className="mb-5  rounded-lg bg-gray-100 flex">


                {/* Sidebar */}
                <aside className="w-64  p-4 border-r">
                    <nav className="space-y-4">
                        {tabs.map((tab) => (
                            <button
                                className={`flex items-center w-full p-2 text-left rounded-lg hover:bg-white ${activeTab === tab.id && 'bg-white'}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
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