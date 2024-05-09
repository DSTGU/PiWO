import React, { useEffect, useState } from 'react';
import HotelDetails from './HotelDetails';
import hotels from '../Data/hotels';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HotelPage = () => {
  //const { hotelId } = useParams();
  //const [hotel, setHotel] = useState(null);

  const { hotelId } = useParams();
  const hotel = hotels.find(hotel => hotel.id === parseInt(hotelId));

  if (!hotel) return <div>Loading...</div>;

  return (
    <div className='hotel-page-container'>
        <div id="header" className='hotel-page-header'>
            <Link to={`/`}>
                <button className='button'>Back</button>
            </Link>

            <p className="title-middle">{hotel.name}</p>
        </div>
        <HotelDetails hotel={hotel} />
    </div>
  );
};

export default HotelPage;