import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header_class from '../MainPages/Header_class';

function BillingPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { cartItems, totalAmount } = state || { cartItems: [], totalAmount: 0 }; // Default values

  const handlePlaceOrder = () => {
    navigate('/OrderConfirmation', { state: { cartItems, totalAmount } });
  };

  return (
    <div className="container mx-auto p-5">
      <div className='mb-20'>
      <Header_class className=""/>
      </div>
      <h1 className="text-3xl font-bold mb-5">Billing Information</h1>
      <div className="border p-5 rounded-lg shadow-lg mb-5">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center mb-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover mr-3"
            />
            <div>
              <p>{item.name} - Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price * item.quantity}</p>
            </div>
          </div>
        ))}
        <p className="text-xl font-bold">Total Amount: ₹{totalAmount}</p>
      </div>
      <button
        onClick={handlePlaceOrder}
        className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-black"
      >
        Place Order
      </button>
    </div>
  );
}

export default BillingPage;
