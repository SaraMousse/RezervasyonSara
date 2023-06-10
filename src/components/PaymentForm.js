import React, { useState } from 'react';
import './PaymentForm.css'

const PaymentForm = ({ selectedFlight, onPaymentFlight }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ödeme işlemini gerçekleştir
    // Kart bilgileriyle bir API çağrısı yapabilir veya başka bir ödeme işlemi gerçekleştirebilirsiniz
    onPaymentFlight();
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <label htmlFor="cardNumber">Kart Numarası:</label>
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
      />

      <label htmlFor="cardHolder">Kart Sahibi:</label>
      <input
        type="text"
        id="cardHolder"
        value={cardHolder}
        onChange={(e) => setCardHolder(e.target.value)}
        required
      />

      <label htmlFor="expiryDate">Son Kullanma Tarihi:</label>
      <input
        type="text"
        id="expiryDate"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        required
      />

      <label htmlFor="cvv">CVV:</label>
      <input
        type="text"
        id="cvv"
        value={cvv}
        onChange={(e) => setCVV(e.target.value)}
        required
      />

      <p>Seçilen Uçuş:</p>
      <p>Kalkış Şehri: {selectedFlight.origin}</p>
      <p>Varış Şehri: {selectedFlight.destination}</p>
      <p>Gidiş Tarihi: {selectedFlight.departureDate}</p>
      <p>Dönüş Tarihi: {selectedFlight.returnDate}</p>
      <p>Havayolu Şirketi: {selectedFlight.airline}</p>
      <p>Fiyat: {selectedFlight.price}</p>

      <button type="submit">Ödemeyi Tamamla</button>
    </form>
  );
};

export default PaymentForm;
