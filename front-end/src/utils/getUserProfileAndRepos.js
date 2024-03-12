import toast from "react-hot-toast";
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
    let error = false
    try {
        const userProfileApi = `https://api.github.com/users/${username}`;
        const userRepositoriesApi = `https://api.github.com/users/${username}/repos`;

        // Execute both requests in parallel and destructure the results
        const userData = await Promise.all([
            getUserProfile(userProfileApi),
            getUserRepositories(userRepositoriesApi)
        ])

        for (let i = 0; i < userData?.length; i++) {
            if (userData[i].error) return error = true
        }

        if (error) return toast.error(response[0].error)

        const [userProfile, userRepositories] = userData;

        return { userProfile, userRepositories };

    } catch (error) {
        return { error: error.message };
    }
}