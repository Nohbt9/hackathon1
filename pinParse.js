const fs = require('fs');
const csvParser = require('csv-parser');

const filePath = "./csv_files/dev-pin_latlon.js"; // Replace with the path to your CSV file

const dataArray = [];

// Read the CSV file and convert it to an array of objects
fs.createReadStream(filePath)
  .pipe(csvParser())
  .on('data', (row) => {
    dataArray.push(row);
  })
  .on('end', () => {
    console.log('CSV file has been converted to an array of objects:');
    console.log(dataArray);
  })
  .on('error', (error) => {
    console.error('Error reading CSV file:', error.message);
  });
