import React from "react";
import EnterButtons from "./components/enterButtons";
import Operators from "./components/operators";

function App() {
    const blockOfCharacters = [
        ["7", "8", "9"],
        ["4", "5", "6"],
        ["1", "2", "3"],
        ["0", ".", "AC"]
    ];
    const blockOperators = ["+", "-", "*", "/"];
    return (
        <div className="calculator">
            <div className="input">0</div>
            <div className="buttons">
                <div className="operators">
                    <Operators operators={blockOperators} />
                </div>
                <div className="leftPanel">
                    {blockOfCharacters.map((characters, i) => (
                        <EnterButtons key={i} characters={characters} />
                    ))}
                </div>
                <div className="equal">=</div>
            </div>
        </div>
    );
}

export default App;
