import React from "react";
import PropTypes from "prop-types";

const EnterButtons = ({ characters, onButtonDown, onButtonUp, onReset }) => {
    return (
        <>
            <div className="numbers">
                {characters.map((character) => {
                    if (character !== "AC") {
                        return (
                            <div
                                key={character}
                                id={character}
                                onMouseDown={() => onButtonDown(character)}
                                onClick={() => onButtonUp(character)}
                            >
                                {character}
                            </div>
                        );
                    } else {
                        return (
                            <div
                                key={character}
                                id={character}
                                onClick={onReset}
                            >
                                {character}
                            </div>
                        );
                    }
                })}
            </div>
        </>
    );
};

EnterButtons.propTypes = {
    characters: PropTypes.array.isRequired,
    onButtonDown: PropTypes.func.isRequired,
    onButtonUp: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
};

export default EnterButtons;
