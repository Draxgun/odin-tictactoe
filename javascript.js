



/*Gameboard*/
const gameBoard = (() =>{
    
    let board = ['','','','','','','','','']

    let renderGrid = (board) => {
        
        let boardContainer = document.createElement('div')
        boardContainer.classList.add("board")
        console.log('hola')
        for(let i=0; i<=8;i++) {
            /* Creates a 3 by 3 grid */        
            let grid = document.createElement('div');
            grid.classList.add("grid");
            grid.setAttribute('id', `grid${i}`);
            grid.textContent = board[i-1]
            boardContainer.appendChild(grid);  
            boardContainer.style.gridTemplateColumns = `repeat(${3},1fr)`
        }
        let grids = document.querySelectorAll('.grid')
        grids.forEach(grid => {
            grid.addEventListener('click',() =>{
                grid.textContent = document.querySelector('.playerMarker').textContent
                grid.classList.remove('grid')
                grid.classList.add('ocuppiedGrid')
                console.log(checkForWinner())
            })
        });

    }

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    
    let boardStatus = () =>{
        let grids = document.querySelectorAll('.ocuppiedGrid')
        let boardArray = [];
        grids.forEach(grid => {
            boardArray.push(grid.textContent)
        });
        return boardArray
    }

    let emptySpaces = (boardStatus) => {
        let emptySpaceArray = [];
        let element = '';
        let idx = boardStatus.indexOf(element);
        while (idx != -1) {
            emptySpaceArray.push(idx);
            idx = boardStatus.indexOf(element, idx + 1);
        }
        return emptySpaceArray
    }

    let xSpaces = (boardStatus) => {
        let emptySpaceArray = [];
        let element = 'x';
        let idx = boardStatus.indexOf(element);
        while (idx != -1) {
            emptySpaceArray.push(idx);
            idx = boardStatus.indexOf(element, idx + 1);
        }
        return emptySpaceArray
    }

    let oSpaces = (boardStatus) => {
        let emptySpaceArray = [];
        let element = 'o';
        let idx = boardStatus.indexOf(element);
        while (idx != -1) {
            emptySpaceArray.push(idx);
            idx = boardStatus.indexOf(element, idx + 1);
        }
        return emptySpaceArray
    }

    let checkForWinner = () => {
        let boardArray = boardStatus();
        let x = xSpaces(boardArray);
        let o = oSpaces(boardArray);
        let checker = (arr, target) => target.every(v => arr.includes(v));
        
        let results = []
        winningCombinations.forEach(winningCombination => {
            results.push(checker(x,winningCombination));
        });

        if(results.includes(true)){
            winner = 'x';
            gameOver = true;
        return winner
        } else{
            winningCombinations.forEach(winningCombination => {
                results.push(checker(o,winningCombination));
            });
    
    
            if(results.includes(true)){
                winner = 'o';
                gameOver = true;
                return winner
            }else{
                winner = null;
                gameOver = false;
                return winner

            }
        }



 

    }

    return{
        board,
        renderGrid,
        boardStatus,
        winningCombinations,
        checkForWinner

    }
})();

/* player */
const player = (name,marker) => {
    return {name,marker}
}

let marker  = document.querySelector('.playerMarker')

marker.addEventListener('click', () => {
    if (marker.textContent === 'x'){
        marker.textContent = 'o'
    } else {
        marker.textContent = 'x'
        console.log('hola')
    }
})

const menu = (() =>{


    let pvpMode = document.getElementById('pvpButton')
    pvpMode.addEventListener('click',() =>{
        let gameMode = 'pvp'
    })

    let getGameMode = gameMode

    return{
        getGameMode,


    }

})();




const gameLogic = ((player1,player2,gameBoard) => {

    

})();



