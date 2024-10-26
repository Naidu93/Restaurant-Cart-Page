import React from 'react'

const Quantity = ({ quantity, id, handleClick }) => {
    return (
        <div>
            <button onClick={() => handleClick(id, -1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleClick(id, +1)}>+</button>
        </div>
    )
}

export default Quantity