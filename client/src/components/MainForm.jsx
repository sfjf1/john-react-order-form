import React from "react";


function MainForm(props) {

  return (
    <>

      <div>
        <h2>Add / Update Item</h2>
        <input
          id='item_name'
          placeholder='item'
          value={props.newItemName}
          type='text'
          onChange={props.handleItemNameChange}
        />

        <input
          id='item_quantity'
          placeholder='quantity'
          value={props.newItemQuantity}
          type='text'
          onChange={props.handleItemQuantityChange}
        />

        <button onClick={props.handleAddOrUpdate}
        >Add / Update</button>
      </div>

    </>
  );
}

export default MainForm;
