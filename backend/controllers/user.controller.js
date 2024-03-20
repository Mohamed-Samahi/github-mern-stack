import User from "../models/user.model.js";

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

export const likeProfile = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await User.findById(req.user._id.toString());

        const userToLike = await User.findOne({ username });

        if (!userToLike) {
            return res.status(404).json({ error: "User is not a member" });
        }

        if (user.likedProfiles.includes(userToLike.username)) {
            return res.status(400).json({ error: "User already liked" });
        }

        userToLike.likedBy.push({ username: user.username, avatarUrl: user.avatarUrl, likedDate: Date.now() });
        user.likedProfiles.push(userToLike.username);

        // await userToLike.save();
        // await user.save();
        await Promise.all([userToLike.save(), user.save()]);

        res.status(200).json({ message: "User liked" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getLikes = async (req, res) => {
    try {
        const user = await User.findById(req.user._id.toString());
        res.status(200).json({ likedBy: user.likedBy });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};