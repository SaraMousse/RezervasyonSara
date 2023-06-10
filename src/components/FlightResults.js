import React from 'react';
import './FlightResults.css';

const FlightResults = ({ searchResults, onSelectFlight }) => {
  return (
    <div className="flight-results">
      <h2>Uçuş Sonuçları</h2>
      {searchResults.length === 0 ? (
        <p>Uygun uçuş bulunamadı.</p>
      ) : (
        <ul>
          {searchResults.map((flight) => (
            <li key={flight.id}>
              <div>
                <strong>Kalkış:</strong> {flight.origin}
              </div>
              <div>
                <strong>Varış:</strong> {flight.destination}
              </div>
              <div>
                <strong>Gidiş Tarihi:</strong> {flight.departureDate}
              </div>
              <div>
                <strong>Gidiş Saati:</strong> {flight.departureTime}
              </div>
              <div>
                <strong>Dönüş Tarihi:</strong> {flight.returnDate}
              </div>
              <div>
                <strong>Dönüş Saati:</strong> {flight.returnTime}
              </div>
              <div>
                <strong>Havayolu Şirketi:</strong> {flight.airline}
              </div>
              <div className="flight-price">
                <strong>Fiyat:</strong> {flight.price} TL
              </div>
              <button onClick={() => onSelectFlight(flight)} >Ödeme Sayfasına Git</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FlightResults;
