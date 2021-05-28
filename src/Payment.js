import React, { useEffect, useState } from "react";
import './Payment.css';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link, useHistory, withRouter} from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios';
import { History } from "@material-ui/icons";
import {db} from "./firebase";

function Payment() {
    const [{basket,user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();


    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    //stripe snippet
    useEffect(() =>{
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expects the total in a currencies submits
                url: `/payments/create?total=${getBasketTotal(basket) * 1}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handelSubmit = async(event) => {
        //fancy stripe stuff
        event.preventDefault();
        setProcessing(true);
        //here the magic of stripe
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=> { //we have to destructure it that is why the curly braces  
            //paymentIntent = Payment confirmantion

            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                basket:basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type:'EMPTY_BASKET'
            })

            history.replace('/orders') // this is becuase we dont want to agian switch to the payment page thats wh not ipush
            //without the window key the history will freak out that why 
            //{/*window.history.replace*/}
        }) 
        //const payload = await stripe
    }

    const handelChange = event => {
        //listen the changes in the cardElements
        //disply any errors as the customer types their card details wrong
        setDisabled(event.empty);
        setError(event.error? event.error.message : "");


    }

    return (
        
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout (<Link to="checkout">{basket?.length} items</Link>) 
                </h1>
                {/*payment section - delivery address */}
                <div className='payment_section'>
                    <div className='payment-title'>
                        <h3>Delivery Address </h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 react lane</p>
                    </div>
                </div>
                {/*payment section - review item */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items' >
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

                {/*payment section - Payment method */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        {/*stripe magic*/}

                            <form onSubmit = {handelSubmit}>
                                <CardElement onChange={handelChange}/>
                                <div className = 'payment_priceContainer'>
                               <CurrencyFormat
                                renderText={(value) => (
                                        <h3>Order total : {value} </h3>                                
                                        )} 
                                        decimalScale={2}
                                        value={getBasketTotal(basket)} // to get the total amount
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"INR"}
                                        />

                                        <button disabled={processing || disabled || succeeded}>
                                            <span>{processing ? <p>Processing</p> : "BUy NoW" }</span>
                                            </button>
                                            </div>
                                            {/*I there is error*/}
                                {               error && <div>{error}</div>}
                                    </form>

                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Payment