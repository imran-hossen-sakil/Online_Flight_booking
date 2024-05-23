// src/components/FlightSearch.js
import React, { useState } from 'react';

const FlightSearch = ({ onSearch }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ from, to, date });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="From" 
                value={from} 
                onChange={e => setFrom(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="To" 
                value={to} 
                onChange={e => setTo(e.target.value)} 
                required 
            />
            <input 
                type="date" 
                value={date} 
                onChange={e => setDate(e.target.value)} 
                required 
            />
            <button type="submit">Search Flights</button>
        </form>
    );
};

export default FlightSearch;
