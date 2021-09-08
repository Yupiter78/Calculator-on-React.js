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
    const [state, setState] = useState(false);
    const [result, setResult] = useState("");
    const methods = {
        "+": () => {
            setOperation(() => (a, b) => a + b);
            setSecondOp("");
            setDisplay("+");
        },
        "-": () => {
            setOperation(() => (a, b) => a - b);
            setDisplay("-");
            setSecondOp("");
        },
        "*": () => {
            setOperation(() => (a, b) => a * b);
            setDisplay("*");
            setSecondOp("");
        },
        "/": () => {
            setOperation(() => (a, b) => a / b);
            setDisplay("/");
            setSecondOp("");
        }
    };

    const handleButtonDown = (buttonValue) => {
        if (display.length > 8) return;
        if (display.includes(".") && buttonValue === ".") return;
        if (state) {
            if (!secondOp) {
                buttonValue === "."
                    ? setSecondOp("0.")
                    : setSecondOp(buttonValue);
            } else {
                setSecondOp(secondOp + buttonValue);
            }
        } else {
            if (!firstOp) {
                buttonValue === "."
                    ? setFirstOp("0.")
                    : setFirstOp(buttonValue);
            } else {
                setFirstOp(firstOp + buttonValue);
            }
        }
    };

    const handleButtonUp = () => {
        if (!state) {
            setDisplay(firstOp);
        } else {
            setDisplay(secondOp);
        }
    };

    const handleOperationUp = (op) => {
        if (!operation || secondOp) {
            setOperation(methods[op]);
        }
        setState(true);

        if (!!firstOp && !!secondOp) {
            let resultExp = operation(Number(firstOp), Number(secondOp))
                .toFixed(8)
                .replace(/[,.]?0+$/, "");
            if (resultExp.length > 18) {
                resultExp = "ERROR";
            }
            setResult(resultExp);
            setFirstOp(resultExp);
        }
    };

    const handleFixedValue = () => {
        if (!firstOp && !!result) {
            setFirstOp(result);
        }
    };

    const handleAnswer = () => {
        if (firstOp && operation) {
            let resultExp = operation(Number(firstOp), Number(secondOp))
                .toFixed(8)
                .replace(/[,.]?0+$/, "");
            if (resultExp.length > 18) {
                resultExp = "ERROR";
            }
            setResult(resultExp);
            setDisplay(resultExp);

            setState(false);
            setFirstOp("");
        }
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
                onOperationUp={handleOperationUp}
                onFixedValue={handleFixedValue}
                onAnswer={handleAnswer}
                onReset={handleReset}
            />
        </div>
    );
}

export default App;
