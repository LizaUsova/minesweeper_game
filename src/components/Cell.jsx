function Cell({ onClick, onRightClick, status }) {

    let val = ""
    const classes = ["cell"]
    if (status === 'O') {
        classes.push("cell_closed")
    } else if (status === 'F') {
        classes.push("cell_flag")
    } else {
        classes.push("cell_number")
        val = status
    }

    return (
        <button
            className={classes.join(" ")}
            onClick={onClick}
            onContextMenu={onRightClick}
        >
            {val}
        </button>
    );
}

export default Cell;