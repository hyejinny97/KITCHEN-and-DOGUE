import '../styles/specialMenu.scss';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useFetchSpecialMenuQuery } from '../store';
import { useState, useEffect } from 'react';
import HomeMenuItem from './HomeMenuItem';
import Slider from './Slider'

function SpecialMenu() {
  const { data, isLoading, isError } = useFetchSpecialMenuQuery();
  const [slidesPerPage, setSlidesPerPage] = useState(-1);

  useEffect(() => {
    const handleSlidesPerPage = () => {
      if (window.innerWidth > 992) return setSlidesPerPage(3);
      else if (window.innerWidth > 576) return setSlidesPerPage(2);
      else return setSlidesPerPage(1);
    }
    handleSlidesPerPage();

    window.addEventListener('resize', handleSlidesPerPage);
    return () => window.removeEventListener('resize', handleSlidesPerPage);
  }, []);

  if (isLoading) return 'loading...';
  else if (isError) return 'error...';

  const config = {
    renderContent: (data) => {
      return (
        <div className='SpecialMenu__slide'>
          <HomeMenuItem data={data} />
        </div>
      );
    },
    controllerPrev: {
      render: () => {
        return (
          <IoIosArrowBack className="SpecialMenu__slide-controller SpecialMenu__slide-controller--prev" />
        )
      },
      renderInactive: () => {
        return (
          <IoIosArrowBack className="SpecialMenu__slide-controller SpecialMenu__slide-controller--inactive" />
        )
      },
      style: { left: '-1.5rem' }
    },
    controllerNext: {
      render: () => {
        return (
          <IoIosArrowForward className="SpecialMenu__slide-controller SpecialMenu__slide-controller--next" />
        );
      },
      renderInactive: () => {
        return (
          <IoIosArrowForward className="SpecialMenu__slide-controller SpecialMenu__slide-controller--inactive" />
        )
      },
      style: { right: '-1.5rem' }
    },
  }

  return <section className='SpecialMenu'>
    <h1 className='SpecialMenu__title'>
      SPECIAL <span className='SpecialMenu__title--bold'>MENU</span>
    </h1>
    <div className='SpecialMenu__list'>
      <Slider data={data} config={config} slidesPerPage={slidesPerPage} sliding ending />
    </div>
  </section>
}

export default SpecialMenu;