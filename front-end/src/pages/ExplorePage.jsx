import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner';
import Repos from '../components/Repos';

const ExplorePage = () => {
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [cache, setCache] = useState({});

    useEffect(() => {
        setCurrentPage(prev => 1)
    }, [selectedLanguage])

    useEffect(() => {
        // This effect runs when the selectedLanguage or currentPage changes.
        if (selectedLanguage) {
            exploreRepos(selectedLanguage, currentPage);
        }
    }, [selectedLanguage, currentPage]);

    const exploreRepos = async (language, page) => {
        setLoading(true);

        const cacheKey = `${language}-${page}`;
        if (cache[cacheKey]) {
            setRepos(cache[cacheKey]);
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(
                `http://localhost:5000/api/explore/repos/${language}?page=${page}`
            );

            const { items } = await res.json();

            setRepos(items);

            const newCache = { ...cache, [cacheKey]: items };
            const cacheKeys = Object.keys(newCache);

            if (cacheKeys.length > 5) {
                const oldestKey = cacheKeys.sort((a, b) => newCache[a].cacheTime - newCache[b].cacheTime)[0];
                delete newCache[oldestKey];
            }

            setCache(newCache);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex-1 flex-grow h-full px-4'>
            <div className='max-w-2xl p-4 mx-auto rounded-md bg-glass'>
                <h1 className='text-xl font-bold text-center'>Explore Popular Repositories</h1>
                <div className='flex flex-wrap justify-center gap-2 my-2'>
                    <img
                        src='/javascript.svg'
                        alt='JavaScript ogo'
                        className='cursor-pointer h-11 sm:h-20'
                        onClick={() => setSelectedLanguage("javascript")}
                    />
                    <img
                        src='/typescript.svg'
                        alt='TypeScript logo'
                        className='cursor-pointer h-11 sm:h-20'
                        onClick={() => setSelectedLanguage("typescript")}
                    />
                    <img
                        src='/c++.svg'
                        alt='C++ logo'
                        className='cursor-pointer h-11 sm:h-20'
                        onClick={() => setSelectedLanguage("c++")}
                    />
                    <img
                        src='/python.svg'
                        alt='Python logo'
                        className='cursor-pointer h-11 sm:h-20'
                        onClick={() => setSelectedLanguage("python")}
                    />
                    <img
                        src='/java.svg'
                        alt='Java logo'
                        className='cursor-pointer h-11 sm:h-20'
                        onClick={() => setSelectedLanguage("java")}
                    />
                </div>
                {repos?.length > 0 && (
                    <h2 className='flex items-center justify-center gap-2 my-4 text-lg font-semibold text-center'>
                        <span className='bg-blue-100 text-blue-800 font-medium inline-flex items-center justify-center px-2.5 py-0.5 rounded-full '>
                            {selectedLanguage.toUpperCase()}{' '}
                        </span>
                        Repositories
                    </h2>
                )}
                <div className='flex flex-col items-center gap-5'>
                    {!loading && repos?.length > 0 && <Repos repositories={repos} />}
                    {loading && <Spinner />}

                    {/* Pagination Controls */}
                    {repos?.length > 0 || Object.keys(cache).length > 0 ? (
                        <div className="flex items-center justify-center gap-4">
                            <button
                                className={`px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-200 rounded ${currentPage === 1 ? "opacity-25" : "hover:bg-gray-300"}`}
                                onClick={() => setCurrentPage(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>

                            <span className='text-base font-bold text-white'>Page {currentPage}</span>

                            <button
                                className="px-2 py-1 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                Next
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default ExplorePage;