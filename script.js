/*
File: script.js
GUI Assignment: Multiplication Table
Adam El-Telbani, UMass Lowell Computer Science, Adam_ElTelbani@student.uml.edu
Copyright (c) 2024 by Adam. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by Adam on June 2nd, 2024 at 8:20PM
*/

// Create table function
function generateTable() {
    // Clear previous error messages
    document.getElementById('errorContainer').textContent = '';

    // Get Input Values
    let minCol = document.getElementById('minCol').value;
    let maxCol = document.getElementById('maxCol').value;
    let minRow = document.getElementById('minRow').value;
    let maxRow = document.getElementById('maxRow').value;

    // Error if not a number
    if (isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow)) {
        displayError('Please only enter numbers.');
        return;
    }
    
    // Grab user input
    minCol = parseInt(minCol);
    maxCol = parseInt(maxCol);
    minRow = parseInt(minRow);
    maxRow = parseInt(maxRow);

    // Error if more than 50 or less than -50
    if (minCol < -50 || minRow < -50) {
        displayError('Please no less than -50.');
        return;
    }

    if (maxCol > 50 || maxRow > 50) {
        displayError('Please no more than 50.');
        return;
    }

    if (minCol > maxCol || minRow > maxRow) {
        displayError('Minimums cannot be greater than maximums.');
    }

    // Create Table Element
    let table = document.createElement('table');
    table.className = 'table table-bordered';

    // Create Table Rows and Columns
    for (let row = minRow - 1; row <= maxRow; row++) {
        let tr = document.createElement('tr');
        for (let col = minCol - 1; col <= maxCol; col++) {
            let td = document.createElement('td');

            if (row === minRow - 1 && col === minCol - 1) {
                td.className = 'top-left-cell';
            } else if (row === minRow - 1) {
                td.textContent = col;
                td.className = 'header-cell';
            } else if (col === minCol - 1) {
                td.textContent = row;
                td.className = 'header-cell';
            } else {
                td.textContent = row * col;
            }

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    // Clear all content and create table
    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
}
    // Display error message
function displayError(message) {
    let errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent = message;
}
