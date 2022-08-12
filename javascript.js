



/*Gameboard*/
const gameBoard = (() =>{
    
    let board = ['','','','','','','','','']

    let renderGrid = (board) => {
        
        /* In charge of deleting the menu */
        let content = document.querySelector('.content');
        content.innerHTML = '';
        console.log('hola')

        /* Creates the container for the board */
        let boardContainer = document.createElement('div')
        boardContainer.classList.add("board")
        content.appendChild(boardContainer)
        
        
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
            console.log(grid.textContent)
            grid.addEventListener('click',() =>{
                grid.textContent = 'x'
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
            alert('x won!')
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

const menu = (() =>{


    let pvpMode = document.getElementById('pvpButton')
    pvpMode.addEventListener('click',() =>{
        let menuContents = document.querySelector('.menuContents')
        menuContents.innerHTML = '';

        let player1Marker = document.createElement('div')
        player1Marker.classList.add('playerTitle')
        player1Marker.textContent = 'Player 1: X'
        menuContents.appendChild(player1Marker)

        let player1Name = document.createElement('div')
        player1Name.classList.add('playerTitle')
        player1Name.textContent = 'Player name'
        menuContents.appendChild(player1Name)

        let player1Input = document.createElement('input')
        player1Input.setAttribute('type','input')
        player1Input.classList.add('menuInput')
        menuContents.appendChild(player1Input)

        let player2Marker = document.createElement('div')
        player2Marker.classList.add('playerTitle')
        player2Marker.textContent = 'Player 2: 0'
        menuContents.appendChild(player2Marker)

        let player2Name = document.createElement('div')
        player2Name.classList.add('playerTitle')
        player2Name.textContent = 'Player name'
        menuContents.appendChild(player2Name)

        let player2Input = document.createElement('input')
        player2Input.setAttribute('type','input')
        player2Input.classList.add('menuInput')
        menuContents.appendChild(player2Input)

        let start = document.createElement('button');
        start.classList.add('menuButton')
        start.setAttribute('id','startButton')
        start.textContent = 'Play!'
        menuContents.appendChild(start)
        start.addEventListener('click',() =>{
            gameBoard.renderGrid(gameBoard.board)
        })


    })




})();




const gameLogic = ((player1,player2,gameBoard) => {

    

})();



