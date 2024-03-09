import { fetchData } from "./fetchData";

export const getUserProfile = async (userProfileApi) => {
    const userProfile = await fetchData(userProfileApi)

    return userProfile;
}

export const getUserRepositories = async (userRepositoriesApi) => {
    const userRepositories = await fetchData(userRepositoriesApi)

    return userRepositories;
}

export const getUserData = async (username) => {
    try {
        const userProfileApi = `https://api.github.com/users/${username}`;
        const userRepositoriesApi = `https://api.github.com/users/${username}/repos`;

        // Execute both requests in parallel and destructure the results
        const [userProfile, userRepositories] = await Promise.all([
            getUserProfile(userProfileApi),
            getUserRepositories(userRepositoriesApi)
        ]);

        return { userProfile, userRepositories };

    } catch (error) {
        toast.error(error.message);
        return { error: error.message };
    }
}