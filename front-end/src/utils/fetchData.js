import toast from "react-hot-toast";

export const fetchData = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
                "authorization": `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`
            }
        })

        if (!response.ok) throw new Error(response.statusText)

        const data = await response.json();

        return data;

    } catch (error) {
        const errorMessage = { error: error.message }
        return errorMessage
    }
}