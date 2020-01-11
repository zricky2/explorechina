var table = document.getElementsByClassName("table");
generateTable(table, les);
    
function generateTable(table, data) { // require a table element and data
    for (let element of data) { //access each array
        let row = table[0].insertRow();
        for (key in element) { //access info in each array
            let cell = row.insertCell();
            cell.className = "col"
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);

        }
    }
}