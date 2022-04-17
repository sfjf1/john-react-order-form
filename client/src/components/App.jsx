import React, { useState, useEffect } from 'react';
import Results from './Results.jsx';
import MainForm from './MainForm.jsx';


function App(props) {

  const [items, setItems] = useState([
    {item: 'apple', quantity: '10'},
    {item: 'orange', quantity: '8'}
  ]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');

  const handleItemNameChange = (event) => {
    const newItemName = event.target.value;
    setNewItemName(newItemName);
  }

  const handleItemQuantityChange = (event) => {
    const newItemQuantity = event.target.value;
    setNewItemQuantity(newItemQuantity);
  }

  const handleAddOrUpdate = (event) => {
    event.preventDefault();

    if (items.length === 0) {
      setItems([{item: newItemName, quantity: newItemQuantity}]);
    } else {
      var itemsCopy = items.slice();
      var itemExits = false;

      for (var i = 0; i < itemsCopy.length; i++) {
        if (itemsCopy[i].item === newItemName) {
          itemsCopy[i].quantity = newItemQuantity;
          setItems(itemsCopy);
          itemExits = true;
          break;
        }
      }
      if (! itemExits) {
        itemsCopy.push({item: newItemName, quantity: newItemQuantity});
        setItems(itemsCopy);
      }
    }

    setNewItemName("");
    setNewItemQuantity("");
  }


  return (
    <div className="main">
        <MainForm
          handleItemNameChange={handleItemNameChange}
          handleItemQuantityChange={handleItemQuantityChange}
          handleAddOrUpdate={handleAddOrUpdate}
          newItemName={newItemName}
          newItemQuantity={newItemQuantity}
        />
        {
          <Results title="Items" data={items}/>
        }
    </div>
  )
}

export default App;
