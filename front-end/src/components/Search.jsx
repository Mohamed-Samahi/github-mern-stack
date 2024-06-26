import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { getUsernameFromSearchParams } from "../utils/getUrlParams";
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const username = getUsernameFromSearchParams()
    useEffect(() => {
        setSearchTerm(prev => username)
    }, [username])

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        if (searchTerm.trim() === '') {
            return;
        }

        navigate(`/?username=${encodeURIComponent(searchTerm.trim())}`);
    };

    return (
        <form
            onSubmit={handleSearchSubmit}
            className='max-w-xl p-2 mx-auto'
        >
            <label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only'>
                Search
            </label>
            <div className='relative'>
                <div className='absolute inset-y-0 z-10 flex items-center pointer-events-none start-0 ps-3'>
                    <IoSearch className='w-5 h-5' />
                </div>
                <input
                    type='search'
                    id='default-search'
                    className='block w-full p-4 text-sm bg-transparent rounded-lg ps-10 bg-glass focus:ring-blue-500 focus:border-blue-500 focus:bg-transparent '
                    placeholder='i.e. johndoe'
                    required
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    type='submit'
                    className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  bg-gradient-to-r from-cyan-900 to-blue-900 hover:scale-95 active:scale-90 transition-all duration-300'
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default Search;