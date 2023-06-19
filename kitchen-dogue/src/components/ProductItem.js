import '../styles/productItem.scss';
import { Link } from 'react-router-dom';

function ProductItem({ data, display }) {
  return <div className={`ProductItem ProductItem--${display}`}>
    <Link to='/'>
      <img className='ProductItem__image' src={data.image} alt={data.name} />
    </Link>
    <div className='ProductItem__content'>
      <Link to='/'>
        <h5 className='ProductItem__name'>{data.name}</h5>
      </Link>
      <p className='ProductItem__desc'>{data.desc}</p>
      <p className='ProductItem__price'>
        {data.price.toLocaleString()}
        <span className='ProductItem__unit'>원</span>
      </p>
    </div>
  </div>
}

export default ProductItem;