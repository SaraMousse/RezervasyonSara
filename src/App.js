import React, { useState, useEffect } from 'react';
import FlightSearchForm from './components/FlightSearchForm';
import FlightResults from './components/FlightResults';
import PaymentForm from './components/PaymentForm';
import flightsData from './data/flights.json';
import './App.css'

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleSearch = (origin, destination, departureDate, returnDate, airline) => {
    const filteredFlights = flightsData.filter(
      (flight) =>
        flight.origin === origin &&
        flight.destination === destination &&
        flight.departureDate === departureDate &&
        flight.returnDate === returnDate &&
        flight.airline === airline
    );
    setSearchResults(filteredFlights);
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlight(flight);
  };

  const handlePaymentFlight = () => {

  };

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <div className="container">
      <h1 className="title">Uçak Rezervasyon Web Sitesi</h1>
      <FlightSearchForm onSearch={handleSearch} />
      {searchResults && (
        <FlightResults searchResults={searchResults} onSelectFlight={handleSelectFlight} />
      )}
      {selectedFlight && (
        <PaymentForm selectedFlight={selectedFlight} onPaymentFlight={handlePaymentFlight} />
      )}
    </div>
  );
};

export default App;

