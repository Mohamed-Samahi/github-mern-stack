import React from "react";
import { ProfileInfo, Repos, Search, SortRepos, Spinner } from "../components";
import { useUser } from "../contexts/UserContext";

const HomePage = React.memo(() => {
    const { userProfile, loading, sortedRepositories } = useUser();

    return (
        <div className='flex-1 flex-grow h-full m-4'>
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
                    {userProfile ? <ProfileInfo userProfile={userProfile} /> : (
                        <div>Couldn't get Profile Info to display!</div>
                    )}
                    <div className="lg:w-2/3 ">
                        {sortedRepositories ? <Repos repositories={sortedRepositories} /> : (
                            <div>Couldn't get repositories to display!</div>
                        )}
                    </div>
                </div>
            ) : null
            }
        </div>
    );
});

export default HomePage;