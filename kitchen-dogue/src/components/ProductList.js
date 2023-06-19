import '../styles/productList.scss';
import ProductItem from './ProductItem';

function ProductList({ data, display }) {
  const renderItem = data.map(item => {
    return <ProductItem key={item.id} data={item} display={display} />
  });

  return (
    <div className={`ProductList ProductList--${display}`}>
      {renderItem}
    </div>
  );
}

export default ProductList;