export const fetchData = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
                "content-type": "application/json"
            }
        })

        if (!response.ok) throw new Error(response.statusText)

        const data = await response.json();

        return data;

    } catch (error) {
        const errorMessage = { error: error.message }
        console.log(errorMessage);
        return errorMessage
    }
}