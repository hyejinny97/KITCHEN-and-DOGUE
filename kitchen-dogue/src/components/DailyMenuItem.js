import '../styles/dailyMenuItem.scss';
import { Link } from 'react-router-dom';

function DailyMenuItem({ data }) {
  return (
    <div className='DailyMenuItem'>
      <Link to='/'>
        <img className='DailyMenuItem__image' src={data.image} alt={data.name} />
      </Link>
      <div className='DailyMenuItem__content'>
        <p className='DailyMenuItem__desc'>
          <Link to='/'>{data.desc}</Link>
        </p>
        <p className='DailyMenuItem__price'>
          {data.price.toLocaleString()}
          <span className='DailyMenuItem__unit'>원</span>
        </p>
        <h5 className='DailyMenuItem__name'>{data.name}</h5>
      </div>
    </div>
  );
}

export default DailyMenuItem;