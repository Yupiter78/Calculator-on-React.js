import React from "react";
import PropTypes from "prop-types";

const Operators = ({ operators, onOperationUp }) => {
    return (
        <>
            {operators.map((operator, i) => (
                <div key={i} onClick={() => onOperationUp(operator)}>
                    {operator}
                </div>
            ))}
        </>
    );
};
Operators.propTypes = {
    operators: PropTypes.array.isRequired,
    onOperationUp: PropTypes.func.isRequired
};
export default Operators;
