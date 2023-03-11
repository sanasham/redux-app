import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, clearCart, removeItem } from '../store/cartSlice';

const Employee = () => {
  const [inputValue, setInputValue] = useState(null);
  const cartItems = useSelector((store) => store.cart.items);

  const dispath = useDispatch();

  const handleAddItem = () => {
    console.log('first');
    dispath(addItem(inputValue));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const handleRemoveAllItems = () => {
    dispath(clearCart());
  };
  const handleRemoveItem = (value) => {
    console.log('value in remove item', value);
    dispath(removeItem(value));
  };

  const mystyle = {
    container: {
      display: 'grid',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
    child: {
      display: 'flex',
      margin: '15px',
    },
  };
  const style = { color: 'red', margin: '14px' };
  return (
    <div>
      <input type="text" name="" id="" onChange={(e) => handleChange(e)} />
      <button onClick={() => handleAddItem()} style={style}>
        Increment
      </button>
      <br />
      <button onClick={() => handleRemoveAllItems()} className={style}>
        Clear
      </button>
      <br />
      <div style={mystyle.container}>
        {cartItems?.length >= 0 &&
          cartItems.map((item, i) => (
            <div key={i} style={mystyle.child}>
              <span key={i}>Cart -{item}</span>{' '}
              <button onClick={() => handleRemoveItem(item)}>remove</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Employee;
