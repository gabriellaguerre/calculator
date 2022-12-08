window.addEventListener("DOMContentLoaded", () => {
    //build calculator frame
    const frame = document.createElement("div")
    frame.setAttribute("class", "frame")
    document.body.appendChild(frame)

    //creating each grid button
    for (let i = 1; i <= 16; i++) {
        let grid = document.createElement("button")
        grid.setAttribute("id", `grids${i}`)
        grid.classList.add("buttons")
        grid.innerText = i;
        frame.appendChild(grid)
    }

    //results bar
    const results = document.createElement("input")
    results.setAttribute("id", "result")
    document.body.append(results)


    //calculator number buttons
    const button1 = document.getElementById("grids1")
    button1.addEventListener("click", () => {
        let valueScreen = localStorage.getItem("value")
        if(valueScreen) {
            localStorage.removeItem("value")
            results.value = 1;
        } else {
            results.value += 1;
        }


    })
    const button2 = document.getElementById("grids2")
    button2.addEventListener("click", () => {
        let valueScreen = localStorage.getItem("value")
        if(valueScreen) {
            localStorage.removeItem("value")
            results.value = 2;
        } else {
            results.value += 2;
        }
    })
    const button3 = document.getElementById("grids3")
    button3.addEventListener("click", () => {
        let valueScreen = localStorage.getItem("value")
        if(valueScreen) {
            localStorage.removeItem("value")
            results.value = 3;
        } else {
            results.value += 3;
        }
    })
    const button4 = document.getElementById("grids5")
    button4.innerText = 4;
    button4.addEventListener("click", () => {
        let valueScreen = localStorage.getItem("value")
        if(valueScreen) {
            localStorage.removeItem("value")
            results.value = 4;
        } else {
            results.value += 4;
        }
    })
    const button5 = document.getElementById("grids6")
    button5.innerText = 5;
    button5.addEventListener("click", () => {
        let valueScreen = localStorage.getItem("value")
        if(valueScreen) {
            localStorage.removeItem("value")
            results.value = 5;
        } else {
            results.value += 5;
        }
    })
    const button6 = document.getElementById("grids7")
    button6.innerText = 6;
    button6.addEventListener("click", () => {
        let valueScreen = localStorage.getItem("value")
        if(valueScreen) {
            localStorage.removeItem("value")
            results.value = 6;
        } else {
            results.value += 6;
        }
    })
    const button7 = document.getElementById("grids9")
    button7.innerText = 7;
    button7.addEventListener("click", () => {
        let valueScreen = localStorage.getItem("value")
        if(valueScreen) {
            localStorage.removeItem("value")
            results.value = 7;
        } else {
            results.value += 7;
        }
    })
    const button8 = document.getElementById("grids10")
    button8.innerText = 8;
    button8.addEventListener("click", () => {
        let valueScreen = localStorage.getItem("value")
        if(valueScreen) {
            localStorage.removeItem("value")
            results.value = 8;
        } else {
            results.value += 8;
        }
    })
    const button9 = document.getElementById("grids11")
    button9.innerText = 9;
    button9.addEventListener("click", () => {
        let valueScreen = localStorage.getItem("value")
        if(valueScreen) {
            localStorage.removeItem("value")
            results.value = 9;
        } else {
            results.value += 9;
        }
    })


    //calculator operation buttons
    const buttonClear = document.getElementById("grids4")
    buttonClear.innerText = "clear"
    buttonClear.addEventListener("click", () => {
        results.value = '';
        localStorage.removeItem("operation")
        localStorage.removeItem("value")
    })
    const buttonPlus = document.getElementById("grids8")
    buttonPlus.innerText = "+"
    buttonPlus.addEventListener("click", () => {
        results.value += "+";

    })
    const buttonMinus = document.getElementById("grids12")
    buttonMinus.innerText = "-"
    buttonMinus.addEventListener("click", () => {
        results.value += "-";
    })

    const buttonTimes = document.getElementById("grids15")
    buttonTimes.innerText = "x"
    buttonTimes.addEventListener("click", () => {
        results.value += "x";
    })
    const buttonDivide = document.getElementById("grids14")
    buttonDivide.innerText = "/"
    buttonDivide.addEventListener("click", () => {
        results.value += "/";
    })
    const buttonPeriod = document.getElementById("grids13")
    buttonPeriod.innerText = "."
    buttonPeriod.style.fontSize = "30px"
    buttonPeriod.addEventListener("click", () => {
        results.value += ".";
    })

    //mathematical operations
    const buttonEquals = document.getElementById("grids16")
    buttonEquals.innerText = "="

    buttonEquals.addEventListener("click", () => {
        localStorage.setItem("operation", results.value)
        let operation = localStorage.getItem("operation")

        let numString1 = '';
        let numString2 = '';

        if (operation.includes("+")) {
            let index = operation.indexOf("+")
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

            results.value = numberOne + numberTwo;
            localStorage.setItem("value", results.value)
        }
        if (operation.includes("-")) {
            let index = operation.indexOf("-")
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

            results.value = numberOne - numberTwo;
            localStorage.setItem("value", results.value)
        }
        if (operation.includes("x")) {
            let index = operation.indexOf("x")
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

            results.value = numberOne * numberTwo;
            localStorage.setItem("value", results.value)
        }
        if (operation.includes("/")) {
            let index = operation.indexOf("/")
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

            results.value = numberOne / numberTwo;
            localStorage.setItem("value", results.value)
        }

    });
})
