import './App.css';
import {Route, Routes} from "react-router-dom";
import StartGame from "./components/StartGame.jsx";
import CustomLevel from "./components/CustomLevel.jsx";
import LevelPage from "./components/LevelPage.jsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<StartGame />} />
            <Route path="/level/:level" element={<LevelPage />} />
            <Route path="/custom" element={<CustomLevel />} />
        </Routes>
    );
}

export default App;
