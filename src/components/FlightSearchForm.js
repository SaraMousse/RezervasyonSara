import React, { useState } from 'react';
import flightsData from '../data/flights.json';
import './FlightSearchForm.css';

const FlightSearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [airline, setAirline] = useState('');

  const originOptions = [...new Set(flightsData.map((flight) => flight.origin))];
  const destinationOptions = [...new Set(flightsData.map((flight) => flight.destination))];
  const airlines = [...new Set(flightsData.map((flight) => flight.airline))];
  

  async function handleSearch(e) {
    e.preventDefault();
    // Arama işlemini gerçekleştir
    onSearch(origin, destination, departureDate, returnDate, airline);
  }

  return (
    <div className="flight-search-form">
      <h2>Uçuş Arama</h2>
      <form onSubmit={handleSearch}>
        <label htmlFor="origin">Nereden:</label>

        <select id="origin" value={origin} onChange={(e) => setOrigin(e.target.value)}>
          <option value="">Seçiniz</option>
          {originOptions.map((originOption, index) => (
            <option value={originOption} key={index}>
              {originOption}
            </option>
          ))}
        </select>


        <label htmlFor="destination">Nereye:</label>
        <select
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Seçiniz</option>
          {destinationOptions.map((destinationOption, index) => (
            <option value={destinationOption} key={index}>
              {destinationOption}
            </option>
          ))}
        </select>

        <label htmlFor="departureDate">Gidiş Tarihi:</label>
        <input
          type="date"
          id="departureDate"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          required
        />

        <label htmlFor="returnDate">Dönüş Tarihi:</label>
        <input
          type="date"
          id="returnDate"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          required
        />

        <label htmlFor="airline">Havayolu:</label>
        <select id="airline" value={airline} onChange={(e) => setAirline(e.target.value)}>
          <option value="">Seçiniz</option>
          {airlines.map((airline, index) => (
            <option value={airline} key={index}>
              {airline}
            </option>
          ))}
        </select>


        <button type="submit">Ara</button>
      </form>
    </div>
  );
};

export default FlightSearchForm;
