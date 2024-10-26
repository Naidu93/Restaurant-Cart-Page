import React, { useState } from 'react'
import Label from './Label'
import Quantity from './Quantity'


const cartItems = [
    {
        id: 1,
        label: "Biryani",
        price: 160,
        quantity: 0
    },
    {
        id: 2,
        label: "Paneer",
        price: 120,
        quantity: 0
    },
    {
        id: 3,
        label: "Ice Cream",
        price: 100,
        quantity: 0
    }

]

const Cart = () => {

    const [cart, setCart] = useState(cartItems)

    let totalAmount = cart.reduce((bag, item) => {
        return bag = bag + (item.price * item.quantity)
    }, 0)

    const handleClick = (id, value) => {

        // console.log(id, value, "got clicked")
        const cpyCarItems = [...cart];

        let newItems = cpyCarItems.map((item) => {
            let newQuantity = item.quantity + value;
            newQuantity = newQuantity > 0 ? newQuantity : 0;

            return item.id === id ? { ...item, quantity: newQuantity } : item
        })

        setCart(newItems);
        console.log(newItems, value, id);
    }

    return (
        <div>
            {
                cart.map((item) => {
                    return (
                        <>
                            <div style={{ width: "300px", display: "flex", justifyContent: "space-between" }}>

                                <Label label={item.label} price={item.price} />
                                <Quantity quantity={item.quantity} {...item} handleClick={handleClick} />


                            </div>
                        </>
                    )

                })

            }
            <h3>Total Price : {totalAmount}</h3>
        </div >
    )
}

export default Cart