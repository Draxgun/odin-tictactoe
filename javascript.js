

/*Gameboard*/
const gameBoard = (() =>{
    
    let board = ['','','','','','','','','']

    let renderGrid = (board) => {
        
        let boardContainer = document.querySelector('.board')
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
                grid.textContent = 'x'
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
    
    let boardSatus = () =>{
        let grids = document.querySelectorAll('.grid')
        let boardArray = [];
        grids.forEach(grid => {
            boardArray.push(grid.textContent)
        });
        return boardArray
    }

    let emptySpaces = (boardSatus) => {
        let emptySpaceArray = [];
        let element = '';
        let idx = boardSatus.indexOf(element);
        while (idx != -1) {
            emptySpaceArray.push(idx);
            idx = boardSatus.indexOf(element, idx + 1);
        }
        return emptySpaceArray
    }

    let xSpaces = (boardSatus) => {
        let emptySpaceArray = [];
        let element = 'x';
        let idx = boardSatus.indexOf(element);
        while (idx != -1) {
            emptySpaceArray.push(idx);
            idx = boardSatus.indexOf(element, idx + 1);
        }
        return emptySpaceArray
    }

    let oSpaces = (boardSatus) => {
        let emptySpaceArray = [];
        let element = 'o';
        let idx = boardSatus.indexOf(element);
        while (idx != -1) {
            emptySpaceArray.push(idx);
            idx = boardSatus.indexOf(element, idx + 1);
        }
        return emptySpaceArray
    }

    let checkForWinner = () => {
        let boardArray = boardSatus();
        let x = xSpaces(boardArray);
        let o = oSpaces(boardArray);
        let checker = (arr, target) => target.every(v => arr.includes(v));
        let results = []
        winningCombinations.forEach(winningCombination => {
            
            results.push(checker(x,winningCombination));
        });
        if(results.includes(true)){
            console.log('x won')
        }else{
            console.log('x lost')
        }

    }

    return{
        board,
        renderGrid,
        boardSatus,
        winningCombinations,
        checkForWinner

    }
})();

/* player */
const player = (name,marker) => {
    return {name,marker}
}






const player1 = player('Alex','x')
gameBoard.renderGrid(gameBoard.board)

