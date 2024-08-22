import React, { useState } from "react";
import "../css/PaymentDetails.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PaymentDetails = () => {
  const [amount, setAmount] = useState(0);
  const [recipient, setRecipient] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [currency,setCurrency] = useState('usd')
  const navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://stripe-intent-mauve.vercel.app/create-payment-intent",
        {
          amount:amount,
          currency:currency, 
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Extract clientSecret from backend response
      const { clientSecret } = data;
      //these all query parameters are taken to the payment within url, now I can use useParams() to extract them in the PaymentDetails.jsx
      navigate(`/payment?amount=${amount}&currency=${currency}&recipient=${recipient}&description=${description}&category=${category}&clientSecret=${clientSecret}`);
    } catch (err) {
      console.error(err.message);
    }
    
  }
  return (
    <div className="payment">
      <div className="payment-details">
        <h1>Payment Details</h1>
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor='amount'>Enter the amount</label>
          <input
            id='amount'
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Amount in cents"
            required
          />
           <label htmlFor='recipient'>Enter the recipient User ID</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Recipient Email or ID"
            required
          />
          <label htmlFor='currency'>Enter the recipient currency</label>
          <input
            type="text"
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            placeholder="Currency"
            required
          />
           <label htmlFor='description'>Enter the description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (e.g., Stationary)"
            required
          />
           <label htmlFor='category'>Enter the category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category (e.g., Daily Goods)"
            required
          />
          <button type="submit">Proceed to Pay</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;
