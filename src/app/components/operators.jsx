import React from "react";
import PropTypes from "prop-types";

const Operators = ({ operators }) => {
    return (
        <>
            {operators.map((operator, i) => (
                <div key={i}>{operator}</div>
            ))}
        </>
    );
};
Operators.propTypes = {
    operators: PropTypes.array.isRequired
};
export default Operators;
