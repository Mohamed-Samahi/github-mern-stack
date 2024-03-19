import { fetchData } from "./fetchData";

export const getUserProfileAndRepositories = async (username) => {
    try {
        const userDataResponse = await fetchData(`http://localhost:5000/api/user/profile/${username}`)

        const { userProfile, userRepositories } = userDataResponse

        return { userProfile, userRepositories };

    } catch (error) {
        return { error: error.message };
    }
}