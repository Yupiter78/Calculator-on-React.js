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
    const [firstOp, setFirstOp] = useState("");
    const [secondOp, setSecondOp] = useState("");
    const [operation, setOperation] = useState(null);
    const methods = {
        "+": () => {
            setFirstOp(display);
            setOperation(() => (a, b) => a + b);
            setSecondOp("");
            setDisplay("+");
        },
        "-": () => {
            setFirstOp(display);
            setOperation(() => (a, b) => a - b);
            setDisplay("-");
            setSecondOp("");
        },
        "*": () => {
            setFirstOp(display);
            setOperation(() => (a, b) => a * b);
            setDisplay("*");
            setSecondOp("");
        },
        "/": () => {
            setFirstOp(display);
            setOperation(() => (a, b) => a / b);
            setDisplay("/");
            setSecondOp("");
        }
    };

    const handleButtonDown = (buttonValue) => {
        if (buttonValue === ".") {
            setDisplay("0");
        }
    };

    const handleButtonUp = (buttonValue) => {
        if (display.length > 8) return;
        if (display.includes(".") && buttonValue === ".") return;
        if (
            (display === "0" && buttonValue !== ".") ||
            blockOperators.includes(display)
        ) {
            setDisplay(`${buttonValue}`);
        } else {
            setDisplay(`${display + buttonValue}`);
        }
    };

    const handleCalculate = (op) => {
        if (!operation || secondOp) {
            setOperation(methods[op]);
        }
    };
    const handleFixedValue = () => {
        if (!secondOp) {
            setSecondOp(display);
        }
    };
    const handleAnswer = () => {
        if (!firstOp) return;
        let result = operation(Number(firstOp), Number(secondOp))
            .toFixed(8)
            .replace(/[,.]?0+$/, "");
        if (result.length > 18) {
            result = "ERROR";
        }
        setDisplay(result);
        setFirstOp(result);
    };

    const handleReset = () => {
        setFirstOp("");
        setOperation(null);
        setSecondOp("");
        setDisplay("0");
    };
    return (
        <div className="calculator">
            <Screen display={display} />
            <AllButtons
                blockOfCharacters={blockOfCharacters}
                blockOperators={blockOperators}
                onButtonDown={handleButtonDown}
                onButtonUp={handleButtonUp}
                onCalculate={handleCalculate}
                onFixedValue={handleFixedValue}
                onAnswer={handleAnswer}
                onReset={handleReset}
            />
        </div>
    );
}

export default App;
