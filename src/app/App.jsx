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
    const [display, setDisplay] = useState("0"); // отображение на экране
    const [firstOp, setFirstOp] = useState(""); // первое введённое число
    const [secondOp, setSecondOp] = useState(""); // второе введённое число
    const [operation, setOperation] = useState(null); // введённый оператор
    const [state, setState] = useState(false); // сосотояние, определяющее в какой из операндов будет записываться вводимые числа
    const [result, setResult] = useState(""); // результат
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
        console.log("buttonValue:", buttonValue);
        if (display.length > 8) return;
        if (display.includes(".") && buttonValue === ".") return;
        if (state) {
            if (!secondOp) {
                buttonValue === "."
                    ? setSecondOp("0.")
                    : setSecondOp(buttonValue);
            } else {
                setSecondOp(secondOp + buttonValue);
                // setSecondOp((prev) => prev + buttonValue);

                console.log("secondOp:", secondOp);
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

    const handleButtonUp = ({ target }) => {
        console.log("target.innerText:", target.innerText);
        if (!state) {
            setDisplay(firstOp);
        } else {
            setDisplay(secondOp);
        }
        console.log("firstOp__DISPLAY:", firstOp);
        console.log("secondOp__DISPLAY:", secondOp);
        console.log("operation__DISPLAY:", operation);
    };

    const handleOperationDown = (op) => {
        if (firstOp) {
            console.log("operation__OP:", operation);
            console.log("firstOp__OP:", firstOp);
            console.log("secondOp__OP:", secondOp);
            setOperation(methods[op]);
            setState(true);
        }

        if (firstOp && secondOp) {
            let resultExp = operation(Number(firstOp), Number(secondOp))
                .toFixed(8)
                .replace(/[,.]?0+$/, "");
            if (resultExp.length > 18) {
                resultExp = "ERROR";
            }
            setResult(resultExp);
            setFirstOp(resultExp);
        }
        console.log("operation__OP__2:", operation);
        console.log("firstOp__OP__2:", firstOp);
        console.log("secondOp__OP__2:", secondOp);
    };

    const handleOperationUp = () => {
        console.log("operation__OP__UP:", operation);
        console.log("firstOp__OP__UP:", firstOp);
        console.log("secondOp__OP__UP:", secondOp);
    };

    const handleEqualFixedValue = () => {
        if (!firstOp && result) {
            setFirstOp(result);
        }
        console.log("operation__EQUAL__DOWN:", operation);
        console.log("firstOp__EQUAL__DOWN:", firstOp);
        console.log("secondOp__EQUAL__DOWN:", secondOp);
    };

    const handleEqualAnswer = () => {
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
        console.log("operation__EQUAL__UP:", operation);
        console.log("firstOp__EQUAL__UP:", firstOp);
        console.log("secondOp__EQUAL__UP:", secondOp);
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
                onOperationDown={handleOperationDown}
                onOperationUp={handleOperationUp}
                onFixedValue={handleEqualFixedValue}
                onAnswer={handleEqualAnswer}
                onReset={handleReset}
            />
        </div>
    );
}

export default App;
