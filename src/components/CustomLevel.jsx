import React, {useState} from 'react';
import Board from "./Board.jsx";
import ButtonBack from "./ButtonBack.jsx";

function CustomLevel(props) {
    const [customConfig, setCustomConfig] = useState({rows: 0, cols: 0, bombs: 0});
    const [startCustom, setStartCustom] = useState(false)
    const handleChangeCustom = ({target}) => {
        setCustomConfig(prev => ({
            ...prev,
            [target.name]: Number(target.value)
        }));
    };

    return (
        <>
            {!startCustom ? (
                <>
                    <div className="custom-inputs">
                        <label>
                            <span className="custom-values">rows:</span>
                            <input
                                type="number"
                                name="rows"
                                value={customConfig.rows}
                                onChange={handleChangeCustom}
                                min={8}
                            />
                        </label>
                        <label>
                            <span className="custom-values">cols:</span>
                            <input
                                type="number"
                                name="cols"
                                value={customConfig.cols}
                                onChange={handleChangeCustom}
                                min={8}
                            />
                        </label>
                        <label>
                            <span className="custom-values">bombs:</span>
                            <input
                                type="number"
                                name="bombs"
                                value={customConfig.bombs}
                                onChange={handleChangeCustom}
                                min={1}
                            />
                        </label>
                    </div>
                    <div className="btn">
                        <button className="btn_custom-run" onClick={() => setStartCustom(true)}>
                            Start
                        </button>
                            <ButtonBack />
                    </div>
                </>
            ) : (
                <Board customConfig={{
                    height: customConfig.rows,
                    width: customConfig.cols,
                    mines: customConfig.bombs
                }} level="custom" />
            )}
        </>
    );
}

export default CustomLevel;