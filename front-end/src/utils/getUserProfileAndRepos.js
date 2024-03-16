import { fetchData } from "./fetchData";

export const getUserProfileAndRepositories = async (username) => {
    try {
        const userDataResponse = await fetchData(`http://localhost:5000/api/user/profile/${username}`)

        const { userProfile, userRepositories } = userDataResponse

        if (!userDataResponse.ok) {
            throw new Error("An Error Occured While Getting User Data")
        }

        return { userProfile, userRepositories };

    } catch (error) {
        return { error: error.message };
    }
}