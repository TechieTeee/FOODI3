const tf = require('@tensorflow/tfjs');
const path = require('path');
const fs = require('fs');
const csvParser = require('csv-parser');

async function loadData() {
    const csvFilePath = path.join(__dirname, '../data/food_data.csv');
    const data = [];
    const labels = [];

    await new Promise((resolve) => {
        fs.createReadStream(csvFilePath)
            .pipe(csvParser())
            .on('data', (row) => {
                const ingredients = row.ingredients.split(',').map(() => 1); // Replace with proper feature extraction
                data.push(ingredients);
                labels.push([
                    row.is_vegan === 'true',
                    row.is_vegetarian === 'true',
                    row.is_kosher === 'true',
                    row.is_fair_trade === 'true',
                    row.is_allergen_free === 'true',
                ]);
            })
            .on('end', resolve);
    });

    return {
        inputs: tf.tensor2d(data),
        labels: tf.tensor2d(labels),
    };
}

async function trainModel() {
    const { inputs, labels } = await loadData();

    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [inputs.shape[1]], units: 32, activation: 'relu' }));
    model.add(tf.layers.dense({ units: labels.shape[1], activation: 'sigmoid' }));

    model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });

    await model.fit(inputs, labels, { epochs: 50 });

    const modelPath = path.join(__dirname, '../models/food_tagging_model');
    await model.save(`file://${modelPath}`);
}

trainModel().catch(console.error);
