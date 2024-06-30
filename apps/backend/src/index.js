const { classifyFoodItem } = require('./model');
const path = require('path');
const fs = require('fs');
const csvParser = require('csv-parser');

// Load and classify data from CSV
async function main() {
    const csvFilePath = path.join(__dirname, '../data/food_data.csv');
    const data = [];

    fs.createReadStream(csvFilePath)
        .pipe(csvParser())
        .on('data', (row) => {
            data.push(row);
        })
        .on('end', async () => {
            for (const item of data) {
                const result = await classifyFoodItem(item.ingredients);
                console.log(`Item: ${item.name}`);
                console.log(`Tags:`, result);
            }
        });
}

main();
