import {Link} from "react-router-dom";

function LevelSelect() {
    return (
        <>
            <div className="levels">
                <h2>Select level</h2>
                <Link to="/level/easy">Easy</Link>
                <Link to="/level/medium">Medium</Link>
                <Link to="/level/hard">Hard</Link>
                <Link to="/level/custom">Custom</Link>
            </div>
        </>
    );
}

export default LevelSelect;
