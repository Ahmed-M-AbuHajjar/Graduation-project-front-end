import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const stripePromise = loadStripe('pk_test_51N89eaK6yKFqarblNot7BTqorvjM1jCjiIuQsZy0kDmKqPJVpPXSyEjhqtE3P0bQcuXvMdA4RHhrNapOXPHVA3Bf00kNhWsmrO');

const PaymentForm = () => {

    const cardElementStyle = {
        base: {
          color: '#32325d',
          backgroundColor: '#fff',
          fontSize: '26px',
        },
      };

  const stripe = useStripe();
  const elements = useElements();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { paymentIntent } = await stripe.createPaymentIntent({
      amount: 100,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    

    const result = await stripe.confirmCardPayment(paymentIntent.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else if (result.paymentIntent.status === 'succeeded') {
      setIsSubmitted(true);
      window.location.href = result.paymentIntent.next_action.redirect_to_url.url;
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <p>Redirecting to your bank's page...</p>
      ) : (
        <form className='paymentForm' onSubmit={handleSubmit}>
          <label>
            Credit card number:
            <CardElement options={{ style: cardElementStyle }} />
          </label>
          <div className='text-center'>
          <button type="submit">Submit Payment</button>
          </div>
        </form>
      )}
    </div>
  );
};

export const Order = () => {
  return (
    <>
        <Header/>
        <div id="main" className="alt">
            <section id="one">
            <div className="inner">
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
      </div>
      </section>
      </div>
      <Footer/>
    </>
  );
};

