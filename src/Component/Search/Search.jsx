import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import { GoArrowSwitch } from "react-icons/go";

import axios from 'axios';

import { useEffect } from "react";
import { useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";


function Search() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  const [view, setView] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [travellers, setTravellers] = useState('');
  const [resFlights, setResFlights] = useState([]);

  const [fromError, setFromError] = useState('');
  const [toError, setToError] = useState('');
  const [checkInError, setCheckInError] = useState('');
  const [travellersError, setTravellersError] = useState('');

  const fromOptions = ['Chennai', 'Madurai', 'Trichy'];
  const toOptions = ['Chennai', 'Madurai', 'Trichy'];


  const handleFromChange = (selectedFrom) => {
    if (selectedFrom !== '') {
      setFrom(selectedFrom);
      setFromError('');
    } else {
      setFrom('');
      setFromError('Please select a valid "FROM" location.');
    }
  };

  const handleToChange = (selectedTo) => {
    if (selectedTo !== '') {
      setTo(selectedTo);
      setToError('');
    } else {
      setTo('');
      setToError('Please select a valid "TO" location.');
    }
  };

  const handleCheckInChange = (selectedDate) => {
    const currentDate = new Date();
    const selectedDateObj = new Date(selectedDate);
    if (selectedDateObj >= currentDate) {
      setCheckIn(selectedDate);
      setCheckInError('');
    } else {
      setCheckIn('');
      setCheckInError('Check In date cannot be in the past.');
    }
  };

  const handleTravellersChange = (selectedTravellers) => {
    const selectedTravellersNumber = parseInt(selectedTravellers, 10);
    if (selectedTravellersNumber >= 1) {
      setTravellers(selectedTravellersNumber);
      setTravellersError('');
    } else {
      setTravellers('');
      setTravellersError('Number of travellers cannot be less than 1.');
    }
  };

  const areAllFieldsFilled = from && to && checkIn && travellers;
  const areFromAndToDifferent = from !== to;
  const isSearchButtonDisabled = fromError || toError || checkInError || travellersError || !areAllFieldsFilled || !areFromAndToDifferent;
  const handleSearch = async () => {
    try {
      const request = {
        "from": from,
        "to": to,
        "checkIn": checkIn,
        "travellers": travellers
      };
      const response = await axios.post('https://flight-ticket-booking-nikh.onrender.com/flights', request)
      setResFlights(response.data);
      console.log(resFlights);
      setView(true);
    }
    catch (error) {
      console.error('Error:', error);
      alert("Error in search");
    }
  };

  const initPayment = (data)=>{
    const options = {
      key:"rzp_test_H2dNtLFiIqoQui",
      amount:data.amount,
      currency:data.currency,
      order_id:data.id,
      handler:async (response)=>{
        try{
          const verifyUrl = "https://flight-ticket-booking-nikh.onrender.com/verify";
          const {data} = await axios.post(verifyUrl,response);
          console.log(data);
        }catch(err){
          console.log(err)
        }
      },
      theme:{
        color:"#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePremium = async(n,cost)=>{
    try{
      const orderUrl = "https://flight-ticket-booking-nikh.onrender.com/orders";
      let total = parseInt(n)*parseInt(cost);
      const {data} = await axios.post(orderUrl,{amount:total});
      console.log(data);
      initPayment(data.data);
    }catch(error){
      console.log(error);
    }
  }

  const handleEconomy = async(n,cost)=>{
    try{
      const orderUrl = "https://flight-ticket-booking-nikh.onrender.com/orders";
      let total = parseInt(n)*parseInt(cost);
      const {data} = await axios.post(orderUrl,{amount:total});
      console.log(data);
      initPayment(data.data);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="search container section">
      <div className="sectionContainer grid">

        <div data-aos="fade-up" data-aos-duration="2500" className="btns flex">

          <div className="singleBtn">
            <span>Economy</span>
          </div>

          <div className="singleBtn">
            <span>Business Class</span>
          </div>

          <div className="singleBtn">
            <span>First Class</span>
          </div>

        </div>

        <div data-aos="fade-up" data-aos-duration="2500" className="searchInputs flex">

          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>FROM</h4>
              <select value={from} onChange={(e) => handleFromChange(e.target.value)} className="select">
              <option value="">Select From</option>
              {fromOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {fromError && <p style={{ color: 'red' }}>{fromError}</p>}
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>TO</h4>
              <select value={to} onChange={(e) => handleToChange(e.target.value)} className="select">
              <option value="">Select To</option>
              {toOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {toError && <p style={{ color: 'red' }}>{toError}</p>}
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>CHECK IN</h4>
              <input type="date" placeholder="Add date" onChange={(e) => handleCheckInChange(e.target.value)} />
              {checkInError && <p style={{ color: 'red' }}>{checkInError}</p>}
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>TRAVELLERS</h4>
              <input type="number" placeholder="Add guests" onChange={(e) => handleTravellersChange(e.target.value)} />
              {travellersError && <p style={{ color: 'red' }}>{travellersError}</p>}
            </div>
          </div>

          <button className="btn btnBlock flex" onClick={() => handleSearch()} disabled={isSearchButtonDisabled}>Search Flights</button>

        </div>

        {
          view && resFlights.length>0 && (

            <div className="resultDiv">
              <h3>DIRECT FLIGHTS</h3>

              {resFlights.map((flight, index) => (
                <div key={index} className="singleFlight">
                  <div className="arrival">
                    <h3>{flight.airline}</h3>
                  </div>
                  <div className="arrival">
                    <h3>{flight.from}</h3>
                    <h5>{flight.date}</h5>
                    <h6>{flight.start}</h6>
                  </div>
                  <div className="arrival">
                    <GoArrowSwitch className="icon" />
                    <h5>{flight.duration}</h5>
                  </div>
                  <div className="arrival">
                    <h3>{flight.to}</h3>
                    <h5>{flight.date}</h5>
                    <h6>{flight.end}</h6>
                  </div>
                  <button className="btn styled-btn" onClick={()=>handlePremium(travellers,flight.premium)}>
                    <h3>PREMIUM</h3>
                    <h5>{parseInt(travellers)*parseInt(flight.premium)}</h5>
                  </button>
                  <button className="btn styled-btn" onClick={()=>handleEconomy(travellers,flight.economy)}>
                    <h3>ECONOMY</h3>
                    <h5>{parseInt(travellers)*parseInt(flight.economy)}</h5>
                  </button>
                </div>
              ))}
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Search
