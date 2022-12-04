window.addEventListener("DOMContentLoaded", () => {
    //build calculator frame
    const frame = document.createElement("div")
    frame.setAttribute("class", "frame")
    document.body.appendChild(frame)

    //creating each grid button
    for(let i = 1; i <= 16; i++) {
        let grid = document.createElement("button")
        grid.setAttribute("id", `grids${i}`)
        grid.classList.add("buttons")
        grid.innerText = i;
        frame.appendChild(grid)
    }

   //creating results bar
   const results = document.createElement("div")
   results.setAttribute("id", "result")
   document.body.append(results)
   results.innerText = '';


   //calculator Number buttons
    const button1 = document.getElementById("grids1")
    button1.addEventListener("click", () => {
        results.innerText += 1;
    })
    const button2 = document.getElementById("grids2")
    button2.addEventListener("click", () => {
        results.innerText += 2;
    })
    const button3 = document.getElementById("grids3")
    button3.addEventListener("click", () => {
        results.innerText += 3;
    })
    const button4 = document.getElementById("grids5")
    button4.innerText = 4;
    button4.addEventListener("click", () => {
        results.innerText += 4;
    })
    const button5 = document.getElementById("grids6")
    button5.innerText = 5;
    button5.addEventListener("click", () => {
        results.innerText += 5;
    })
    const button6 = document.getElementById("grids7")
    button6.innerText = 6;
    button6.addEventListener("click", () => {
        results.innerText += 6;
    })
    const button7 = document.getElementById("grids9")
    button7.innerText = 7;
    button7.addEventListener("click", () => {
        results.innerText += 7;
    })
    const button8 = document.getElementById("grids10")
    button8.innerText = 8;
    button8.addEventListener("click", () => {
        results.innerText += 8;
    })
    const button9 = document.getElementById("grids11")
    button9.innerText = 9;
    button9.addEventListener("click", () => {
        results.innerText += 9;
    })




    //calculator operation buttons
    const buttonClear = document.getElementById("grids4")
    buttonClear.innerText = "clear"
    buttonClear.addEventListener("click", () => {
        results.innerText = '';
    })
    const buttonPlus = document.getElementById("grids8")
    buttonPlus.innerText = "+"
    buttonPlus.addEventListener("click", () => {
        results.innerText += '+';
    })


})
