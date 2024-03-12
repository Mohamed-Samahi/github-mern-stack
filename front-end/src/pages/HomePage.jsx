import React from "react";
import { ProfileInfo, Repos, Search, SortRepos, Spinner } from "../components";
import { useUser } from "../contexts/UserContext";

const HomePage = () => {
    const { userProfile, loading, sortedRepositories } = useUser();

    return (
        <div className='h-full m-4'>
            <Search />
            <SortRepos />
            {loading ? (
                <div className="flex items-center justify-center w-full">
                    <Spinner />
                </div>
            ) : null
            }
            {(userProfile && sortedRepositories && !loading) ? (
                <div className='flex flex-col items-start justify-center gap-4 md:flex-row'>
                    {userProfile && <ProfileInfo userProfile={userProfile} />}
                    <div className="lg:w-2/3 ">
                        {sortedRepositories && <Repos repositories={sortedRepositories} />}
                    </div>
                </div>
            ) : null
            }
        </div>
    );
};

export default HomePage;