function createTable() {
    let rows = prompt("Number of Rows: ");
	let columns = prompt("Number of Columns: ");

	rows = parseInt(rows);
	columns = parseInt(columns);

	if(isNaN(rows) || isNaN(columns) || rows <=0 || columns <=0){
		alert("Please Enter a valid Number");
		return;
	}

	const table = document.getElementById("myTable");
	table.innerHTML = '';


	for(let i=0;i<rows; i++){
		const tr = document.createElement("tr");
		for(let j=0;j<columns; j++){
			const td = document.createElement("td");
			td.textContent = `Row-${i+1} Column-${j+1}`;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	
  
}


