import HotelCard from '../Components/HotelCard';
import hotels from '../Data/hotels';
import arrow from '../Assets/Arrow.svg';
import { Link } from 'react-router-dom';

const Browse = () => {
  return (
    <section id="browse" className="browse-section">
      <p className="title-middle">Explore the hotels</p>
      <input className="searchbar" placeholder="Search by hotel name, place etc." />
      <section className="grid hotel-cards">
        {hotels.map((hotel) => (
            <Link to={`/hotel/${hotel.id}`} key={hotel.id}>
                <HotelCard hotel={hotel} />
            </Link>
        ))}
      </section>
      <button className="button secondary">Find more <img src={arrow} alt="arrow" /></button>
    </section>
  );
};

export default Browse;