const tiles = document.querySelectorAll('.game__bord__tile')

const countMoves = ()=>{

}

const flipTile = (movesNum) =>{
    tiles.forEach(tile =>{
        tile.addEventListener('click',(e)=>{
            e.target.classList.add('game__bord__tilie--flip')
            e.target.children[0].classList.add('game__bord__tile--back--flip')
        })
    })
}

const init = ()=>{
    flipTile()
}

init()