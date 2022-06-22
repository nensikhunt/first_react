let number1 = prompt("enter number1 :");
let number2 = prompt("enter number2 :");

function Calculator() {
    return (
        <>
            <h1>sum of {number1} and {number2} is {parseInt(number1) + parseInt(number1)}</h1>
            <h1>sub of {number1} and {number2} is {number1 - number2}</h1>
            <h1>mul of {number1} and {number2} is {number1 * number2}</h1>
            <h1>div of {number1} and {number2} is {number1 / number2}</h1>
        </>
    );
}

export default Calculator;