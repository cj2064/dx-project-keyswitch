import React, {useContext} from 'react';
import {CartContext} from './CartContext';
import DisplayKeyboard from './DisplayKeyboard';
import KeyboardCard from './KeyboardCard';
import logiGpro from '../logiGpro.jpeg';
import '../styles/ShoppingCart.css';


// TODO: Render specific keyboards
// TODO: Update MongoDB to show keyboards added to cart

function ShoppingCart (props) {
  const [cart, setCart] = useContext (CartContext);
  const totalPrice = cart.reduce ((acc, curr) => acc + curr.price, 0);
  return (
    <div className="ShoppingCart container">
      <h1>Your Cart</h1>
      <h5>Items in cart: {cart.length}</h5>
      <br />
      {/* totalPrice returning Nan for some reason */}
      <h5>Total: $ {totalPrice}</h5>
        <div className="ShoppingCart-card col-md-2">
          <div className="row">
            <div className="card">
              <img src={logiGpro} className="ShoppingCart-card-img" alt="logiGPro img" />
              <div className="card-body">
                <h5 className="card-title">Logitech G Pro</h5>
                <p className="card-text">
                Price: $
                    <span>129.99</span>
                </p>
                <a href="#" className="btn btn-primary btn-dark">Delete Item</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ShoppingCart;
