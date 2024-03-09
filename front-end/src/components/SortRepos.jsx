import { useUser } from "../contexts/UserContext";

const SortRepos = () => {
    const { sortKey, setSortKey } = useUser();

    const handleSetSortKey = (sortKey) => {
        setSortKey(prev => sortKey)
    }

    const sortButtons = [
        { buttonLabel: "Most Recent", sortType: "recent" },
        { buttonLabel: "Most Stars", sortType: "stars" },
        { buttonLabel: "Most Forks", sortType: "forks" },
    ]

    return (
        <div className='flex items-center justify-center lg:justify-end'>
            {sortButtons.map((sortButton, index) => (
                <div key={`${index}-${sortButton.buttonLabel}`}>
                    <button
                        type='button'
                        onClick={() => handleSetSortKey(sortButton.sortType)}
                        className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium ${sortKey === sortButton.sortType ? "border border-blue-500" : null} rounded-lg bg-glass`}
                    >
                        {sortButton.buttonLabel}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SortRepos;