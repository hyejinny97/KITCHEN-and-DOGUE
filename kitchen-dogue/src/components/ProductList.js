import '../styles/productList.scss';
import ProductItem from './ProductItem';

function ProductList({ data }) {
  const renderItem = data.map(item => {
    return <ProductItem key={item.id} data={item} />
  });

  return <div className='ProductList'>{renderItem}</div>
}

export default ProductList;