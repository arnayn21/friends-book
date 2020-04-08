import React from 'react';

const Cart = (props) => {
    const cart =props.cart;

   // const total = cart.reduce((total,prd)=>total+prd.salary,0);



let total =0;
for(let i=0;i<cart.length;i++){
    const s = cart[i];
    total= (total - s.salary) ;
}
    return (
        <div>
             <h1>Friends</h1>
                <h3>Added Friends : {cart.length} </h3>
                <h3> Total Salary : {total*-1} </h3>
        </div>
    );
};

export default Cart;