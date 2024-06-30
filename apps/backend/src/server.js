const express = require('express');
const bodyParser = require('body-parser');
const { classifyFoodItem } = require('../food-tagging-service/src/model');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to classify food items
app.post('/classify-food', async (req, res) => {
    const { ingredients } = req.body;
    if (!ingredients) {
        return res.status(400).send('Ingredients are required');
    }
    try {
        const result = await classifyFoodItem(ingredients);
        res.json(result);
    } catch (error) {
        res.status(500).send('Error classifying food item');
    }
});

app.listen(port, () => {
    console.log(`API server running on http://localhost:${port}`);
});
