import React from 'react';
import './cart.css';

const Cart = (props) => {
    const {cart}=props || {}
    let total = 0;
    for (const product of cart) {

        total = total + product.price ;

    }



    return (
        <div className="cart">
      <h1>Cart Summary:</h1>
          <h2>Added Equipments : {cart.length}</h2>
            <h2>Total cost : {total}M $ </h2>
            <ul>
                {
                    cart.map( equiments=> <li>{equiments.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;