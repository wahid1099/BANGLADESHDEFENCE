import React, {useState,useEffect} from 'react';
import './equipment.css';
import Vehicle from "./Vehicle";
import Cart from "../Cart/Cart";
const Equipment = () => {

    const [state,setState]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('./data.JSOn')
            .then(res=>res.json())
            .then(data=>setState(data))
    },[])
    const handleAdtocart=(equiments)=>{

        const newcart=[...cart,equiments];
        setCart(newcart);
    }
    return (
        <div className="equiments">

            <div className="vehicle">
                {state.map(items=><Vehicle
                key={state.id}
                item={items}
                handleAddtoCart={handleAdtocart}

                ></Vehicle>)}

            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Equipment;