import React from "react";
import PropTypes from "prop-types";

const Operators = ({ operators, onCalculate, onSecondOpValue }) => {
    return (
        <>
            {operators.map((operator, i) => (
                <div
                    key={i}
                    onMouseDown={onSecondOpValue}
                    onClick={() => onCalculate(operator)}
                >
                    {operator}
                </div>
            ))}
        </>
    );
};
Operators.propTypes = {
    operators: PropTypes.array.isRequired,
    onCalculate: PropTypes.func.isRequired,
    onSecondOpValue: PropTypes.func.isRequired
};
export default Operators;
