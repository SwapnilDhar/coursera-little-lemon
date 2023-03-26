import React from "react";
import './App.css'
import Header from "./components/Header";
import HighlightsSection from "./components/HomePage/HighlightsSection";
import AboutSection from "./components/HomePage/AboutSection";
import ReserveSection from "./components/BookingPage.js"
import LoginSection from "./components/LoginSection.js"
import {Routes, Route} from 'react-router-dom';
import PaymentSection from './components/PaymentSection';
import ConfmirmedBooking from './components/ConfmirmedBooking';
import Home from './components/HomePage/Home'

function App() {
  return (
      <main className="container">
        <Header/>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/reservations" element={<ReserveSection/>} />
          <Route path="/login" element={<LoginSection/>} />
          <Route path="/pay" element={<PaymentSection/>} />
          <Route path="/bookingconfirmation" element={<ConfmirmedBooking/>}/>
        </Routes>
      </main>
  )
}

export default App;

