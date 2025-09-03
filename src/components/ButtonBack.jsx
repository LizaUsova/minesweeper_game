import React from 'react';
import {useNavigate} from "react-router-dom";

function ButtonBack(props) {
    const navigate = useNavigate();

    const handleCellClickToMenu = () => {
        navigate("/")
    }

    return (
        <div className="btn">
            <button className="btn_back" onClick={handleCellClickToMenu}>Back</button>
        </div>
    );
}

export default ButtonBack;