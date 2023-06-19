import { AiOutlineHome } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";
import '../styles/goods.scss';
import { useState } from 'react';
import { categoryData, sortingData } from '../data/goodsData';
import { menusApi, useFetchGoodsQuery } from '../store';
import { store } from '../store';
import { useSearchParams, Form, Link } from 'react-router-dom';
import bannerImage from '../assets/product-page-banner.jpg';
import ProductList from '../components/ProductList';
import Dropdown from '../components/Dropdown';

const loader = ({ request }) => {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  store.dispatch(menusApi.endpoints.fetchGoods.initiate(category));

  return null;
}

function Goods() {
  const [display, setDisplay] = useState('lattice');
  let [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const sorting = searchParams.get('sorting');

  const { data, isLoading, isError } = useFetchGoodsQuery(category);

  if (isLoading) return 'loading';
  else if (isError) return 'error';

  const handleSorting = function (e) {
    searchParams.set('sorting', e.target.dataset?.value || e.target.value);
    setSearchParams(searchParams);
  }

  const handleCategory = function (e) {
    searchParams.set('category', e.target.value);
    setSearchParams(searchParams);
  }

  let newData;
  if (sorting === 'ranking') {
    newData = [...data];
  } else if (sorting === 'low-price') {
    newData = [...data].sort((a, b) => a.price - b.price);
  } else if (sorting === 'high-price') {
    newData = [...data].sort((a, b) => b.price - a.price);
  }

  return <section className='Goods'>
    <img className='Goods__banner' src={bannerImage} alt='banner' />
    <div className="Goods__breadcrumb">
      <Link to='/'>
        <AiOutlineHome className="Goods__icon--home" />
      </Link>
      <FaGreaterThan className="Goods__icon--greater" />
      <Form className='Goods__form Goods__form--category' onChange={handleCategory}>
        <Dropdown name='category' data={categoryData} curValue={category} />
      </Form>
    </div>
    <div className="Goods__arrange">
      <div className="Goods__arrange-left">
        <p className="Goods__data-length">
          {data.length}<span className="Goods__data-length--unit">개</span>
        </p>
        <ul className="Goods__sorting-list">
          {sortingData.map(option => {
            return (
              <li key={option.label} data-value={option.value} onClick={handleSorting} className={sorting === option.value && 'active'}>
                {option.label}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="Goods__arrange-right">
        <Form className='Goods__form Goods__form--sorting' onChange={handleSorting}>
          <Dropdown name='sorting' data={sortingData} curValue={sorting} />
        </Form>
        <Form className='Goods__display' onChange={(e) => setDisplay(e.target.value)}>
          <input type='radio' id='lattice' name='display' value='lattice' defaultChecked />
          <label htmlFor='lattice'></label>
          <input type='radio' id='list' name='display' value='list' />
          <label htmlFor='list'> </label>
        </Form>
      </div>
    </div>
    <ProductList data={newData} display={display} />
  </section>
}

export default Goods;
export { loader };