import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";
function Product({id,title, image, price, rating}){
    const[{basket}, dispatch] = useStateValue();
    console.log("this is the basket", basket)
    const addToBasket=()=>{
        //dispatch the items into data layer 
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                title: title,
                image: image,
                rating: rating,
                price: price,
            },
        });

    };
    return (
    <div className="Product">
        <div className="Product_info">
            <p>{title}</p>
            <p className='product_price'>
                <small>INR</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating) .fill() .map((_, i)=> (
                    <p>*</p>
                ))}
                
            </div>
        </div>

        {/*projects description*/} 
        <img className="product_image"
            src={image} alt="" />
            <button onClick={addToBasket} className="basket_button">Add to basket</button>
    </div>
    );
}

export default Product;