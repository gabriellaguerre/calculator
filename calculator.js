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
   results.innerText = 0;
})

    //calculator buttons
