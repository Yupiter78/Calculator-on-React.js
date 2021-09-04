import React from "react";
import PropTypes from "prop-types";

const EnterButtons = ({ characters, onButton }) => {
    return (
        <>
            <div className="numbers">
                {characters.map((character) => (
                    <div
                        key={character}
                        id={character}
                        onClick={() => onButton(character)}
                    >
                        {character}
                    </div>
                ))}
            </div>
        </>
    );
};

EnterButtons.propTypes = {
    characters: PropTypes.array.isRequired,
    onButton: PropTypes.func.isRequired
};

export default EnterButtons;
