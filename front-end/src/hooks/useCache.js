import { useState } from "react";

export const useCache = () => {
    const [cache, setCache] = useState({});

    const updateCache = (username, data) => {
        const updatedCache = { ...cache, [username]: data };

        const cacheEntries = Object.entries(updatedCache);
        if (cacheEntries.length > 5) {
            const oldestUsername = cacheEntries[0][0];
            delete updatedCache[oldestUsername];
        }

        setCache(updatedCache);
    };

    return [cache, updateCache];
};