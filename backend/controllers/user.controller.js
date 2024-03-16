export const getUserProfileAndRepos = async (request, response) => {
    const { username } = request.params;

    try {
        const userProfileResponse = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
                "authorization": `token ${process.env.GITHUB_API_KEY}`
            }
        });

        const userProfile = await userProfileResponse.json();

        const userRepositoriesResponse = await fetch(userProfile.repos_url, {
            headers: {
                "authorization": `token ${process.env.GITHUB_API_KEY}`
            }
        });

        const userRepositories = await userRepositoriesResponse.json();

        response.status(200).json({ userProfile, userRepositories });

    } catch (error) {
        response.status(500).json({ error: error.message });
    }
}