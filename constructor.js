const cellArray = []
let cellWidth = 20
let cellHeight = 20

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
    let idBox = []
    
    for (let i = 0; i < (cellWidth * cellHeight); i++) {
        if (cellArray[i] == 1) {
            idBox.push(i)
            neighbor(i)
        }
    }
    for (let i = 0; i < idBox.length; i++) {
        nextPosition(idBox[i])
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

    //neighbor(id)
}

function neighbor(index) {
    id = parseInt(index)
    document.getElementById(id).style.background = "brown"
 
    //mudança de cor dos vizinhos superiores
    document.getElementById(id-cellWidth).style.background = "purple"
    document.getElementById(id-(cellWidth+1)).style.background = "purple"
    document.getElementById(id-(cellWidth-1)).style.background = "purple"
    
    //vizinhos laterais
    document.getElementById(id-1).style.background = "purple"
    document.getElementById(id+1).style.background = "purple"
    

    //vizinhos inferiores
    document.getElementById(id+cellWidth).style.background = "purple"
    document.getElementById(id+(cellWidth+1)).style.background = "purple"
    document.getElementById(id+(cellWidth-1)).style.background = "purple"

}

function nextPosition(index){
    i = parseInt(index)

    cellArray[i] = -1

    cellArray[i-cellWidth] = 1
    cellArray[i-(cellWidth+1)] = 1
    cellArray[i-(cellWidth-1)] = 1

    
    cellArray[i-1] = 1
    cellArray[i+1] = 1

    cellArray[i+cellWidth] = 1
    cellArray[i+(cellWidth+1)] = 1
    cellArray[i+(cellWidth-1)] = 1
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
