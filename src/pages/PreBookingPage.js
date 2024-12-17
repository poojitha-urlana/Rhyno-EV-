import React from 'react';
import './PreBookingPage.css';
import { useForm } from 'react-hook-form';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import ImageSlider from '../components/ImageSlider';

// Load your Stripe publishable key
const stripePromise = loadStripe('your-publishable-key-here');



function PreBookingForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const stripe = useStripe();
    const elements = useElements();

    const onSubmit = async (data) => {
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                name: data.name,
                email: data.email,
                phone: data.phone,
            },
        });

        if (error) {
            console.error(error);
        } else {
            console.log(paymentMethod);
            // Process the payment or save the pre-booking details to your backend
        }
    };

    return (
        <form className="pre-booking-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
            Name:
            <input type="text" {...register('name', { required: true })} />
            {errors.name && <span>This field is required</span>}
        </label>
        <label>
            Email:
            <input type="email" {...register('email', { required: true })} />
            {errors.email && <span>This field is required</span>}
        </label>
        <label>
            Phone:
            <input type="tel" {...register('phone', { required: true })} />
            {errors.phone && <span>This field is required</span>}
        </label>
        <label>
            Model:
            <select {...register('model', { required: true })}>
                <option value="SE03 Lite">SE03 Lite</option>
                <option value="SE03">SE03</option>
                <option value="SE03 Max">SE03 Max</option>
            </select>
            {errors.model && <span>This field is required</span>}
        </label>
        <label>
            Card details:
            <CardElement />
        </label>
        <button type="submit">Pre-Book Now</button>
    </form>
);
}

function PreBookingPage() {
return (
    <div className="pre-booking-page">
        < ImageSlider />
        <h1>Pre-Book Your Rhyno</h1>

        <p>Fill out the form below to pre-book your Rhyno and be among the first to experience superior riding.</p>
        <Elements stripe={stripePromise}>
            <PreBookingForm />
        </Elements>
    </div>
);
}

export default PreBookingPage;