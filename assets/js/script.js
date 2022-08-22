document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score-container')
    const resultDisplay = document.getElementById('result')
    const width = 4
    let tiles = []
    // Game Tiles
    function createBoard() {
        for (let i = 0; i < width*width; i++) {
            tile = document.createElement('div')
            tile.innerHTML = 0
            gridDisplay.appendChild(tile)
            tiles.push(tile)
        }
        generate()
        generate()
    }
    createBoard ()
    // Generate Random Number
    function generate() {
        let randomNumber = Math.floor(Math.random() * tiles.length)
        if (tiles[randomNumber].innerHTML == 0) {
            tiles[randomNumber].innerHTML = 2
        } else generate()
    }
    // Swipe Right
    function moveRight() {
        for (let i = 0; i < 16; i++) {
           if (i % 4 === 0) {
                let totalOne = tiles[i].innerHTML
                let totalTwo = tiles[i+1].innerHTML
                let totalThree = tiles[i+2].innerHTML
                let totalFour = tiles[i+3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
                console.log(row)
                let filteredRow = row.filter(num => num)
                console.log(filteredRow)
                let missingTiles = 4 - filteredRow.length
                let blank = Array(missingTiles).fill(0)
                console.log(blank)
                let newRow = blank.concat(filteredRow)
                console.log(newRow)
           }
        }
    }
    moveRight()
})