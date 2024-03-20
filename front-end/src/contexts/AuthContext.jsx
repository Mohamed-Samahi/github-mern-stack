import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [authorizedUser, setAuthotizedUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/auth/check", {
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        accept: 'application/json',
                        'User-agent': 'learning app',
                    }
                });
                const { user } = await res.json();

                setAuthotizedUser(user); // null or authenticated user object
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        checkUserLoggedIn();
    }, []);

    const value = { loading, authorizedUser, setAuthotizedUser }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);