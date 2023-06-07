//Recuper gli elemte dal DOM
const grid=document.getElementById('grid');
const button=document.querySelector('button');
const level=document.getElementById('level')
//Preparo i dati iniziali 
const rows=10;
const cols=10;
const rowsMedium=9;
const colsMedium=9;
const rowsHard=7;
const colsHard=7;
//Totali
let totalCells='';
let cells = '';

//Stampiamo la griglia la click
button.addEventListener('click',function(){
    grid.innerHTML='';
    
    if(level.value==='easy'){
        totalCells= rows * cols;
        cells='cell';
    }else if (level.value==='medium'){
        totalCells= rowsMedium * colsMedium;
        cells='cell-medium';
    }else if(level.value==='hard'){
        totalCells= rowsHard * colsHard;
        cells='cell-hard';
    }
    //Stampiamo le celle
    for(let i=1;i<=totalCells;i++){
        const cell =createCell(i);
        
        cell.addEventListener('click',function () {
            cell.classList.toggle('clicked');
            console.log(i);
        })
        grid.appendChild(cell);
    }
})

//Function
function createCell(cellNumber){
    const cell =document.createElement('div');
    cell.className=cells ;
    cell.innerText=cellNumber;
    return cell;
}


