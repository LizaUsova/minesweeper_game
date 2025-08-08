import { useState } from 'react'
import './App.css'
import Board from "./components/Level/Board.jsx";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [level, setLevel] = useState('');

  return (
    <div className="game">
          <h1>Sapper Game</h1>
            {!gameStarted ? (
                <button
                    onClick={() => setGameStarted(true)}>
                    Start Game
                </button>
            ) : (
                !level ? (
                <div className="levels">
                    <h2>Select level</h2>
                    <button onClick={() => setLevel('easy')}>Easy</button>
                    <button onClick={() => setLevel('medium')}>Medium</button>
                    <button onClick={() => setLevel('hard')}>Hard</button>
                    <button onClick={() => setLevel('custom')}>Custom</button>
                </div>
                ) : (
                    <Board level={level} />
                )
            )}
        </div>
  )
}

export default App
