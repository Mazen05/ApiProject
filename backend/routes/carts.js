const express = require('express');
const router = express.Router();

// Mock data for cart
let cart = [
    { cartItemId: 1, itemId: 1, quantity: 2 },
    { cartItemId: 2, itemId: 2, quantity: 1 }
];


router.get('/', (req, res) => {
    res.json(cart);
});

router.post('/', (req, res) => {
    const { itemId, quantity } = req.body;
    const cartItemId = cart.length + 1;
    cart.push({ cartItemId, itemId, quantity });
    res.status(201).send('Item added to cart');
});


router.put('/:cartItemId', (req, res) => {
    const { cartItemId } = req.params;
    const { quantity } = req.body;
    const item = cart.find(i => i.cartItemId === parseInt(cartItemId));
    if (!item) {
        return res.status(404).send('Cart item not found');
    }
    item.quantity = quantity;
    res.send('Cart updated');
});


router.delete('/:cartItemId', (req, res) => {
    const { cartItemId } = req.params;
    const index = cart.findIndex(i => i.cartItemId === parseInt(cartItemId));
    if (index === -1) {
        return res.status(404).send('Cart item not found');
    }
    cart = cart.filter(i => i.cartItemId !== parseInt(cartItemId));
    res.send('Item removed from cart');
});

module.exports = router;
