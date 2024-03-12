import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { useFetchData } from '../hooks/useFetchData';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userProfile, setUserProfile] = useState(null);
    const [repositories, setRepositories] = useState([]);
    const [sortKey, setSortKey] = useState(null);
    const { fetchData, loading, location } = useFetchData(setUserProfile, setRepositories);

    useEffect(() => {
        setSortKey(prev => null)
    }, [location])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const sortRepositories = useCallback((repos, key) => {
        const repositories = Array.isArray(repos) ? [...repos] : [];

        switch (key) {
            case 'recent':
                return repositories.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            case 'stars':
                return repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);
            case 'forks':
                return repositories.sort((a, b) => b.forks_count - a.forks_count);
            default:
                return repositories;
        }

    }, []);

    const sortedRepositories = useMemo(() => sortRepositories(repositories, sortKey), [repositories, sortKey]);

    const value = useMemo(() => ({ userProfile, sortedRepositories, loading, sortKey, fetchData, setSortKey }), [userProfile, repositories, sortKey, loading]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);