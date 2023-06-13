import heroData from '../data/hero-slider-data';
import '../styles/hero-slider.scss';
import Slider from './Slider';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function HeroSlider() {
  const data = heroData;

  const config = {
    renderContent: (data) => {
      return (
        <img className="HeroSlider__slide-image" src={data.image} alt="banner" />
      );
    },
    controllerPrev: {
      render: () => {
        return (
          <IoIosArrowBack className="HeroSlider__slide-controller HeroSlider__slide-controller--prev" />
        );
      },
      style: { left: '1rem' }
    },
    controllerNext: {
      render: () => {
        return (
          <IoIosArrowForward className="HeroSlider__slide-controller HeroSlider__slide-controller--next" />
        );
      },
      style: { right: '1rem' }
    },
    dots: {
      render: () => {
        return <div className='HeroSlider__slide-dot'></div>
      },
      renderActive: () => {
        return <div className='HeroSlider__slide-dot active'></div>
      },
    }
  };

  return (
    <section className='HeroSlider'>
      <Slider data={data} config={config} transitionTime={0.5} auto />
    </section>
  );
}

export default HeroSlider;