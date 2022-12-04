window.addEventListener("DOMContentLoaded", () => {
    //build calculator frame
    const frame = document.createElement("div")
    frame.setAttribute("class", "frame")
    document.body.appendChild(frame)

    //creating each grid button
    for(let i = 1; i <= 16; i++) {
        let grid = document.createElement("div")
        grid.setAttribute("id", "grids")
        grid.innerText = i
        frame.appendChild(grid)
    }



})
