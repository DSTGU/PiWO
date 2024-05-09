import React from 'react';

const HotelDetails = ({ hotel }) => {
  return (
    <section id="hotel-page" className="hotel-page">
      <div id="imgbox" className="hotel-page-imgbox">
        <img className="hotel-page-img" src={hotel.images[0]} alt="hotel"/>
        <p className="chip">Add to favorites</p>
      </div>
      <div id="Subpage" className="hotel-page-info">
        <div id="Details">
          <p><b>Location:</b> {hotel.location}</p>
          <p><b>Local Category:</b> {'★'.repeat(hotel.stars)}</p>
          <p><b>Price:</b> {hotel.price}$/room/night</p>
          <p><b>Descritption:</b><br></br>{hotel.text}</p>
        </div>
        <br />
        <br />
        <div className='hotel-page-btnbox'>
            <button onClick={() => console.log('Contact us')} className="button primary">Contact us ✉</button>
            <div id="Hotel Imagebox" className="hotel-page-info-imgbox">
            {hotel.images.map((image, index) => (
                <img key={index} className="hotel-page-info-img" src={image} alt={`hotel-${index}`} />
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetails;