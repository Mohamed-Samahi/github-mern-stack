import React from "react";

import { IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import { formatMemberDate } from "../utils/formatDate";
import LikeProfile from "./LikeProfile";

const ProfileInfo = React.memo(({ userProfile }) => {
    if (!userProfile) return null;

    const memberSince = formatMemberDate(userProfile?.created_at)

    return (
        <div className='flex flex-col w-full gap-2 lg:w-1/3 md:sticky md:top-10'>
            <div className='p-4 rounded-lg bg-glass'>
                <div className='flex flex-col items-center gap-y-2 gap-x-4 w-fit lg:flex-row'>
                    {/* User Avatar */}
                    <a href={userProfile?.html_url} target='_blank' rel='noreferrer'>
                        <img src={userProfile?.avatar_url} className='w-24 h-24 mb-2 rounded-md' alt='' />
                    </a>
                    {/* View on Github */}
                    <div className='flex flex-col items-center gap-2 mb-2 lg:mb-0'>
                        <LikeProfile userProfile={userProfile} />
                        <a
                            href={userProfile?.html_url}
                            target='_blank'
                            rel='noreferrer'
                            className='flex items-center w-full gap-2 p-2 text-xs font-medium border border-blue-400 rounded-md cursor-pointer bg-glass'
                        >
                            <FaEye size={16} />
                            View on Github
                        </a>
                    </div>
                </div>

                {/* User Bio */}
                {userProfile?.bio ? (
                    <div className='flex items-center gap-2'>
                        <TfiThought />
                        <p className='text-sm'>{userProfile?.bio.substring(0, 60)}...</p>
                    </div>
                ) : null}

                {/* Location */}
                {userProfile?.location ? (
                    <div className='flex items-center gap-2'>
                        <IoLocationOutline />
                        {userProfile?.location}
                    </div>
                ) : null}

                {/* Twitter Username */}
                {userProfile?.twitter_username ? (
                    <a
                        href={`https://twitter.com/${userProfile.twitter_username}`}
                        target='_blank'
                        rel='noreferrer'
                        name="user-profile-image"
                        aria-label="user profile image"
                        className='flex items-center gap-2 hover:text-sky-500'
                    >
                        <FaXTwitter />
                        {userProfile?.twitter_username}
                    </a>
                ) : null}

                {/* Member Since Date */}
                <div className='my-2'>
                    <p className='text-sm font-bold text-blue-500'>Member since</p>
                    <p className=''>{memberSince === "Invalid Date" ? null : memberSince}</p>
                </div>

                {/* Email Address */}
                {userProfile?.email ? (
                    <div className='my-2'>
                        <p className='text-sm font-bold text-blue-500'>Email address</p>
                        <p className=''>{userProfile.email}</p>
                    </div>
                ) : null}

                {/* Full Name */}
                {userProfile?.name ? (
                    <div className='my-2'>
                        <p className='text-sm font-bold text-blue-500'>Full name</p>
                        <p className=''>{userProfile?.name}</p>
                    </div>
                ) : null}

                {/* Username */}
                <div className='my-2'>
                    <p className='text-sm font-bold text-blue-500'>Username</p>
                    <p className=''>{userProfile?.login}</p>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-2 mx-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2'>
                {/* Followers Count */}
                <div className='flex items-center flex-1 gap-2 p-2 rounded-lg bg-glass min-w-24'>
                    <RiUserFollowFill className='w-5 h-5 text-blue-800' />
                    <p className='text-xs whitespace-nowrap'>Followers: {userProfile?.followers}</p>
                </div>

                {/* Following count */}
                <div className='flex items-center flex-1 gap-2 p-2 rounded-lg bg-glass min-w-24'>
                    <RiUserFollowLine className='w-5 h-5 text-blue-800' />
                    <p className='text-xs whitespace-nowrap'>Following: {userProfile?.following}</p>
                </div>

                {/* Number of public repos */}
                <div className='flex items-center flex-1 gap-2 p-2 rounded-lg bg-glass min-w-24'>
                    <RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
                    <p className='text-xs whitespace-nowrap'>Public repos: {userProfile?.public_repos}</p>
                </div>

                {/* Number of public gists */}
                <div className='flex items-center flex-1 gap-2 p-2 rounded-lg bg-glass min-w-24'>
                    <RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
                    <p className='text-xs whitespace-nowrap'>Public gists: {userProfile?.public_gists}</p>
                </div>
            </div>
        </div>
    );
});

export default ProfileInfo;