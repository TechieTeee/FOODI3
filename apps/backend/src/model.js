const tf = require('@tensorflow/tfjs');
const path = require('path');
const fs = require('fs');

// Load a pre-trained model (replace with your own training process)
async function loadModel() {
    const modelPath = path.join(__dirname, '../models/food_tagging_model.json');
    return await tf.loadLayersModel(`file://${modelPath}`);
}

// Classify food item based on ingredients
async function classifyFoodItem(ingredients) {
    const model = await loadModel();

    // Convert ingredients to input tensor (example, you should preprocess properly)
    const inputTensor = tf.tensor1d(ingredients.split(',').map(() => 1));

    // Get predictions
    const predictions = model.predict(inputTensor.expandDims(0));

    // Process predictions (example)
    const tags = predictions.dataSync().map(prob => prob > 0.5);

    return {
        is_vegan: tags[0],
        is_vegetarian: tags[1],
        is_kosher: tags[2],
        is_fair_trade: tags[3],
        is_allergen_free: tags[4],
    };
}

module.exports = { classifyFoodItem };
