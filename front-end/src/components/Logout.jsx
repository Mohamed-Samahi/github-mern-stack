import { MdLogout } from "react-icons/md";
import { useAuth } from "../contexts/AuthContext";
import { useModal } from "../contexts/Logout";

const Logout = () => {
    const { authorizedUser } = useAuth();
    const { openModal } = useModal();

    return (
        <>
            <img
                src={authorizedUser?.avatarUrl || "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
                alt="user image"
                className='w-10 h-10 border border-gray-800 rounded-full'
            />
            <div
                onClick={openModal}
                className='flex items-center p-2 mt-auto border border-gray-800 rounded-lg cursor-pointer bg-glass'>
                <MdLogout size={22} />
            </div>
        </>
    );
};

export default Logout;