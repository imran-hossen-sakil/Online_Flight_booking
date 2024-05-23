// src/components/BookingForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ selectedFlight, onBook }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passport, setPassport] = useState('');

    const handleBook = async () => {
        const bookingDetails = { name, email, passport, flight: selectedFlight };
        
        const orderData = {
            payment_method: 'bacs',
            payment_method_title: 'Direct Bank Transfer',
            set_paid: false,
            billing: {
                first_name: name,
                last_name: '',
                address_1: '',
                address_2: '',
                city: '',
                state: '',
                postcode: '',
                country: '',
                email: email,
                phone: ''
            },
            shipping: {
                first_name: name,
                last_name: '',
                address_1: '',
                address_2: '',
                city: '',
                state: '',
                postcode: '',
                country: ''
            },
            line_items: [
                {
                    product_id: '123', // ID of a WooCommerce product created for flight bookings
                    quantity: 1,
                    total: selectedFlight.total_price.toFixed(2)
                }
            ],
            meta_data: [
                {
                    key: 'passport_number',
                    value: passport
                },
                {
                    key: 'flight_details',
                    value: JSON.stringify(selectedFlight)
                }
            ]
        };

        try {
            const response = await axios.post('https://your-wordpress-site.com/wp-json/wc/v3/orders', orderData, {
                auth: {
                    username: 'ck_your_consumer_key',
                    password: 'cs_your_consumer_secret'
                }
            });
            console.log('Order created:', response.data);
            onBook(bookingDetails);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <div>
            <h2>Booking Form</h2>
            <div>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Passport Number" 
                    value={passport} 
                    onChange={e => setPassport(e.target.value)} 
                />
                <button onClick={handleBook}>Book</button>
            </div>
        </div>
    );
};

export default BookingForm;