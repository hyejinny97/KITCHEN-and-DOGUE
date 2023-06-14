import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react'
import '../styles/subHeroSlider.scss';
import subHeroSliderData from '../data/subHeroSliderData'
import Slider from './Slider';

function SubHeroSlider() {
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

  const data = subHeroSliderData;

  const config = {
    renderContent: (data) => {
      return (
        <Link className='SubHeroSlider__slide-link' to={data.link}>
          <img className='SubHeroSlider__slide-image' src={data.image} alt={data.label} />
        </Link>
      );
    },
    controllerPrev: {
      render: () => {
          return (
            <IoIosArrowBack className="SubHeroSlider__slide-controller SubHeroSlider__slide-controller--prev" />
          )
      },
      style: { left: '1rem' }
    },
    controllerNext: {
      render: () => {
        return (
          <IoIosArrowForward className="SubHeroSlider__slide-controller SubHeroSlider__slide-controller--next" />
        );
      },
      style: { right: '1rem' }
    },
  }

  return <div className='SubHeroSlider'>
    <Slider data={data} config={config} slidesPerPage={slidesPerPage} sliding infinite/>
    </div>
}

export default SubHeroSlider;