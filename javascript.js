

let turn = 1
let winner = ''
let playerTurn = ''

/*Gameboard*/
const gameBoard = (() =>{
    
    let createBoard = () =>{
        
        let content = document.querySelector('.content');
        /* Creates the container for the board */
        let boardContainer = document.createElement('div')
        boardContainer.classList.add("board")
        boardContainer.style.gridTemplateColumns = `repeat(${3},1fr)`
        boardContainer.style.gridTemplateRows = `repeat(${3},1fr)`
        content.appendChild(boardContainer)
                
        
        for(let i=0; i<=8;i++) {
            /* Creates a 3 by 3 grid */        
            let grid = document.createElement('div');
            grid.classList.add("grid");
            grid.setAttribute('id', `grid${i}`);
            grid.textContent = '';
            boardContainer.appendChild(grid);  
        }

        let grids = document.querySelectorAll('.grid')
        grids.forEach(grid => {
            console.log(grid.textContent)
            grid.addEventListener('click',() =>{
                if(turn%2 === 0){
                    turn += 1
                    let playerTurnContainerTurn = document.querySelector('.playerContainerTurn')
                    playerTurnContainerTurn.textContent = player2.name
                    console.log(turn)
                    grid.textContent = 'o'
                    grid.classList.add('ocuppiedGrid')
                    console.log(checkForWinner())
                }else{
                    let playerTurnContainerTurn = document.querySelector('.playerContainerTurn')
                    playerTurnContainerTurn.textContent = player1.name
                    turn += 1
                    console.log(turn)
                    grid.textContent = 'x'
                    grid.classList.add('ocuppiedGrid')
                    console.log(checkForWinner())
                }
                
                
            })
        });
    }
    let renderGameScreen = () => {
        
        /* In charge of deleting the menu */
        let content = document.querySelector('.content');
        content.innerHTML = '';
        console.log('hola')
        
        /* Menu Container */
        let menuHUD = document.createElement('div')
        menuHUD.classList.add('menuHUDContainer')
        content.appendChild(menuHUD)

        /*Reset Button */
        let resetButton = document.createElement('button')
        resetButton.classList.add('menuHUDButton')
        resetButton.textContent = 'Reset';
        resetButton.addEventListener('click',()=>{
            turn = 1;
            content.removeChild(content.children[2])
            createBoard()
        })
        menuHUD.appendChild(resetButton)

         /*home Button */
         let homeButton = document.createElement('button')
         homeButton.classList.add('menuHUDButton')
         homeButton.textContent = 'Home';
         homeButton.addEventListener('click',()=>{
            window.location.reload();
         })   

    
        menuHUD.appendChild(homeButton)



        /*CreatesHeader For score*/
        let headerScore = document.createElement('div');
        headerScore.classList.add('headerScore')

        
        /* Player 1 */
        let player1Container = document.createElement('div');
        player1Container.classList.add('playerContainer')
        player1Container.textContent = ` Player 1 X\ 
        ${player1.name} ` 
        headerScore.appendChild(player1Container)

        /*Player turn*/
        let playerTurnContainer = document.createElement('div');
        playerTurnContainer.classList.add('playerTurnContainer');
        
        let playerTurnContainerHeader = document.createElement('div');
        playerTurnContainerHeader.classList.add('playerContainerHeader');
        playerTurnContainerHeader.textContent = `Player`;
        playerTurnContainer.appendChild(playerTurnContainerHeader)

        let playerTurnContainerTurn = document.createElement('div');
        playerTurnContainerTurn.classList.add('playerContainerTurn');
        playerTurnContainerTurn.textContent = `Alex`;
        playerTurnContainer.appendChild(playerTurnContainerTurn)

        headerScore.appendChild(playerTurnContainer)

        /* Player 2 */
        let player2Container = document.createElement('div');
        player2Container.classList.add('playerContainer')
        player2Container.textContent = ` Player 2 O \
        ${player2.name} ` 
        headerScore.appendChild(player2Container)


        content.appendChild(headerScore)


        createBoard();
        
        

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
        let grids = document.querySelectorAll('.grid')
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
            renderGameScreen()
            alert('x won!')
        return winner
        } else{
            winningCombinations.forEach(winningCombination => {
                results.push(checker(o,winningCombination));
            });
    
            if(results.includes(true)){
                renderGameScreen()
                gameOver = true;
                alert('o won!')
                return winner
            }else if (results.includes(true)== false && turn == 10){
                
                alert('It is tie!')
                renderGameScreen()
                return winner

            }
        }



 

    }



    return{
     renderGameScreen,
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
        
        renderPVPMenu()

    })

    let renderPVPMenu = () =>{
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
            player1 = player(player1Input.value,'x')
            player2 = player(player2Input.value,'o')
            gameBoard.renderGameScreen()
            return player1,player2
        })
    }


})();



