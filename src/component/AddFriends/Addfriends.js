import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Addfriends.css';
import Friendlist from '../Friendlist/Friendlist';
import Cart from '../Cart/Cart';

const Addfriends = () => {
 
    const first7= fakeData.slice(0,7);
    const [list,setList] = useState(first7);
    const [cart, setCart] = useState([]);
    

const handle = (fl) => {
    console.log("hello",fl);
    const newCart=[...cart,fl]
    setCart(newCart);
}


    return (
        <div className="container">
            <div className="list">
                {
     list.map(lists => <Friendlist
            handle ={handle}
        fl={lists}></Friendlist>)
                }
            </div>
            <div className="cart">
               <Cart cart={cart}></Cart>

            </div>
            </div>
    );
};

export default Addfriends;