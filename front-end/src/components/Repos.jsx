import React from "react";
import Repo from "./Repo";

const Repos = React.memo(({ repositories }) => {
    if (!repositories) return null;

    return (
        <div className={`w-full bg-glass rounded-lg px-8 py-6`}>
            <ol className='relative w-full border-gray-200 border-s'>

                {repositories?.length === 0 ?
                    <li className="whitespace-nowrap">No Repositories Found!</li>
                    : null
                }

                {repositories?.map((repository, index) => (
                    <div key={`${index}-${repository?.name}`}>
                        <Repo repository={repository} />
                    </div>
                ))}
            </ol>
        </div>
    );
});

export default Repos;