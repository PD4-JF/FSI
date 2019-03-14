const cellArray = []
let cellWidth = 10
let cellHeight = 10

function start() {
    createCellsDataStructure()
    renderCells()
}

function createCellsDataStructure() {
    const numberOfCells = cellWidth * cellHeight

    for (let i = 0; i < numberOfCells; i++) {
        cellArray[i] = 0
    }
}

function cellsPropagation() {
    
    for (let i = 0; i < (cellWidth * cellHeight); i++) {
        console.log(i)
        if (cellArray[i] == 1) {
            cellArray[i] = 0
            cellArray[i-cellWidth] = 1
            console.log("***"+cellArray[i+cellWidth])
            //console.log(cellArray)
            nextPosition(i)
        }
    }
}

function changeColor(element){
    var id = element.id
    
    if (cellArray[id] == 0) {
        document.getElementById(id).style.background = "purple"
        cellArray[id] = 1
    }else {
        document.getElementById(id).style.background = "buttonface"
        cellArray[id] = 0
    }

    //console.log(cellArray)

    neighbor(id)
}

function neighbor(index) {
    id = parseInt(index)
    //vizinhos superiores
    document.getElementById(id-cellWidth).style.background = "#999"
    document.getElementById(id-(cellWidth+1)).style.background = "#999"
    document.getElementById(id-(cellWidth-1)).style.background = "#999"

    //vizinhos laterais
    document.getElementById(id-1).style.background = "#999"
    document.getElementById(id+1).style.background = "#999"

    //vizinhos inferiores
    document.getElementById(id+cellWidth).style.background = "#999"
    document.getElementById(id+(cellWidth+1)).style.background = "#999"
    document.getElementById(id+(cellWidth-1)).style.background = "#999"
}

function nextPosition(index) {
    id = parseInt(index)
    
    document.getElementById(id).style.background = "buttonface"
    document.getElementById(id-cellWidth).style.background = "purple"
}

function renderCells() {
    let html = '<table cellpadding=0 cellsapcing=0>'
    for (let row = 0; row < cellHeight; row++) {
        html += '<tr>'
        
        for (let column = 0; column < cellWidth; column++) {
            var cellIndex = column + (cellWidth * row)
            html += '<td class="cell-index">'
            html += `<button id="${cellIndex}" onClick="changeColor(this)">${cellIndex}</button>`
            html += '</td>'
        }


        html += '</tr>'
    }
    html += '</table>'

    document.querySelector('#cellBlock').innerHTML = html
}


start()
