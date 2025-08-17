import React, {useEffect, useState} from 'react';
import Cell from "./Cell.jsx";
import TopBord from "./TopBord.jsx";

function Board({level, customConfig}) {

    const [timer, setTimer] = useState(0);
    const [mineCounter, setMineCounter] = useState(0);
    const [isGameStarted, setIsGameStarted] = useState(false);

    const [gameData, setGameData] = useState(null);

    let config;
    if (level === 'easy') {
        config = {height: 8, width: 8, mines: 10};
    } else if (level === 'medium') {
        config = {height: 12, width: 12, mines: 20};
    } else if (level === 'hard') {
        config = {height: 12, width: 18, mines: 25};
    } else if (level === 'custom') {
        config = customConfig;
    }

    const {rows, cols, bombs} = config;
    const totalCells = rows * cols;

    useEffect(() => {

        // async function fetchInitData() {
        //     const res = await fetch('http://localhost:8080/minesweeper', {
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(config)
        //     })
        //     const data = await res.json();
        //     setGameData(data)
        //     return data
        // }
        // fetchInitData()

        setTimeout(() => {
            setGameData({
                state: "PLAY",
                board: [
                    "OOOOOOOOOO",
                    "OOOOOOOOOO",
                    "OOOOOOOOOO",
                    "OOOOOOOOOO",
                    "OOOOOOOOOO",
                ]
            })
        }, 500)
    }, []);


    // useEffect(() => {
    //     let interval;
    //     if (isGameStarted) {
    //         interval = setInterval(() => {
    //             setTimer(prev => prev + 1);
    //         }, 1000);
    //     }
    //     return () => clearInterval(interval);
    // }, [isGameStarted]);

    useEffect(() => {
        setMineCounter(bombs);
    }, [bombs]);

    const handleCellClick = (index) => {
        //  return e => {
        //      const width = gameData.board[0].length
        //      const y = Math.floor(index / width)
        //      const x = index % width

        //      async function dig() {
        //          const res = await fetch(`http://localhost:8080/minesweeper/dig?x=${x}&y=${y}`, {
        //              method: 'PUT'
        //          })
        //          const data = await res.json();
        //          setGameData(data)
        //          return data
        //      }
        //      dig()
        //  }

        return e => {
            if (!isGameStarted) {
                setIsGameStarted(true);
            }
            const width = gameData.board[0].length
            const y = Math.floor(index / width)
            const x = index % width

            const newGameData = {
                ...gameData,
                board: [...gameData.board]
            }

            const newRow = newGameData.board[y].split("")
            newRow[x] = '1'
            newGameData.board[y] = newRow.join("")
            setGameData(newGameData)
        }
    }

    const boardFlatten = gameData ? gameData.board.join("") : ""
    const width = gameData ? gameData.board[0].length : 0


    return (
        <>
            {level === 'custom'}
            {gameData ?
                (
                    <div className="board_wrapper">
                        <TopBord bombs={mineCounter} timer={timer}/>
                        <div className="board-grid" style={{gridTemplateColumns: `repeat(${width}, 40px)`}}>
                            {boardFlatten.split("").map((_, index) =>
                                <Cell key={index} onClick={handleCellClick(index)} status={_}/>
                            )}
                        </div>
                    </div>

                ) : (
                    <p>fuck</p>
                )}
        </>
    );
}

export default Board;