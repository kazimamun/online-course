import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    const cartStyle={
        border:'1px solid red',
        marginLeft:'5px'
    };
    return (
        <div>
            <h5>Your Courses:</h5>
            <p>Course Taken : {cart.length}</p>
            {
                cart.map(course=><div style={cartStyle}>
                                    <p><small>Name: {course.name}</small></p>
                                    <p><small>Price: ${course.price}</small></p>
                                </div>)
            }
            <p>Total Price: ${totalPrice}</p>
        </div>
    );
};

export default Cart;