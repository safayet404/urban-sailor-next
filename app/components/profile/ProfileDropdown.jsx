// ProfileDropdown.js
import React from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const ProfileDropdown = ({ onClose, onProfileClick }) => {
    const [size, setSize] = React.useState(null);

    const handleOpen = (value) => {
        setSize(value);
    };

    return (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
            <div className="py-1">
                <button
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => { onClose(); onProfileClick(); }}
                >
                    Profile
                </button>
                <button
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => { onClose(); console.log('My Order clicked'); }}
                >
                    My Order
                </button>
                <button
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => { onClose(); console.log('Security clicked'); }}
                >
                    Security
                </button>
                <button
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => { onClose(); console.log('Payment clicked'); }}
                >
                    Payment
                </button>
                <button
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => { onClose(); handleOpen("md"); }} // Open modal with size "md"
                >
                    Need Help
                </button>
                <button
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => { onClose(); console.log('Logout clicked'); }}
                >
                    Logout
                </button>
            </div>
            <Dialog
                open={size !== null} // Open the dialog if size is set
                size={size || "md"}
                handler={handleOpen}
            >
                <DialogHeader>It's a simple dialog.</DialogHeader>
                <DialogBody>
                    The key to more success is to have a lot of pillows. Put it this way,
                    it took me twenty-five years to get these plants, twenty-five years of
                    blood, sweat, and tears, and I'm never giving up, I'm just
                    getting started. I'm up to something. Fan luv.
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={() => handleOpen(null)} // Close the dialog
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={() => handleOpen(null)} // Close the dialog
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default ProfileDropdown;