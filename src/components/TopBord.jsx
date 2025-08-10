import React from 'react';

function TopBord({ bombs, timer }) {
    return (
        <div className="top-board">
            <div className="top-board_minecounter">{bombs}</div>
            <div className="top-board_timer">{timer}</div>
        </div>
    );
}

export default TopBord;