// src/App.js
import React, { useState } from 'react';
import FlightSearch from './components/FlightSearch';
import FlightList from './components/FlightList';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import LayoutLandingPage from './layout/LayoutLandingPage';
import Home from './pages/HomePage/Home';
import SearchFlightsAvailable from './pages/SearchFlights/SearchFlightsAvailable';
import AboutPage from './pages/aboutPage/AboutPage';
import ContactPage from './pages/contactPage/ContactPage';
import ServicePage from './pages/ServicePage/ServicePage';
import OffersPage from './pages/offerPage/OffersPage';
import LoginPage from './pages/loginPage/LoginPage';
import RegistrationPage from './pages/registrationPage/RegistrationPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';

const App = () => {
    // const [flights, setFlights] = useState([]);
    // const [bookingDetails, setBookingDetails] = useState(null);

    // const handleSearch = async ({ from, to, date }) => {
    //     try {
    //         const response = await axios.get('http://localhost:4000/api/v1/flight/search', {
    //             params: { from, to, date }
    //         });
    //         setFlights(response.data.combinedItineraries);
    //     } catch (error) {
    //         console.error('Error fetching flights:', error);
    //     }
    // };

    // const handleBook = (details) => {
    //     setBookingDetails(details);
    // };

    return (
    //     <div>
    //         <h1>Flight Booking System</h1>
    //         <FlightSearch onSearch={handleSearch} />
    //         <FlightList flights={flights} onBook={handleBook} />
    //         {bookingDetails && (
    //             <div>
    //                 <h2>Booking Confirmation</h2>
    //                 <p>Thank you for your booking, {bookingDetails.name}!</p>
    //                 <p>We have sent a confirmation email to {bookingDetails.email}.</p>
    //             </div>
    //         )}
    //     </div>


        <Routes>
            <Route path='/' element={<LayoutLandingPage/>}>
                <Route index element={<Home />}/>
                <Route path='/flight/search/q' element={<SearchFlightsAvailable />}/>
                <Route path='/about' element={<AboutPage />}/>
                <Route path='/contact' element={<ContactPage />}/>
                <Route path='/service' element={<ServicePage />}/>
                <Route path='/offers' element={<OffersPage />}/>
                <Route path='/login' element={<LoginPage />}/>
                <Route path='/registration' element={<RegistrationPage />}/>
                <Route path='/details' element={<DetailsPage />}/>
            </Route>
        </Routes>
    )

};

export default App;
