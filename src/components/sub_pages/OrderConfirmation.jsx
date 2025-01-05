import React from 'react';
import { useLocation } from 'react-router-dom';
import Header_class from '../MainPages/Header_class';

function OrderConfirmation() {
  const { state } = useLocation();
  const { cartItems, totalAmount } = state;

  return (
    <div className="container mx-auto  p-5">
      <div className='mb-20'>
        <Header_class/>
      </div>
      <h1 className="text-3xl font-bold mb-5">Order Confirmation</h1>
      <p className="text-xl mb-5">Thank you for your order! Here are your order details:</p>
      <div className="border p-5 rounded-lg shadow-lg">
        {cartItems.map((item) => (
          <div key={item.id} className="mb-3">
            <p>{item.name} - Quantity: {item.quantity} - Price: ₹{item.price * item.quantity}</p>
          </div>
        ))}
        <p className="text-xl font-bold">Total Amount Paid: ₹{totalAmount}</p>
      </div>
    </div>
  );
}

export default OrderConfirmation;
