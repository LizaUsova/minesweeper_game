import {Link} from "react-router-dom";
import EasyLevel from "./Levels/EasyLevel.jsx";


function LevelSelect() {
    return (
        <>
            <div className="levels">
                <h2>Select level</h2>
                <Link to="/easy">Easy</Link>
                <Link to="/medium">Medium</Link>
                <Link to="/hard">Hard</Link>
                <Link to="/custom">Custom</Link>
            </div>
        </>
    );
}

export default LevelSelect;
