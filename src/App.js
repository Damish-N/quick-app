import './App.css';
import {useState, useEffect} from "react";
import axios from 'axios';

function App() {
        const [items, setItems] = useState([]);
        const [newItem, setNewItem] = useState('');
      
        // Fetch items from Spring Boot backend
        useEffect(() => {
          axios.get('http://localhost:8080/api/items')
            .then(response => {
              setItems(response.data);
            })
            .catch(error => {
              console.error('Error fetching items:', error);
            });
        }, []);
      
        // Add new item
        const handleAddItem = () => {
          if (newItem.trim() === '') return;
      
          axios.post('http://localhost:8080/api/items', { name: newItem })
            .then(response => {
              setItems([...items, response.data]); // Add to list
              setNewItem(''); // Clear input
            })
            .catch(error => {
              console.error('Error adding item:', error);
            });
        };
      
        

    const styles = {
        container: {
            textAlign: 'center',
            marginTop: '50px',
            fontFamily: 'Arial, sans-serif',
        },
        item: {
            fontSize: '18px',
            margin: '5px 0',
        },
        input: {
            padding: '8px',
            marginRight: '10px',
            fontSize: '16px',
        },
        button: {
            padding: '8px 16px',
            fontSize: '16px',
            cursor: 'pointer',
        }
    };
    return (
        <div style={styles.container}>
          <h1>My Full-Stack App</h1>
          <ul>
            {items.map(item => (
              <li key={item.id} style={styles.item}>{item.name}</li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add new item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleAddItem} style={styles.button}>Add</button>
        </div>
      );
}

export default App;
