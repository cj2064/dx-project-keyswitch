import React, { useContext } from 'react'
import { CartContext } from './CartContext';

function ShoppingCart(props) {
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    return (
        <div className="ShoppingCart">
            <h1>Your Cart</h1>
            <span>Items in cart: {cart.length}</span>
            <br />
            {/* totalPrice returning Nan for some reason */}
            <span>Total: $ {totalPrice}</span>
        </div>
    )
}

export default ShoppingCart
