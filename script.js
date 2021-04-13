const gridContainer = document.querySelector('#gridContainer');
const buttonContainer = document.querySelector('#buttonContainer');
const btn = document.createElement('button'); 
let grid = document.querySelector('div');
let i = 0;
let gridDimensions = 0;
function removeGrid () {
    if (gridDimensions == 0) {    
            createGrid();
    }
    else if (gridDimensions > 0) {
        for (i = 0; i < gridDimensions * gridDimensions; i++) {
            grid = document.getElementById('div-' + i); 
            gridOverlay = document.getElementById('div-overlay-' + i); 
            gridOverlay.remove();  
            grid.remove();  
        }
        gridContainer.removeAttribute('style'); 
        createGrid();
    }
    
}
function createGrid () {
    let arr = [];
    let numRgb = [];
    gridDimensions = Number(window.prompt("How many squares per side to make the grid?", ""));    
    for (i = 0; i < gridDimensions; i++) {
        arr[i] = (300 / gridDimensions) + "px";
        gridContainer.setAttribute('style','display: inline-grid; width: 300px; height: 300px; grid-template-columns:' + arr.join(" ") + '; grid-template-rows:' + arr.join(" "));
    }
    numRgb[0] = Math.floor(Math.random() * 256);    
    numRgb[1] = Math.floor(Math.random() * 256);    
    numRgb[2] = Math.floor(Math.random() * 256);
    for (i = 0; i < gridDimensions * gridDimensions; i++) {
        grid = document.createElement('div');
        grid.classList.add('div-' + i);
        grid.setAttribute('id', 'div-' + i); 
        grid.setAttribute('style', 'opacity: 0; background-color: black; height: 100%');
        gridOverlay = document.createElement('div');
        gridOverlay.classList.add('div-overlay-' + i);
        gridOverlay.setAttribute('id', 'div-overlay-' + i);   
        gridOverlay.setAttribute('style', 'background-color: transparent; opacity: 1.0; background:rgb(' + numRgb + ')');
        gridContainer.appendChild(gridOverlay);
        gridOverlay.appendChild(grid);
        grid.addEventListener("mouseover", function () {
                this.style.opacity = Number(this.style.opacity); 
                switch (Number(this.style.opacity)) {
                    case 0:
                        this.removeAttribute('style');
                        this.setAttribute('style', 'background-color: black; height: 100%; opacity: ' + 0);
                        this.style.opacity = 0.1; 
                    break;    
                    case 0.1:
                        this.removeAttribute('style');
                        this.setAttribute('style', 'background-color: black; height: 100%; opacity: ' + 0.1);
                        this.style.opacity = 0.2;
                    break;
                    case 0.2:
                        this.removeAttribute('style');
                        this.setAttribute('style', 'background-color: black; height: 100%; opacity: ' + 0.2);
                        this.style.opacity = 0.3;
                    break;
                    case 0.3:
                        this.removeAttribute('style');
                        this.setAttribute('style', 'background-color: black; height: 100%; opacity: ' + 0.3);
                        this.style.opacity = 0.4;
                    break;
                    case 0.4:
                        this.removeAttribute('style');
                        this.setAttribute('style', 'background-color: black; height: 100%; opacity: ' + 0.4);
                        this.style.opacity = 0.5;
                    break;
                    case 0.5:
                        this.removeAttribute('style');
                        this.setAttribute('style', 'background-color: black; height: 100%; opacity: ' + 0.5);
                        this.style.opacity = 0.6;
                    break;
                    case 0.6:
                        this.removeAttribute('style');
                        this.setAttribute('style', 'background-color: black; height: 100%; opacity: ' + 0.6); 
                        this.style.opacity = 0.7;
                    break;
                    case 0.7:
                        this.removeAttribute('style');
                        this.setAttribute('style', 'background-color: black; height: 100%; opacity: ' + 0.7);
                        this.style.opacity = 0.8;
                    break;   
                    case 0.8:
                        this.removeAttribute('style');
                        this.setAttribute('style', 'background-color: black; height: 100%; opacity: ' + 0.8);
                        this.style.opacity = 0.9;
                    break;    
                    case 0.9:
                        this.removeAttribute('style');
                        this.setAttribute('style', 'background-color: black; height: 100%; opacity: ' + 0.9);
                        this.style.opacity = 1.0;
                    break;    
                    case 1.0:
                        this.removeAttribute('style');
                        this.setAttribute('style', 'background-color: black; height: 100%; opacity: ' + 1.0);
                    break;        
                }
            
        });
    }
    return gridDimensions;
}

function main () {
    container.setAttribute('style', 'display: flex; align-items: center; justify-content: center; margin-left: auto; margin-right: auto; width: 300px; height: 300px');    
    btn.setAttribute('style', 'width: 100px; height: 40px; font-weight: bold;');
    buttonContainer.setAttribute('style', 'display: flex; align-items: center; justify-content: center; margin-left: auto; margin-right: auto; padding-bottom: 30px;');
    btn.classList.add('squareButton');
    btn.id = 'squareButton';
    buttonContainer.appendChild(btn);
    btn.addEventListener("click", function () {
        removeGrid();
    });
}

main();
