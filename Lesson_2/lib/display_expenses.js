const idPadding = 3;
const createdOnPadding = 10;
const amountPadding = 12;

function displayExpenses(data) {
  console.log('');

  data.forEach(row => {
    let currentRow = [];
    Object.keys(row).forEach(column => {
      currentRow.push(formatColumns(row, column));
    });
    printOutput(currentRow);
  });

  console.log('');
}

function formatColumns(row, column) {
  switch (true) {
    case column === 'id':
      return String(row[column]).padStart(idPadding, ' ');
    case column === 'amount':
      return String(row[column]).padStart(amountPadding, ' ');
    case column === 'created_on':
      return row[column].toDateString().padStart(createdOnPadding, ' ');
    default:
      return row[column];
  }
}

function printOutput(data) {
  console.log(data.join(' | '));
}

module.exports = displayExpenses;