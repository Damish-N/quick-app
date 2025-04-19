import './App.css';
import {useState} from "react";

function App() {
    const [items, setItems] = useState(['Learn React', 'Build a project']);
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        if (newItem.trim() !== '') {
            setItems([...items, newItem]);
            setNewItem('');
        }
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
        <h1>My Simple React App</h1>
        <ul>
          {items.map((item, index) => (
              <li key={index} style={styles.item}>{item}</li>
          ))}
        </ul>
        <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new item"
            style={styles.input}
        />
        <button onClick={handleAddItem} style={styles.button}>Add</button>
      </div>
  );

}

export default App;
