import '../styles/goods.scss';
import { menusApi, useFetchGoodsQuery } from '../store';
import { store } from '../store';
import { useLoaderData } from 'react-router-dom';
import { categoryData, sortingData } from '../data/goodsData';
import bannerImage from '../assets/product-page-banner.jpg';
import ProductList from '../components/ProductList';
import Dropdown from '../components/Dropdown';

const loader = ({ request }) => {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  const sorting = url.searchParams.get('sorting');
  store.dispatch(menusApi.endpoints.fetchGoods.initiate(category));

  return { category, sorting };
}

function Goods() {
  const { category, sorting } = useLoaderData();
  const { data, isLoading, isError } = useFetchGoodsQuery(category);

  if (isLoading) return 'loading';
  else if (isError) return 'error';

  let newData;
  if (sorting === 'ranking') {
    newData = [...data];
  } else if (sorting === 'low-price') {
    newData = [...data].sort((a, b) => a.price - b.price);
  } else if (sorting === 'high-price') {
    newData = [...data].sort((a, b) => b.price - a.price);
  }

  return <section className='Goods'>
    <Dropdown data={sortingData} />
    <img className='Goods__banner' src={bannerImage} alt='banner' />
    <ProductList data={newData} />
  </section>
}

export default Goods;
export { loader };