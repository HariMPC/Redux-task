// CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity,deacreaseQuantity } from '../reduxaction/reduxAction';
import './CartPage.css'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(deacreaseQuantity(itemId));
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
     <div>
        <div >
        <h2>CART PAGE</h2>
        <ul className='total' >
            <li>Total Quantity: {totalQuantity}</li>
            <li>Total Amount: ${totalAmount.toFixed(2)}</li>
        </ul>
      </div>
      <div className='container'>
      
      {cartItems.map((item) => (
        <div >
          <div key={item.id} className='cartitems'>
          <div className='content'>
          <p className='cartitem'>Title: {item.title}</p>
          <p className='cartitem'>Price: ${item.price}</p>
          <p className='cartitem'>Quantity: {item.quantity}</p>
          <div className='btn'>
          <button onClick={() => handleIncreaseQuantity(item.id)} className='button'>Increase</button>
          <button onClick={() => handleDecreaseQuantity(item.id)} className='button'>Decrease</button>
          </div>
          </div>
        </div>
        </div>
      ))}
      </div>
     </div>
   
  );
};

export default Cart;