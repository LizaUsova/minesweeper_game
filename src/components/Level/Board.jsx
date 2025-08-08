import React, {useState} from 'react';

function Board({level}) {
    let config
    const [customConfig, setCustomConfig] = useState({rows: 0, cols: 0, bombs: 0})

    if(level === 'easy') {
        config = {rows: 6, cols: 9, bombs: 2}
    } else if(level === 'medium') {
        config = {rows: 9, cols: 12, bombs: 9}
    } else if(level === 'hard') {
        config = {rows: 12, cols: 12, bombs: 12}
    } else if(level === 'custom') {
        config = customConfig
    }


    const { rows, cols, bombs } = config;
    const totalCells = config.rows * config.cols;

    const handleChangeCustom = (e) => {
        const {name, value} = e.target
        setCustomConfig(prev => ({
            ...prev,
            [name]: parseInt(value, 10)
        }))
    }


    return (
        <>
            <h2>{level} level</h2>
            {level === 'custom' && (
                <div className="custom-inputs">
                    <label>
                        <span className="custom-values">rows:</span>
                        <input type="number" name="rows" value={customConfig.rows} onChange={handleChangeCustom} min={1} />
                    </label>
                    <label>
                        <span className="custom-values">cols:</span>
                        <input type="number" name="cols" value={customConfig.cols} onChange={handleChangeCustom} min={1} />
                    </label>
                    <label>
                        <span className="custom-values">bombs:</span>
                        <input type="number" name="bombs" value={customConfig.bombs} onChange={handleChangeCustom} min={0} />
                    </label>
                    {/*<button onClick={handleStartCustomGame}>Start Game</button>*/}
                </div>
            )}

            <div className="board-grid" style={{gridTemplateColumns: `repeat(${cols}, 40px)`}}>
                {Array.from({length: totalCells}).map((_, index) =>
                    <button key={index} className="cell"></button>
                    )}
            </div>
        </>
    )
}

export default Board;