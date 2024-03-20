import { fetchData } from "./fetchData";

export const getUserProfileAndRepositories = async (username) => {
    try {
        const userDataResponse = await fetchData(`/api/user/profile/${username}`)

        const { userProfile, userRepositories } = userDataResponse

        return { userProfile, userRepositories };

    } catch (error) {
        return { error: error.message };
    }
}