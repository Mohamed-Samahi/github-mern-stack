import React, { useEffect } from 'react'
import { useModal } from '../contexts/Logout';

const Modal = () => {
    const { isOpen, closeModal, handleLogout } = useModal();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            document.body.style.overflow = 'visible';
            document.body.style.height = 'auto';
        }

        return () => {
            document.body.style.overflow = 'visible';
            document.body.style.height = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div
            onClick={handleBackgroundClick}
            className="absolute top-0 bottom-0 left-0 right-0 z-[1000000000] flex items-center justify-center w-screen h-screen bg-black bg-opacity-80">
            <div className="max-w-md p-8 bg-white rounded shadow-lg">
                <p className="text-lg">Are you sure you want to logout?</p>
                <div className="flex justify-end mt-4">
                    <button className="px-4 py-2 mr-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400" onClick={() => closeModal()}>Cancel</button>
                    <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Modal