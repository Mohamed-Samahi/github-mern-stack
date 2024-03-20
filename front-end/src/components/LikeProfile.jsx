import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";

const LikeProfile = ({ userProfile }) => {
    const { authorizedUser } = useAuth();

    const isOwnProfile = authorizedUser?.username === userProfile.login;

    const handleLikeProfile = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/user/like/${userProfile.login}`, {
                method: "POST",
                credentials: "include",
            });

            const data = await res.json();

            if (data.error) throw new Error(data.error);

            toast.success(data.message);

        } catch (error) {
            toast.error(error.message);
        }
    };

    if (!authorizedUser || isOwnProfile) return null;

    return (
        <button
            className='flex items-center w-full gap-2 p-2 text-xs font-medium border border-blue-400 rounded-md bg-glass'
            onClick={handleLikeProfile}
        >
            <FaHeart size={16} /> Like Profile
        </button>
    );
};
export default LikeProfile;