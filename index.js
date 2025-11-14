// const express = require("express"); // commonjs import, synchronous
import express from 'express'; // ES mosule import, asynchronous
import bodyparser from 'body-parser';

const app = express();
// get client dat in request.body
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const productRouter = express.Router();
// GET
productRouter.get('/', (req, res) => {
    res.send('Get all products');
});

// GET ONE
productRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Get one product with id: ${id}`);
});

// POST - create new product
productRouter.post('/', (req, res) => {
    const product = req.body;
    console.log(product);
    console.log(req.body.name);
    res.status(201).send(`Product created`);
});

// PUT - update product
productRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    const product = req.body;
    console.log(`Update product with id: ${id}`, product);
    res.send(`Product with id: ${id} updated`);
});

// PATCH - partial update product
productRouter.patch('/:id', (req, res) => {
    const id = req.params.id;
    const product = req.body;
    console.log(`Partially update product with id: ${id}`, product);
    res.send(`Product with id: ${id} partially updated`);
});


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