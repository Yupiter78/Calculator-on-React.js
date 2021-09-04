import React from "react";
import Operators from "./operators";
import EnterButtons from "./enterButtons";
import Equal from "./equal";
import PropTypes from "prop-types";

const AllButtons = ({
    blockOperators,
    blockOfCharacters,
    onButton,
    onCalculate,
    onAnswer
}) => {
    return (
        <div className="buttons">
            <div className="operators">
                <Operators
                    operators={blockOperators}
                    onCalculate={onCalculate}
                />
            </div>
            <div className="leftPanel">
                {blockOfCharacters.map((characters, i) => (
                    <EnterButtons
                        key={i}
                        characters={characters}
                        onButton={onButton}
                    />
                ))}
            </div>
            <Equal onAnswer={onAnswer} />
        </div>
    );
};

AllButtons.propTypes = {
    blockOperators: PropTypes.array.isRequired,
    blockOfCharacters: PropTypes.array.isRequired,
    onButton: PropTypes.func.isRequired,
    onCalculate: PropTypes.func.isRequired,
    onAnswer: PropTypes.func.isRequired
};

export default AllButtons;
