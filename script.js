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
const totalCells= rows * cols;
const totalCellsMedium= rowsMedium * colsMedium;
const totalCellsHard= rowsHard * colsHard;


//Stampiamo la griglia la click
button.addEventListener('click',function(){
    grid.innerHTML=''
    
    //Stampiamo le celle
    for(let i=1;i<=totalCells;i++){
        const cell =createCell(i);
        
        cell.addEventListener('click',function () {
            cell.classList.toggle('clicked');
            console.log(i)
        })
        grid.appendChild(cell);
    }
})
//Function
function createCell(cellNumber){
    const cell =document.createElement('div');
    cell.className='cell';
    cell.innerText=cellNumber;
    return cell;
}