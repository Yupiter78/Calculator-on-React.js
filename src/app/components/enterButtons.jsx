import React from "react";
import PropTypes from "prop-types";

const EnterButtons = ({ characters }) => {
    return (
        <>
            <div className="numbers">
                {characters.map((character) => (
                    <div key={character}>{character}</div>
                ))}
            </div>
        </>
    );
};

EnterButtons.propTypes = {
    characters: PropTypes.array.isRequired
};

export default EnterButtons;
