export const fetchData = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                accept: 'application/json',
                'User-agent': 'learning app',
            }
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        const errorMessage = { error: error.message };
        console.error(errorMessage.error);
        return errorMessage;
    }
};