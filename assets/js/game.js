document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid');
    const scoreDisplay = document.getElementById('score');
    const resultDisplay = document.getElementById('result');
    const width = 4;
    let tiles = [];
    let score = 0;

    
    /** Game Tiles */
    function createBoard() {
        for (let i = 0; i < width*width; i++) {
            tile = document.createElement('div');
            tile.innerHTML = 0;
            gridDisplay.appendChild(tile);
            tiles.push(tile);
        }
        generate();
        generate();
    }
    createBoard ();
    /** Generate Random Number 
     * After every swipe or key press, new number is randomly generated in the remaining blank tiles
    */
    function generate() {
        let randomNumber = Math.floor(Math.random() * tiles.length);
        if (tiles[randomNumber].innerHTML == 0) {
            tiles[randomNumber].innerHTML = 2;
            checkForGameOver();
        } else generate();
    }
    /** Swipe Right all tiles with numbers to the furthest right possible tiles
     * all tiles which match will be doubled
     * validMove is checked after every swipe to see if the game can continue
     */
    function moveRight(validMove) {
        validMove = validMove;
        for (let i = 0; i < 16; i++) {
           if (i % 4 === 0) {
                let totalOne = tiles[i].innerHTML;
                let totalTwo = tiles[i+1].innerHTML;
                let totalThree = tiles[i+2].innerHTML;
                let totalFour = tiles[i+3].innerHTML;
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
                let filteredRow = row.filter(num => num);
                let missingTiles = 4 - filteredRow.length;
                let blank = Array(missingTiles).fill(0);
                let newRow = blank.concat(filteredRow);
                if (!(JSON.stringify(newRow) == JSON.stringify(row))) { 
                    validMove = true;
                }
                tiles[i].innerHTML = newRow[0];
                tiles[i+1].innerHTML = newRow[1];
                tiles[i+2].innerHTML = newRow[2];
                tiles[i+3].innerHTML = newRow[3];
           }
        }
        return validMove; /** Make sure we return if a valid move has happened or not */
    }
    /** Swipe Left all tiles with numbers to the furthest left possible tiles
     * all tiles which match will be doubled
     * validMove is checked after every swipe to see if the game can continue
     */
    function moveLeft(validMove) {
        validMove = validMove;
        for (let i = 0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = tiles[i].innerHTML;
                let totalTwo = tiles[i+1].innerHTML;
                let totalThree = tiles[i+2].innerHTML;
                let totalFour = tiles[i+3].innerHTML;
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
                let filteredRow = row.filter(num => num);
                let missingTiles = 4 - filteredRow.length;
                let blank = Array(missingTiles).fill(0);
                let newRow = filteredRow.concat(blank);
                if (!(JSON.stringify(newRow) == JSON.stringify(row))) { 
                    validMove = true;
                }
                tiles[i].innerHTML = newRow[0];
                tiles[i+1].innerHTML = newRow[1];
                tiles[i+2].innerHTML = newRow[2];
                tiles[i+3].innerHTML = newRow[3];
            }
        }
        return validMove; /** Make sure we return if a valid move has happened or not */ 
    }
    /** Swipe Down all tiles with numbers to the lowest possible tile
     * all tiles which match will be doubled
     * validMove is checked after every swipe to see if the game can continue
     */
    function moveDown(validMove) {
        validMove = validMove;
        for (let i = 0; i < 4; i++) {
            let totalOne = tiles[i].innerHTML;
            let totalTwo = tiles[i+(width)].innerHTML;
            let totalThree = tiles[i+(width*2)].innerHTML;
            let totalFour = tiles[i+(width*3)].innerHTML;
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
            let filteredColumn = column.filter(num => num);
            let missing = 4 - filteredColumn.length;
            let blank = Array(missing).fill(0);
            let newColumn = blank.concat(filteredColumn);
            if (!(JSON.stringify(newColumn) == JSON.stringify(column))) { 
                validMove = true;
            }
            tiles[i].innerHTML = newColumn[0];
            tiles[i+(width)].innerHTML = newColumn[1];
            tiles[i+(width*2)].innerHTML = newColumn[2];
            tiles[i+(width*3)].innerHTML = newColumn[3];
        }
        return validMove; /** Make sure we return if a valid move has happened or not */
    }  
    /** Swipe Up moves all tiles with numbers to the highest possible tile
     * all tiles which match will be doubled
     * validMove is checked after every swipe to see if the game can continue
    */
    function moveUp(validMove) {
        validMove = validMove;
        for (let i = 0; i < 4; i++) {
            let totalOne = tiles[i].innerHTML;
            let totalTwo = tiles[i+(width)].innerHTML;
            let totalThree = tiles[i+(width*2)].innerHTML;
            let totalFour = tiles[i+(width*3)].innerHTML;
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
            let filteredColumn = column.filter(num => num);
            let missing = 4 - filteredColumn.length;
            let blank = Array(missing).fill(0);
            let newColumn = filteredColumn.concat(blank);
            if (!(JSON.stringify(newColumn) == JSON.stringify(column))) { 
                validMove = true;
            }
            tiles[i].innerHTML = newColumn[0];
            tiles[i+(width)].innerHTML = newColumn[1];
            tiles[i+(width*2)].innerHTML = newColumn[2];
            tiles[i+(width*3)].innerHTML = newColumn[3];
        }
        return validMove; /** Make sure we return if a valid move has happened or not */
    }
    /** Combine Numbers along row if numbers match
     * Combined numbers generate new total score
     */
    function combineRow(validMove) {
        for (let i = 0; i < 15; i++) {
            if (tiles[i].innerHTML === tiles[i+1].innerHTML) {
                let combinedTotal = parseInt(tiles[i].innerHTML) + parseInt(tiles[i+1].innerHTML);
                tiles[i].innerHTML = combinedTotal;
                tiles[i+1].innerHTML = 0;
                score += combinedTotal;
                scoreDisplay.innerHTML = score;
            }  
        }
        checkForWin();
        return validMove;
    }
    /** Combine Numbers along column if numbers match
     * Combined numbers generate new total score
     */
    function combineColumn(validMove) {
        for (let i = 0; i < 12; i++) {
            if (tiles[i].innerHTML === tiles[i+width].innerHTML) {
                let combinedTotal = parseInt(tiles[i].innerHTML) + parseInt(tiles[i+width].innerHTML);
                tiles[i].innerHTML = combinedTotal;
                tiles[i+width].innerHTML = 0;
                score += combinedTotal;
                scoreDisplay.innerHTML = score;
            } 
        }
        checkForWin();
        return validMove;
    }
    /** Assign Keys for up, down, left and right for game controls */
    function control(e) {
        if(e.key === 'ArrowRight') {
            keyRight();
        } else if (e.key === 'ArrowLeft') {
           keyLeft() ;
        } else if (e.key === 'ArrowUp') {
            keyUp();
        } else if (e.key === 'ArrowDown') {
            keyDown();
        } 
    }
    /** Assign Keys for swiping left, right, up and down for game controls on mobile */
    document.addEventListener('touchstart', function (event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
    }, false);
    document.addEventListener('touchend', function (event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        var hori = touchstartX - touchendX;
        var vert = touchstartY - touchendY;
        var dir = String;
        if (Math.abs(vert) > Math.abs(hori)) {
            if (vert < 0) {
                dir = "down";
            } else {
                dir = "up";
            }
        } else {
            if (hori < 0) {
                dir = "right";
            } else {
                dir = "left";
            }
        }
        handleGesture(dir);
    }, false);
    /** Swipe Gestures for left, right, up & down */
    function handleGesture(dir) {
        switch(dir) {
            case "up":
                keyUp();
                break;
            case "down":
                keyDown();
                break;
            case "right":
                keyRight();
                break;
            case "left":
                keyLeft();
                break;
        }
        /** Swipe Left function swipes all tiles to the left
         * combining the tiles which have the same number
        */
        if (touchendX < touchstartX) {
            moveLeft();
            combineRow();
            moveLeft();
            generate();
        }
        /** Swipe Right function swipes all tiles to the right
         * combining the tiles which have the same number
         */
        if (touchendX > touchstartX) {
            moveRight();
            combineRow();
            moveRight();
            generate();
        }
        /** Swipe Up function swipes all tiles up
         * combining the tiles which have the same number
         */
        if (touchendY < touchstartY) {
            moveUp();
            combineColumn();
            moveUp();
            generate();
        }
        /** Swipe Down function swipes all tiles down
         * combining the tiles which have the same number
         */
        if (touchendY > touchstartY) {
            moveDown();
            combineColumn();
            moveDown();
            generate();
        }
    }
    document.addEventListener('keyup', control);
    /** Move Right Function moves all tiles to the right
     * combining all tiles which have the same number
    */
    function keyRight() {
        var validMove = false;
        validMove = moveRight(validMove);
        validMove = combineRow(validMove);
        validMove = moveRight(validMove);
        if (validMove) {
            generate();
        } else {
            /** ILLEGAL MOVE */
        }
    }
    /** Move Left Function moves all tiles to the left
     * combining all tiles which have the same number
     */
    function keyLeft() {
        var validMove = false;
        validMove = moveLeft(validMove);
        validMove = combineRow(validMove);
        validMove = moveLeft(validMove);
        if (validMove) {
            generate();
        } else {
            /** ILLEGAL MOVE */
        }
    }
    /** Move Down Function moves all tiles down
     * combining all tiles which have the same number
     */
    function keyDown() {
        var validMove = false;
        validMove = moveDown(validMove);
        validMove = combineColumn(validMove);
        validMove = moveDown(validMove);
        if (validMove) {
            generate();
        } else {
            /** ILLEGAL MOVE */
        }
    }
    /** Move Up Function moves all tiles up
     * combining all tiles which have the same number
     */
    function keyUp() {
        var validMove = false;
        validMove = moveUp(validMove);
        validMove = combineColumn(validMove);
        validMove = moveUp(validMove);
        if (validMove) {
            generate();
        } else {
            /** ILLEGAL MOVE */
        }
    }
    /** Check For Number 2048 For Win 
     * If number 2048 has been checked, congratulations result appears on screen
    */
    function checkForWin() {
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].innerHTML == 2048) {
                resultDisplay.innerHTML = 'Congratulations, You Win!';
                document.removeEventListener('keyup', control);
            }
        }
    }
    /** Check For No Possible Moves 
     * If no more possible numbers are possible,
     * you lost result appears on screen
    */
    function checkForGameOver() {
        let blank = 0;
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].innerHTML == 0) {
                blank++;
            }
        }
        if (blank === 0) {
            resultDisplay.innerHTML = 'You Lose!';
            document.removeEventListener('keyup', control);
        }
    }
});
/** When the user clicks on i icon
 * rules appear on screen greeting the user and telling them how to play
*/
document.getElementById("myRules").innerHTML= "Hello " + player + " to play this game simply use the arrow keys left, right, up & down on your keyboard, those using mobile device, simply swipe in the direction you require.";
function myFunction(player) {
document.getElementById("myRules").innerHTML =
    "Hello " + player + " to play this game simply use the arrow keys left, right, up & down on your keyboard, those using mobile device, simply swipe in the direction you require. ";
    var rules = document.getElementById("myRules");
    rules.classList.toggle("show");
}
