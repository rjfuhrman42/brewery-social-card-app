const express = require('express');
const app = express();
const fetch = require('node-fetch')
const port = process.env.PORT || 5000;
require('dotenv').config();

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/express_backend', (req, res) => {
    res.send({express: 'YOUR BACKEND IS CONNECTED TO REACT!'});
});

app.get('/brewery', async (request, response) => {
    const api_key = process.env.REACT_APP_BREWERYDB_API_KEY;
    const brewery_url = `https://sandbox-api.brewerydb.com/v2/breweries?key=${api_key}`
    const brewery_res = await fetch(brewery_url);
    const brewery_data = await brewery_res.json();
    console.log(brewery_data);
    response.json(brewery_data);
})