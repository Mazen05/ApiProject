import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/items/${itemId}`)
      .then(response => {
        setItem(response.data);
      })
      .catch(error => console.error('Error fetching item details:', error));
  }, [itemId]);

  const addToCart = () => {
    axios.post(`http://localhost:3000/cart`, { itemId: item.id, quantity: 1 })
      .then(response => {
        alert('Item added to cart');
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
        alert('Failed to add item to cart');
      });
  };

  return (
    <div>
      {item ? (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ) : (
        <p>Loading item details...</p>
      )}
    </div>
  );
}

export default ItemDetail;
