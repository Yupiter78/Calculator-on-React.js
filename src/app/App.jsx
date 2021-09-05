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
            setOperation(() => (a, b) => {
                console.log(`${a} + ${b}:`, a + b);
                return a + b;
            });
            setSecondOp("");
            setDisplay("+");
        },
        "-": () => {
            setFirstOp(display);
            setOperation(() => (a, b) => a - b);
            setDisplay("-");
        },
        "*": () => {
            setFirstOp(display);
            setOperation(() => (a, b) => a * b);
            setDisplay("*");
        },
        "/": () => {
            setFirstOp(display);
            setOperation(() => (a, b) => a / b);
            setDisplay("/");
        }
    };
    const handleButton = (buttonValue) => {
        console.log("display____handleButton:", display);
        console.log("buttonValue:", buttonValue);
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
        setOperation(methods[op]);
        console.log("operation:", operation);
    };
    const handleFixedValue = () => {
        console.log("secondOp__handleFixedValue__1:", secondOp);
        console.log("operation:", operation);
        console.log("display:", display);
        if (!secondOp) {
            setSecondOp(display);
        }
        console.log("secondOp__handleFixedValue__2:", secondOp);
        console.log("firstOp__handleFixedValue:", firstOp);
    };
    const handleAnswer = () => {
        console.log("secondOp__handleAnswer:", secondOp);
        console.log("firstOp--handleAnswer:", firstOp);
        console.log("!firstOp || !secondOp:", !firstOp || !secondOp);
        if (!firstOp) return;

        setDisplay(operation(Number(firstOp), Number(secondOp)).toString());
        console.log("display__handleAnswer:", display);
        setFirstOp(operation(Number(firstOp), Number(secondOp)).toString());
    };
    return (
        <div className="calculator">
            <Screen display={display} />
            <AllButtons
                blockOfCharacters={blockOfCharacters}
                blockOperators={blockOperators}
                onButton={handleButton}
                onCalculate={handleCalculate}
                onFixedValue={handleFixedValue}
                onAnswer={handleAnswer}
            />
        </div>
    );
}

export default App;
