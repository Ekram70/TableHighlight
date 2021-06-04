//selecting the whole table
let table = document.querySelector("tbody");
// tbodyCells is for all cells without the th
let tbodyCells = document.querySelectorAll(".table-data:not(.table-head-data)");
// rowLength is to calculate how many rows my table have.
let rowLength = document.querySelectorAll(".table-row").length;
// colLength is to calculate how many columns my table have.
let colLength = document.querySelector("tbody").rows[0].cells.length;
// variable for cellIndex Number (column Number)
let colNumber;

// When mouse leaves nothing gets color
table.addEventListener("mouseleave", function () {
  for (let rem = 0; rem < tbodyCells.length; rem++) {
    tbodyCells[rem].classList.remove("table-col-hover");
  }
});

// adding hover event to all tbodyCells
for (let count = 0; count < tbodyCells.length; count++) {
  tbodyCells[count].addEventListener("mouseover", function () {
    // getting the cellIndex (column Number)
    colNumber = tbodyCells[count].cellIndex;

    // Removing color from all cells
    for (let rem = 0; rem < tbodyCells.length; rem++) {
      tbodyCells[rem].classList.remove("table-col-hover");
    }

    // adding color to expected column
    for (let x = 0; x < rowLength - 1; x++) {
      tbodyCells[x * colLength + colNumber].classList.add("table-col-hover");
    }
  });
}
