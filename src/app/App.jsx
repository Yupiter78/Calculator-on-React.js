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
    const [result, setResult] = useState("");
    const methods = {
        "+": () => {
            setOperation(() => (a, b) => a + b);
            if (secondOp) {
                console.log("Working IF");
                console.log("firstOp:", firstOp);
                console.log("secondOp:", secondOp);
                handleEqualUp();
                setSecondOp("");
                setDisplay("+");
            } else {
                console.log("Working ELSE");
                console.log("firstOp:", firstOp);
                console.log("secondOp:", secondOp);

                // setSecondOp("");
                setDisplay("+");
            }
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
        if (secondOp) {
            setDisplay("");
        }
        if (display.includes(".") && buttonValue === ".") return;
        if (buttonValue === ".") {
            setDisplay("0");
        }
    };

    const handleButtonUp = (buttonValue) => {
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

    const handleOperationUp = (op) => {
        if (!operation || secondOp) {
            console.log("WORKING");
            setOperation(methods[op]);
        }
    };

    const handleOperationDown = () => {
        if (!firstOp) {
            setFirstOp(display);
        }
        if (firstOp && !secondOp) {
            setSecondOp(display);
        }
    };

    const handleEqualDown = () => {
        if (firstOp && !secondOp) {
            setSecondOp(display);
        }
    };
    const handleEqualUp = () => {
        if (!firstOp) return;
        const resultExp = operation(Number(firstOp), Number(secondOp))
            .toFixed(8)
            .replace(/[,.]?0+$/, "");
        setDisplay(resultExp);
        setFirstOp(resultExp);
        setResult(resultExp);
    };

    const handleReset = () => {
        setFirstOp("");
        setOperation(null);
        setSecondOp("");
        setDisplay("0");
        setResult("");
    };
    return (
        <div className="calculator">
            <Screen display={display} result={result} />
            <AllButtons
                blockOfCharacters={blockOfCharacters}
                blockOperators={blockOperators}
                onSecondOpValue={handleOperationDown}
                onButtonDown={handleButtonDown}
                onButtonUp={handleButtonUp}
                onCalculate={handleOperationUp}
                onFixedValue={handleEqualDown}
                onAnswer={handleEqualUp}
                onReset={handleReset}
            />
        </div>
    );
}

export default App;
