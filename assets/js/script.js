document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const resultDisplay = document.getElementById('result')
    const width = 4
    let tiles = []
    let score = 0
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
            checkForGameOver()
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
    // Swipe Down
    function moveDown() {
        for (let i = 0; i < 4; i++) {
            let totalOne = tiles[i].innerHTML
            let totalTwo = tiles[i+(width)].innerHTML
            let totalThree = tiles[i+(width*2)].innerHTML
            let totalFour = tiles[i+(width*3)].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
            let filteredColumn = column.filter(num => num)
            let missing = 4 - filteredColumn.length
            let blank = Array(missing).fill(0)
            let newColumn = blank.concat(filteredColumn)
            tiles[i].innerHTML = newColumn[0]
            tiles[i+(width)].innerHTML = newColumn[1]
            tiles[i+(width*2)].innerHTML = newColumn[2]
            tiles[i+(width*3)].innerHTML = newColumn[3]
        }
    }  
    // Swipe Up
    function moveUp() {
        for (let i = 0; i < 4; i++) {
            let totalOne = tiles[i].innerHTML
            let totalTwo = tiles[i+(width)].innerHTML
            let totalThree = tiles[i+(width*2)].innerHTML
            let totalFour = tiles[i+(width*3)].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
            let filteredColumn = column.filter(num => num)
            let missing = 4 - filteredColumn.length
            let blank = Array(missing).fill(0)
            let newColumn = filteredColumn.concat(blank)
            tiles[i].innerHTML = newColumn[0]
            tiles[i+(width)].innerHTML = newColumn[1]
            tiles[i+(width*2)].innerHTML = newColumn[2]
            tiles[i+(width*3)].innerHTML = newColumn[3]
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
        checkForWin()
    }
    function combineColumn() {
        for (let i = 0; i < 12; i++) {
            if (tiles[i].innerHTML === tiles[i+width].innerHTML) {
                let combinedTotal = parseInt(tiles[i].innerHTML) + parseInt(tiles[i+width].innerHTML)
                tiles[i].innerHTML = combinedTotal
                tiles[i+width].innerHTML = 0
            }
        }
        checkForWin()
    }
    // Assign Key
    function control(e) {
        if(e.keyCode === 39) {
            keyRight()
        } else if (e.keyCode === 37) {
           keyLeft() 
        } else if (e.keyCode === 38) {
            keyUp()
        } else if (e.keyCode === 40) {
            keyDown()
        }
    }
    document.addEventListener('keyup', control)

    function keyRight() {
        moveRight()
        combineRow()
        moveRight()
        generate()
    }
    function keyLeft() {
        moveLeft()
        combineRow()
        moveLeft()
        generate()
    }
    function keyDown() {
        moveDown()
        combineColumn()
        moveDown()
        generate
    }
    function keyUp() {
        moveUp()
        combineColumn()
        moveUp()
        generate
    }
    // Check For Number 2048 For Win
    function checkForWin() {
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].innerHTML == 2048) {
                resultDisplay.innerHTML = 'Congratulations, You Win!'
                document.removeEventListener('keyup', control)
            }
        }
    }
    // Check For No Possible Moves
    function checkForGameOver() {
        let blank = 0
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].innerHTML == 0) {
                blank++
            }
        }
        if (blank === 0) {
            resultDisplay.innerHTML = 'You Lose!'
            document.removeEventListener('keyup', control)
        }
    }
})
