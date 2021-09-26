import React from 'react';
import  './equipment.css';

const Vehicle = (props) => {
    const {id,category,name,img,description,topspeed,price}=props.item;
    return (


            <div className="card green">
                <img src={img}/>
                <h3>Name : {name}</h3>
                <h4>Category:{category}</h4>
                <h4>Description: {description.slice(0,80)}</h4>
                <h5>Top Speed:{topspeed}</h5>
                <h4>Price:{price}M $</h4>
                <button className="btn" onClick={()=>props.handleAddtoCart(props.item)}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Add to Cart</button>
                <h4 className="socailicon"><i className="fab fa-instagram"></i> <i className="fab fa-facebook"></i></h4>


        </div>

    );
};

export default Vehicle;