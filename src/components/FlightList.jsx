// src/components/FlightList.js
import React, { useState } from 'react';
import BookingForm from './BookingForm';
import './FlightList.css'; // Import CSS file for styling
import moment from 'moment'; // Import moment.js library for date manipulation

const FlightList = ({ flights, onBook }) => {
    const [selectedFlight, setSelectedFlight] = useState(null);

    const handleBook = (flight) => {
        setSelectedFlight(flight);
    };

    // Function to format time to AM/PM format
    const formatTimeToAmPm = (time) => {
        return moment(time).format('h:mm A');
    };

    // Helper function to calculate duration between two times in hours
    const calculateDurationInHours = (startTime, endTime) => {
        const start = moment(startTime);
        const end = moment(endTime);
        return end.diff(start, 'hours');
    };

    return (
        <div className="flight-list-container">
            <h2 className="section-title">Available Flights</h2>
            {flights?.map((flight, index) => (
                <div key={index} className="flight-card">
                    <h3 className="flight-number">Flight #{index + 1}</h3>
                    <div className="flight-details">
                        {flight?.segments.map((segment, segIndex) => (
                            <div key={segIndex}>
                                <p><strong>From:</strong> {segment?.departure?.iataCode}</p>
                                <p><strong>To:</strong> {segment?.arrival?.iataCode}</p>
                                <p><strong>Departure:</strong> {formatTimeToAmPm(segment?.departure?.at)}</p>
                                <p><strong>Arrival:</strong> {formatTimeToAmPm(segment?.arrival?.at)}</p>
                                <p><strong>Duration:</strong> {calculateDurationInHours(segment?.departure?.at, segment?.arrival?.at)} hours</p>
                            </div>
                        ))}
                    </div>
                    <p className="flight-price">Total Price: {flight.currency} {flight.total_price.toFixed(2)}</p>
                    <button className="book-button" onClick={() => handleBook(flight)}>Book this flight</button>
                </div>
            ))}
            {selectedFlight && <BookingForm 
                selectedFlight={selectedFlight} 
                onBook={onBook} 
            />}
        </div>
    );
};

export default FlightList;
