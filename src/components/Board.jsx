import React, {useEffect, useState} from 'react';
import Cell from "./Cell.jsx";

function Board({level}) {
    const [customConfig, setCustomConfig] = useState({rows: 0, cols: 0, bombs: 0})
    const [timer, setTimer] = useState(0)
    const [mineCounter, setMineCounter] = useState(0)

    let config

    if(level === 'easy') {
        config = {rows: 8, cols: 8, bombs: 10}
    } else if(level === 'medium') {
        config = {rows: 12, cols: 12, bombs: 20}
    } else if(level === 'hard') {
        config = {rows: 12, cols: 18, bombs: 25}
    } else if(level === 'custom') {
        config = customConfig
    }

    const { rows, cols, bombs } = config;
    const totalCells = config.rows * config.cols;

    const handleChangeCustom = ({target}) => {
        const customConfigCopy = {...customConfig}
        customConfigCopy[target.name] = target.value;
        setCustomConfig(customConfigCopy)
    }

    useEffect(() => {
        let interval;

        if (rows > 0 && cols > 0 && bombs > 0) {
            interval = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [rows, cols, bombs]);

    useEffect(() => {
        setMineCounter(bombs);
    }, [bombs]);

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
                        <div className="top-board">
                            <div className="top-board_minecounter">{mineCounter}</div>
                            <div className="top-board_timer">{timer}</div>
                        </div>
                        <div className="board-grid" style={{gridTemplateColumns: `repeat(${cols}, 40px)`}}>
                            {Array.from({length: totalCells}).map((_, index) =>
                                <Cell key={index}></Cell>
                                )}
                        </div>
                    </div>
        </>
    )
}

export default Board;