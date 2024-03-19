import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [authorizedUser, setAuthotizedUser] = useState(null);

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            // setLoading(true);
            try {
                const res = await fetch("http://localhost:5000/api/auth/check", {
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
                // setLoading(false);
            }
        };
        checkUserLoggedIn();
    }, []);

    const value = { authorizedUser, setAuthotizedUser }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);