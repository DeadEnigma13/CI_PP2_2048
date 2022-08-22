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
                let filteredRow = row.filter(num => num)
                let missingTiles = 4 - filteredRow.length
                let blank = Array(missingTiles).fill(0)
                let newRow = blank.concat(filteredRow)
                tiles[i].innerHTML = newRow[0]
                tiles[i+1].innerHTML = newRow[1]
                tiles[i+2].innerHTML = newRow[2]
                tiles[i+3].innerHTML = newRow[3]
           }
        }
    }
    // Swipe Left
    function moveLeft() {
        for (let i = 0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = tiles[i].innerHTML
                let totalTwo = tiles[i+1].innerHTML
                let totalThree = tiles[i+2].innerHTML
                let totalFour = tiles[i+3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
                let filteredRow = row.filter(num => num)
                let missingTiles = 4 - filteredRow.length
                let blank = Array(missingTiles).fill(0)
                let newRow = filteredRow.concat(blank)
                tiles[i].innerHTML = newRow[0]
                tiles[i+1].innerHTML = newRow[1]
                tiles[i+2].innerHTML = newRow[2]
                tiles[i+3].innerHTML = newRow[3]
            }
        }
    }
    function combineRow() {
        for (let i = 0; i < 15; i++) {
            if (tiles[i].innerHTML === tiles[i+1].innerHTML) {
                let combinedTotal = parseInt(tiles[i].innerHTML) + parseInt(tiles[i+1].innerHTML)
                tiles[i].innerHTML = combinedTotal
                tiles[i+1].innerHTML = 0
            }
        }
    }
    // Assign Key
    function control(e) {
        if(e.keyCode === 39) {
            keyRight()
        }
    }
    document.addEventListener('keyup', control)

    function keyRight() {
        moveRight()
        combineRow()
        moveRight()
        generate()
    }
})