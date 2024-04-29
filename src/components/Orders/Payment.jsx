import React from "react";
import Checkoutform from "./Checkoutform";
import { loadStripe } from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const Payment = () => {
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
     
  };
  return (
    <div>
      <Elements stripe={stripePromise} options={options}>
        <Checkoutform />
      </Elements>
    </div>
  );
};

export default Payment;
