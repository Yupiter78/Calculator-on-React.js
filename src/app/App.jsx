import React, { useState } from "react";

import Screen from "./components/screen";
import AllButtons from "./components/allButtons";

function App() {
    const blockOfCharacters = [
        ["7", "8", "9"],
        ["4", "5", "6"],
        ["1", "2", "3"],
        ["0", ".", "AC"]
    ];
    const blockOperators = ["+", "-", "*", "/"];
    const [display, setDisplay] = useState("0");
    const [firstOp, setFirstOp] = useState("0");
    const [secondOp, setSecondOp] = useState("0");
    const [operation, setOperation] = useState(null);
    const methods = {
        "+": () => {
            setFirstOp(display);
            setOperation(() => (a, b) => {
                console.log(`${a} + ${b}:`, a + b);
                return a + b;
            });
            setDisplay("");
        },
        "-": () => {
            setFirstOp(display);
            setOperation(() => (a, b) => a - b);
            setDisplay("");
        },
        "*": () => {
            setFirstOp(display);
            setOperation(() => (a, b) => a * b);
            setDisplay("");
        },
        "/": () => {
            setFirstOp(display);
            setOperation(() => (a, b) => a / b);
            setDisplay("");
        }
    };
    const handleButton = (buttonValue) => {
        if (display === "0" && buttonValue !== ".") {
            setDisplay(`${buttonValue}`);
            return;
        }
        setDisplay(`${display + buttonValue}`);
    };

    const handleCalculate = (op) => {
        setOperation(methods[op]);
        console.log("operation:", operation);
    };
    const handleAnswer = () => {
        console.log("operation:", operation);
        console.log("display:", display);
        setSecondOp(display);
        console.log("secondOp:", secondOp);
        console.log("firstOp:", firstOp);
        setDisplay(operation(Number(firstOp), Number(secondOp)).toString());
    };
    return (
        <div className="calculator">
            <Screen display={display} />
            <AllButtons
                blockOfCharacters={blockOfCharacters}
                blockOperators={blockOperators}
                onButton={handleButton}
                onCalculate={handleCalculate}
                onAnswer={handleAnswer}
            />
        </div>
    );
}

export default App;
