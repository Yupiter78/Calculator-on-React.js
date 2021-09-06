import React from "react";
import PropTypes from "prop-types";

const Screen = ({ display, result }) => {
    return (
        <div className="input">
            <p>result: {result}</p>
            <p>{display}</p>
        </div>
    );
};

Screen.propTypes = {
    display: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired
};

export default Screen;
