// const express = require("express"); // commonjs import, synchronous
import express from 'express'; // ES mosule import, asynchronous
import bodyparser from 'body-parser';
import productRouter from './product_router.js';

const app = express();
// get client dat in request.body
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api/products', productRouter); // implement the router

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get(
    '/api/data/:user', //path
    (req, res, next) => {
        console.log(req.params)
        const user = req.params.user;
        console.log(user)
        console.log(req.query)
        res.status(200).send(`User: ${user}`)
    }
)

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});

// module.exports = app; // commonjs module
export default app; // ES mosule export