import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cart')
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const removeFromCart = (cartItemId) => {
    axios.delete(`http://localhost:3000/cart/${cartItemId}`)
      .then(() => {
        setCartItems(cartItems.filter(item => item.cartItemId !== cartItemId));
        alert('Item removed from cart');
      })
      .catch(error => {
        console.error('Error removing item from cart:', error);
        alert('Failed to remove item from cart');
      });
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.cartItemId}>
            Item ID: {item.itemId}, Quantity: {item.quantity}
            <button onClick={() => removeFromCart(item.cartItemId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
