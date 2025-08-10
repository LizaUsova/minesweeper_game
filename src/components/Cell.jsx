import React from 'react';

function Cell({ onClick }) {
    return (
        <button
            className="cell cell_closed"
            onClick={onClick}>
        </button>
    );
}

export default Cell;