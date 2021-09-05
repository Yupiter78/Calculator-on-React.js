import React from "react";
import Operators from "./operators";
import EnterButtons from "./enterButtons";
import Equal from "./equal";
import PropTypes from "prop-types";

const AllButtons = ({
    blockOperators,
    blockOfCharacters,
    onButtonDown,
    onButtonUp,
    onCalculate,
    onFixedValue,
    onAnswer,
    onReset
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
                        onButtonDown={onButtonDown}
                        onButtonUp={onButtonUp}
                        onReset={onReset}
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
    onButtonDown: PropTypes.func.isRequired,
    onButtonUp: PropTypes.func.isRequired,
    onCalculate: PropTypes.func.isRequired,
    onFixedValue: PropTypes.func.isRequired,
    onAnswer: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
};

export default AllButtons;
