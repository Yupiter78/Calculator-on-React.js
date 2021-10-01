import React from "react";
import PropTypes from "prop-types";

const Operators = ({ operators, onOperationDown, onOperationUp }) => {
    return (
        <>
            {operators.map((operator, i) => (
                <div
                    key={i}
                    onMouseDown={onOperationDown}
                    onClick={() => onOperationUp(operator)}
                >
                    {operator}
                </div>
            ))}
        </>
    );
};
Operators.propTypes = {
    operators: PropTypes.array.isRequired,
    onOperationDown: PropTypes.func.isRequired,
    onOperationUp: PropTypes.func.isRequired
};
export default Operators;
