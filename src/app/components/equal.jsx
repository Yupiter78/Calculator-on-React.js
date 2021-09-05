import React from "react";
import PropTypes from "prop-types";

const Equal = ({ onAnswer, onFixedValue }) => {
    return (
        <div className="equal" onClick={onAnswer} onMouseDown={onFixedValue}>
            =
        </div>
    );
};
Equal.propTypes = {
    onAnswer: PropTypes.func.isRequired,
    onFixedValue: PropTypes.func.isRequired
};
export default Equal;
