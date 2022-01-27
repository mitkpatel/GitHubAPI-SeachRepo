import '../index.css';

function RepoDetails({ details, loading}) {
    if(loading) {
        return (
            <h1 className="loader">Loading...</h1>
        )
    }
    return(
        <div className="repo-details-container">
            <div className="details-row">
                <label className="label">Name: </label>
                <spam className="value">{details.name}</spam>
            </div>
            <div className="details-row">
                <label className="label">Forks Count: </label>
                <spam className="value">{details.forks}</spam>
            </div>
            <div className="details-row">
                <label className="label">Language: </label>
                <spam className="value">{details.language}</spam>
            </div>
            <div className="details-row">
                <label className="label">Starts: </label>
                <spam className="value">{details.stargazers_count}</spam>
            </div>
            <div className="details-row">
                <button>Bookmark</button>
            </div>
        </div>
    )
};

export default RepoDetails;