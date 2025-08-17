import React from "react";
import Board from "./Board.jsx";
import { useParams } from "react-router-dom";
import CustomLevel from "./CustomLevel.jsx";

function LevelPage() {
    const { level } = useParams();

    return (
        <div>
            {level === "custom" ? (
                <CustomLevel />
            ) : (
                <Board level={level} />
            )}
        </div>
    );
}

export default LevelPage;