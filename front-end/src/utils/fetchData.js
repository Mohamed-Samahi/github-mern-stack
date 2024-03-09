export const fetchData = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
                "authorization": `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`
            }
        })
        const data = await response.json();

        if (!response.ok) throw new Error(response.statusText)

        return data;

    } catch (error) {
        toast.error(error.message)
    }
}