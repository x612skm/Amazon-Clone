import React from "react"
import "./Order.css"
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }){
    return(
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:m")}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                    />
            ))}
                             <CurrencyFormat
                                renderText={(value) => (
                                        <h3 className="order_total">Order total : {value} </h3>                                
                                        )} 
                                        decimalScale={2}
                                        value={order.data.amount} // to get the total amount
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"INR "}
                                        />

        </div>
    )
}

export default Order