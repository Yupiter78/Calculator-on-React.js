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
    onFixedValue,
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
            <Equal onAnswer={onAnswer} onFixedValue={onFixedValue} />
        </div>
    );
};

AllButtons.propTypes = {
    blockOperators: PropTypes.array.isRequired,
    blockOfCharacters: PropTypes.array.isRequired,
    onButton: PropTypes.func.isRequired,
    onCalculate: PropTypes.func.isRequired,
    onFixedValue: PropTypes.func.isRequired,
    onAnswer: PropTypes.func.isRequired
};

export default AllButtons;
