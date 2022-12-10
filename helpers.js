
export default function calculation(operation) {
    let numString1 = '';
    let numString2 = '';

    let operators = '+-/x';
    let index;

    for(let i = 0; i < operation.length; i++) {
        let op = operation[i];
        if(operators.includes(op)) {
            index = operation.indexOf(op);
        }
    }

    for (let i = 0; i < index; i++) {
        let firstVal = operation[i]
        numString1 += firstVal
    }

    for (let i = index + 1; i < operation.length; i++) {
        let secondVal = operation[i]
        numString2 += secondVal
    }

    let numberOne = Number(numString1)
    let numberTwo = Number(numString2)

    if (operation.includes("+")) {
        let result = numberOne + numberTwo
        return result;
    }
    if (operation.includes("x")) {
        let result = numberOne * numberTwo;
        return result;
    }
    if (operation.includes("/")) {
        let result = numberOne / numberTwo;
        return result;
    }
    if (operation.includes("-")) {
        let result = numberOne - numberTwo;
        return result;
    }

}
