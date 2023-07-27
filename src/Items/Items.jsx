import React from "react";
import style from '../Items/Items.css'
const Items = ({items ,AddFunction})=>{

    
    return(
        <>

        {
                    items.map((item,idx)=>(
                    <div key={idx} className="shop-item">
                    <img src={item.image} alt="Item" />
                    <h4>{item.name}</h4>
                    <span><p>EGP</p><h4>{item.oldPrice*(100-item.offer)/100}</h4></span>
                    <span><h5>{item.oldPrice}</h5><p>{item.offer}%</p></span>
                    <button onClick={() => AddFunction(item, idx)}>Add To Cart</button>
                    </div>
                    ))
        } 
        </>
    );
}

export default Items;