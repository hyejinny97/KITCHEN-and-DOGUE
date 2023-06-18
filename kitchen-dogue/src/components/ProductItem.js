import '../styles/productItem.scss';
import { Link } from 'react-router-dom';

function ProductItem({ data }) {
  return <div className='ProductItem'>
    <Link to='/'>
      <img className='ProductItem__image' src={data.image} alt={data.name} />
    </Link>
    <Link to='/'>
      <h5 className='ProductItem__name'>{data.name}</h5>
    </Link>
    <p className='ProductItem__desc'>{data.desc}</p>
    <p className='ProductItem__price'>
      {data.price.toLocaleString()}
      <span className='ProductItem__unit'>원</span>
    </p>
  </div>
}

export default ProductItem;