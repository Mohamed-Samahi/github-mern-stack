import React, { useState, useContext, useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from './AuthContext';

const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const { setAuthotizedUser } = useAuth();

    const openModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const handleLogout = useCallback(async () => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/logout", { credentials: "include" });

            if (!res.ok) throw new Error("Couldn't logout!")

            setAuthotizedUser(null);
            closeModal()
        } catch (error) {
            toast.error(error.message);
        }
    }, []);

    const value = useMemo(() => ({
        isOpen,
        openModal,
        closeModal,
        handleLogout,
    }), [isOpen, openModal, closeModal, handleLogout]);

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};