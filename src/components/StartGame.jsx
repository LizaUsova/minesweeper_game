import React, {useState} from 'react';
import LevelSelect from "./LevelSelect.jsx";

function StartGame(props) {
    const [gameStarted, setGameStarted] = useState(false);

    return (
        <div className="game">
            <h1>Minesweeper</h1>

            {!gameStarted && (
                <button onClick={() => setGameStarted(true)}>
                    Start Game
                </button>
            )}

            {gameStarted && (
                <>
                    <LevelSelect />
                </>
            )}
        </div>
    );
}

export default StartGame;