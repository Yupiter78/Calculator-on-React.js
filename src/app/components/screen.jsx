import React from "react";
import PropTypes from "prop-types";

const Screen = ({ display }) => {
    return <div className="input">{display}</div>;
};

Screen.propTypes = {
    display: PropTypes.string.isRequired
};

export default Screen;
