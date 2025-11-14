import express from 'express';

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

// DELETE - delete product
productRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Delete product with id: ${id}`);
    res.send(`Product with id: ${id} deleted`);
});

export default productRouter;