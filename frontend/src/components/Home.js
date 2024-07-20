import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <Link to={`/items/${item.id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
