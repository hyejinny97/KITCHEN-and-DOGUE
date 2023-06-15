import '../styles/homeMenuItem.scss';
import { Link } from 'react-router-dom';

function HomeMenuItem({ data }) {
  return (
    <div className='HomeMenuItem'>
      <Link to='/'>
        <img className='HomeMenuItem__image' src={data.image} alt={data.name} />
        <h5 className='HomeMenuItem__name'>{data.name}</h5>
      </Link>
      <p className='HomeMenuItem__price'>
        {data.price.toLocaleString()}<span className='HomeMenuItem__unit'>원</span>
      </p>
      <p className='HomeMenuItem__desc'>{data.desc}</p>
    </div>
  );
}

export default HomeMenuItem;