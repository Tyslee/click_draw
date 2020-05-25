const container = document.querySelector('#container');

function createGrid(num){

    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    
    for(var i=0; i < num; ++i){
        for(var j=0; j< num; ++j){
            var cell = document.createElement("div");
            cell.classList.add("cellClass");

            if(num > 30){
                cell.style.border = "none";
            }
            else{
                cell.style.border = "solid";
            }

            cell.addEventListener('mouseenter', function(e) {
                e.target.style.background = "black";
            });

            container.appendChild(cell);
        }
    }
}

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () =>{
    clear();
});

function clear(){
    container.innerHTML = " ";
    var dim = prompt("What dimensions of the square grid do you want?", dim)
    console.log(dim);
    createGrid(dim);
}

createGrid(16);