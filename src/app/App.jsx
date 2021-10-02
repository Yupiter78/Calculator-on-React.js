import React, { useEffect, useState } from "react";

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
    const division = (a, b) => {
        return a / b;
    };

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
            setOperation(() => division);
            setDisplay("/");
            setSecondOp("");
        }
    };

    const handleButtonDown = (buttonValue) => {
        console.log("buttonValue:", buttonValue);
        console.log("display:", display);
        console.log("result:", result);
        console.log("display.length:", display.length);
        console.log(
            "display.includes(`.`) && buttonValue === `.`:",
            display.includes(".") && buttonValue === "."
        );
        console.log("firstOp__ButtonDown:", firstOp);
        if (display.length > 10) return;
        if (!firstOp && state === false && result) {
            buttonValue === "." ? setFirstOp("0.") : setFirstOp(buttonValue);
        } else {
            if (display.includes(".") && buttonValue === ".") return;
        }
        if (state) {
            console.log("POINT__STATE-TRUE");
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
                console.log("POINT");
                buttonValue === "."
                    ? setFirstOp("0.")
                    : setFirstOp(buttonValue);
            } else {
                console.log("POINT__Else");
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
        console.log("______________________________________________");
    };

    const handleOperationDown = () => {
        if (!firstOp && result && secondOp) {
            setFirstOp(result);
            setSecondOp("");
        }
    };

    const handleOperationUp = (op) => {
        if (firstOp) {
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
        console.log("result__OP__UP:", result);
        console.log("operation__OP__UP:", operation);
        console.log("firstOp__OP__UP:", firstOp);
        console.log("secondOp__OP__UP:", secondOp);
        console.log("______________________________________________");
    };

    // useEffect(() => {
    //     if (firstOp && secondOp) {
    //         let resultExp = operation(Number(firstOp), Number(secondOp))
    //             .toFixed(8)
    //             .replace(/[,.]?0+$/, "");
    //         if (resultExp.length > 18) {
    //             resultExp = "ERROR";
    //         }
    //         setResult(resultExp);
    //         setFirstOp(resultExp);
    //     }
    // }, [operation]);

    const handleEqualFixedValue = () => {
        if (!firstOp && result) {
            setFirstOp(result);
        }

        console.log("result__EQUAL__DOWN:", result);
        console.log("operation__EQUAL__DOWN:", operation);
        console.log("JSON__2:", JSON.stringify(operation));
        console.log("firstOp__EQUAL__DOWN:", firstOp);
        console.log("secondOp__EQUAL__DOWN:", secondOp);
        console.log("______________________________________________");
    };

    useEffect(() => {
        console.log("display__EQUAL__DOWN___useEffect:", display);
        console.log("firstOp__EQUAL__DOWN___useEffect:", firstOp);
        console.log("result__EQUAL__DOWN___useEffect:", result);
        console.log("operation__EQUAL__DOWN___useEffect:", operation);
        console.log("secondOp__EQUAL__DOWN___useEffect:", secondOp);
        console.log("state__EQUALDOWN___useEffect:", state);
        console.log("************useEffect*****************");
    }, [firstOp]);

    const handleEqualAnswer = () => {
        console.log("division_____UP:", division);
        console.log("operation_____UP:", operation);
        console.log(
            "operation.toString() === division.toString()_____UP:",
            operation.toString() === division.toString()
        );
        console.log(
            `operation.toString() === division.toString() && secondOp === "0"`,
            operation.toString() === division.toString() && secondOp === "0"
        );
        if (operation.toString() === division.toString() && secondOp === "0") {
            setDisplay("impossible");
            setState(false);
            setFirstOp("");
            setSecondOp("");
            setOperation(null);
            return;
        }
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
        console.log("result__EQUAL__UP:", result);
        console.log("operation__EQUAL__UP:", operation);
        console.log("firstOp__EQUAL__UP:", firstOp);
        console.log("secondOp__EQUAL__UP:", secondOp);
        console.log("______________________________________________");
    };

    useEffect(() => {
        console.log("result__useEffect:", result);
        console.log("operation__useEffect:", operation);
        console.log("firstOp__useEffect:", firstOp);
        console.log("secondOp__useEffect:", secondOp);
        console.log("state__EQUAL__UP:", state);
        console.log("______________________________________________");
    }, [result]);

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
