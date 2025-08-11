import { useState } from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import StartGame from "./components/StartGame.jsx";
import EasyLevel from "./components/Levels/EasyLevel.jsx";
import MediumLevel from "./components/Levels/MediumLevel.jsx";
import HardLevel from "./components/Levels/HardLevel.jsx";
import CustomLevel from "./components/Levels/CustomLevel.jsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<StartGame />} />
            <Route path="/easy" element={<EasyLevel />} />
            <Route path="/medium" element={<MediumLevel />} />
            <Route path="/hard" element={<HardLevel />} />
            <Route path="/custom" element={<CustomLevel />} />
        </Routes>
    );
}

export default App;
