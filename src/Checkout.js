import React from "react";
import './Checkout.css'
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";

function Checkout()
{
    const[{basket, user}, dispatch] = useStateValue();
    return (
    <div className="checkout">
       <div className="checkout_left">
           <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" alt=""/>
            <div>
                <h3>hello, {user?.email}</h3>
                <h2 className="checkout_title">
                    Your shopping basket
                    {/*backetitem*/}
                    {/*checkoutporduct*/}
                </h2>
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />

                ))}
            </div>
        </div>
       <div className="checkout_right">
           <Subtotal />
       </div>
    </div>
   
    );
}

export default Checkout;