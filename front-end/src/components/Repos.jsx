import React from "react";
import Repo from "./Repo";

const Repos = React.memo(({ repositories }) => {
    if (!repositories) return null;

    return (
        <div className={`w-full bg-glass rounded-lg px-8 py-6`}>
            <ul className='relative w-full border-gray-200 border-s'>
                {repositories?.length === 0 ?
                    <li className="mb-10 whitespace-nowrap ms-7">No Repositories Found!</li>
                    : null
                }

                {repositories?.map((repository, index) => (
                    <li
                        key={`${index}-${repository?.name}`}
                        className='mb-10 ms-7'
                    >
                        <Repo repository={repository} />
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default Repos;