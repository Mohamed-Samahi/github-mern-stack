import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCache } from "./useCache";
import { getUsernameFromSearchParams } from "../utils/getUrlParams";
import { getUserData } from "../utils/getUserProfileAndRepos";

export const useFetchData = (setUserProfile, setRepositories) => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const [cache, updateCache] = useCache();

    const fetchData = useCallback(async () => {
        setLoading(true);
        const username = getUsernameFromSearchParams();

        if (cache[username]) {
            const { cachedUserProfile, cachedRepositories } = cache[username];
            setUserProfile(cachedUserProfile);
            setRepositories(cachedRepositories);
            setLoading(false);
            return;
        }

        const { userProfile, userRepositories, error } = await getUserData(username);

        if (!error) {
            updateCache(username, { cachedUserProfile: userProfile, cachedRepositories: userRepositories });
            setUserProfile(userProfile);
            setRepositories(userRepositories);
        }
        setLoading(false);
    }, [cache, location.search]);

    return { fetchData, loading, location };
};