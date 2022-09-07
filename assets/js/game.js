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
    /** Generate Random Number */
    function generate() {
        let randomNumber = Math.floor(Math.random() * tiles.length);
        if (tiles[randomNumber].innerHTML == 0) {
            tiles[randomNumber].innerHTML = 2;
            checkForGameOver();
        } else generate();
    }
    /** Swipe Right */
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
    /** Swipe Left */
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
    /** Swipe Down */
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
    /** Swipe Up */
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
    /** Combine Numbers along row if numbers match */
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
    /** Combine Numbers along column if numbers match */
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
    /** Assign Keys for keyboard use */
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
    /** Assign Keys for swiping mobile use */
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
        console.log(Math.abs(hori) + " / " + Math.abs(vert));
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
                console.log('Swiped Up');
                break;
            case "down":
                keyDown();
                console.log('Swiped Down');
                break;
            case "right":
                keyRight();
                console.log('Swiped Right');
                break;
            case "left":
                keyLeft();
                console.log('Swiped Left');
                break;
        }
        /** Swipe Left function */
        if (touchendX < touchstartX) {
            moveLeft();
            combineRow();
            moveLeft();
            generate();
            console.log('Swiped Left');
        }
        /** Swipe Right function */
        if (touchendX > touchstartX) {
            moveRight();
            combineRow();
            moveRight();
            generate();
            console.log('Swiped Right');
        }
        /** Swipe Up function */
        if (touchendY < touchstartY) {
            moveUp();
            combineColumn();
            moveUp();
            generate();
            console.log('Swiped Up');
        }
        /** Swipe Down function */
        if (touchendY > touchstartY) {
            moveDown();
            combineColumn();
            moveDown();
            generate();
            console.log('Swiped Down');
        }
    }
    document.addEventListener('keyup', control);
    /** Move Right Function */
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
    /** Move Left Function */
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
    /** Move Down Function */
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
    /** Move Up Function */
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
    /** Check For Number 2048 For Win */
    function checkForWin() {
        for (let i = 0; i < tiles.length; i++) {
            if (tiles[i].innerHTML == 2048) {
                resultDisplay.innerHTML = 'Congratulations, You Win!';
                document.removeEventListener('keyup', control);
            }
        }
    }
    /** Check For No Possible Moves */
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
/** When the user clicks on div, open the popup */
document.getElementById("myRules").innerHTML= "Hello " + player + " to play this game simply use the arrow keys left, right, up & down on your keyboard, those using mobile device, simply swipe in the direction you require.";
function myFunction(player) {
document.getElementById("myRules").innerHTML =
    "Hello " + player + " to play this game simply use the arrow keys left, right, up & down on your keyboard, those using mobile device, simply swipe in the direction you require. ";
    var rules = document.getElementById("myRules");
    rules.classList.toggle("show");
}
