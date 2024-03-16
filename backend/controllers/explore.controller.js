export const explorePopularRepos = async (request, response) => {
    const { page } = request.query;
    const { language } = request.params;
    console.log(page)

    try {
        const exploreResponse = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=5&page=${page}`, {
            headers: {
                "authorization": `token ${process.env.GITHUB_API_KEY}`
            }
        });

        const { items } = await exploreResponse.json();

        return response.status(200).json({ items })

    } catch (error) {
        response.status(500).json({ error: error.message })
    }
}