const divc = document.getElementById('container')

function makegrid(squareperside){
    divc.innerHTML = ''
    const boxsize = 960 /squareperside
    for (let i = 0; i < squareperside * squareperside; i++){
        const grid = document.createElement('div')
        grid.className = 'box';
        grid.style.width = `${boxsize}px`
        grid.style.height = `${boxsize}px`
        

        grid.addEventListener('mouseover', () => {
            grid.classList.add('color')

        })

        divc.appendChild(grid);
    }
}

function createnewgrid(){
    let squareperside = prompt('Enter a number between 1 and 100 for a new grid (max 100)')
    if (isNaN(squareperside) || squareperside < 1 || squareperside > 100){
        alert('enter a valid number')
    }
    else {
        makegrid(squareperside)
    }

}


const btn = document.getElementById('gridbutton')
btn.addEventListener('click', () => createnewgrid())


makegrid(16)
