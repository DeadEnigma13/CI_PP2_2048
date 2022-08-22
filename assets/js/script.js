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
    }
    createBoard ()
})