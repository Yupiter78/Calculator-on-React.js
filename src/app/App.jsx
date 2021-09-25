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
    };

    const handleOperationUp = (op) => {
        console.log("operation__2:", operation);
        console.log("secondOp:", secondOp);
        setOperation(methods[op]);

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
