function createTable() {
    // Prompt for input with exact messages
    let rows = prompt("Input number of rows");
    let columns = prompt("Input number of columns");

    // Convert to numbers
    rows = parseInt(rows);
    columns = parseInt(columns);

    // Validate input
    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    // Get reference to the table and clear any existing content
    const table = document.getElementById("myTable");
    table.innerHTML = '';

    // Create the table dynamically
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            const td = document.createElement("td");
            td.textContent = `Row-${i} Column-${j}`; // Note: 0-based index
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
