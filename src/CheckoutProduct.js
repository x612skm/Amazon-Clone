import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider";
function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket=() => {
        //remove item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='CheckoutProduct'>
            <img className='checkoutProduct_image' src={image} />
        
            <div className='checkoutProduct__info'>
                <p className ='checkoutProduct__title'><strong>{title}</strong></p>
                <p className='checkout_price'>
                    <small>INR</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>*</p>
                    ))}
                </div>
                {!hideButton && (

               
                <button onClick={removeFromBasket}>remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct