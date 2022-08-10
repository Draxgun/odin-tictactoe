

/*Gameboard*/
const gameBoard = (() =>{
    let board = ['x','o','x','x','x','o','x','o','x']

    let renderGrid = (board) => {
        
        let boardContainer = document.querySelector('.board')
        console.log('hola')
        for(let i=1; i<=9;i++) {
            /* Creates a 3 by 3 grid */        
            let grid = document.createElement('div');
            grid.classList.add("grid");
            grid.setAttribute('id', `grid${i}`);
            grid.textContent = board[i-1]
            boardContainer.appendChild(grid);  
            boardContainer.style.gridTemplateColumns = `repeat(${3},1fr)`
        }

    }

    return{
        board,
        renderGrid
    }
})();

/* player */
const player = (name,marker) => {
    return {name,marker}
}

const player1 = player('Alex','x')

