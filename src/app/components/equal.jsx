import React from "react";
import PropTypes from "prop-types";

const Equal = ({ onAnswer }) => {
    return (
        <div className="equal" onClick={onAnswer}>
            =
        </div>
    );
};
Equal.propTypes = {
    onAnswer: PropTypes.func.isRequired
};
export default Equal;
