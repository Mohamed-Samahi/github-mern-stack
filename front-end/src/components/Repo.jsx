import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { formatDate } from "../utils/formatDate";
import { PROGRAMMING_LANGUAGES } from "../constants/programmingLanguages";
import toast from "react-hot-toast"

const Repo = ({ repository }) => {

    const formatedDate = formatDate(repository?.pushed_at)

    const handleCloneClick = async (repository) => {
        try {
            await navigator.clipboard.writeText(repository);

            toast.success("Link copied to clipboard!");
        } catch (error) {
            toast.error("Failed to copy link.");
        }
    };


    return (
        <li className='mb-10 ms-7'>
            <span
                className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white'
            >
                <FaCodeBranch className='w-5 h-5 text-blue-800' />
            </span>
            <div className='flex flex-wrap items-center gap-2'>
                <a
                    href={repository?.html_url}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2 text-lg font-semibold'
                >
                    {repository?.name}
                </a>
                <span
                    className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
					py-0.5 rounded-full flex items-center gap-1'
                >
                    <FaRegStar /> {repository?.stargazers_count}
                </span>
                <span
                    className='bg-purple-100 text-purple-800 text-xs font-medium
					 px-2.5 py-0.5 rounded-full flex items-center gap-1'
                >
                    <FaCodeFork /> {repository?.forks_count}
                </span>
                <span
                    onClick={() => handleCloneClick(repository?.clone_url)}
                    className='cursor-pointer bg-green-100 text-green-800 text-xs
					font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'
                >
                    <FaCopy /> Clone
                </span>
            </div>

            <time
                className='block my-1 text-xs font-normal leading-none text-gray-400'
            >
                Released on {formatedDate}
            </time>
            <p className='mb-4 text-base font-normal text-gray-500'>
                {repository?.description ? repository?.description : "No Description Provided!"}
            </p>
            {repository?.language ?
                <img src={PROGRAMMING_LANGUAGES[repository?.language]} alt='Programming language icon' className='h-8' />

                : null
            }
        </li>
    );
};

export default Repo;