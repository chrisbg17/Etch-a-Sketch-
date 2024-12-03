const divc = document.getElementById('container')
let rgbEnabled = false 

function makegrid(squareperside){
    divc.innerHTML = ''
    const boxsize = 960 /squareperside
    for (let i = 0; i < squareperside * squareperside; i++){
        const grid = document.createElement('div')
        grid.className = 'box';
        grid.style.width = `${boxsize}px`
        grid.style.height = `${boxsize}px`
        

        grid.addEventListener('mouseover', () => basiccolor(grid))

        grid.addEventListener('mouseover', () => {
            if (rgbEnabled) {
                const randomColor = GenerateRandomColor();
                grid.style.backgroundColor = randomColor;
            }
        }),

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

function ToggleRGB(){
rgbEnabled = !rgbEnabled
alert(`RGB is nog ${rgbEnabled ? 'enabled' : 'disabled'}`)
}

function GenerateRandomColor(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}

function basiccolor(grid){
    grid.style.backgroundColor = "blue"

}

const btn = document.getElementById('gridbutton')
btn.addEventListener('click', () => createnewgrid())

const colorbtn = document.getElementById('RGB')
colorbtn.addEventListener('click', () => ToggleRGB())



makegrid(16)
