import React, {useEffect, useState} from 'react';
import Cell from "./Cell.jsx";
import TopBord from "./TopBord.jsx";

function Board({level}) {
    const [customConfig, setCustomConfig] = useState({rows: 0, cols: 0, bombs: 0});
    const [timer, setTimer] = useState(0);
    const [mineCounter, setMineCounter] = useState(0);
    const [isGameStarted, setIsGameStarted] = useState(false);

    let config;
    if (level === 'easy') {
        config = {rows: 8, cols: 8, bombs: 10};
    } else if (level === 'medium') {
        config = {rows: 12, cols: 12, bombs: 20};
    } else if (level === 'hard') {
        config = {rows: 12, cols: 18, bombs: 25};
    } else if (level === 'custom') {
        config = customConfig;
    }

    const { rows, cols, bombs } = config;
    const totalCells = rows * cols;

    const handleChangeCustom = ({target}) => {
        setCustomConfig(prev => ({
            ...prev,
            [target.name]: Number(target.value)
        }));
    };

    useEffect(() => {
        let interval;
        if (isGameStarted) {
            interval = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isGameStarted]);

    useEffect(() => {
        setMineCounter(bombs);
    }, [bombs]);

    const handleCellClick = () => {
        if (!isGameStarted) {
            setIsGameStarted(true);
        }
    };

    return (
        <>
            <h2>Good luck!</h2>

            {level === 'custom' && (
                <div className="custom-inputs">
                    <label>
                        <span className="custom-values">rows:</span>
                        <input type="number" name="rows" value={customConfig.rows} onChange={handleChangeCustom} min={8} />
                    </label>
                    <label>
                        <span className="custom-values">cols:</span>
                        <input type="number" name="cols" value={customConfig.cols} onChange={handleChangeCustom} min={8} />
                    </label>
                    <label>
                        <span className="custom-values">bombs:</span>
                        <input type="number" name="bombs" value={customConfig.bombs} onChange={handleChangeCustom} min={1} />
                    </label>
                </div>
            )}

            <div className="board_wrapper">
                <TopBord bombs={mineCounter} timer={timer} />
                <div className="board-grid" style={{gridTemplateColumns: `repeat(${cols}, 40px)`}}>
                    {Array.from({length: totalCells}).map((_, index) =>
                        <Cell key={index} onClick={handleCellClick} />
                    )}
                </div>
            </div>
        </>
    );
}

export default Board;