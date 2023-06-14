import "../styles/slider.scss";
import { useState, useRef, useEffect } from "react";

function Slider({
  data,
  config,
  slidesPerPage = 1,
  transitionTime = 1,
  intervalTime = 3,
  sliding = false,
  infinite = false,
  auto = false,
}) {
  const notSliding = slidesPerPage === data.length;
  const firstSlide = infinite & !notSliding ? 1 : 0;
  const lastSlide = infinite & !notSliding ? data.length : data.length - 1;
  const [curSlide, setCurSlide] = useState(firstSlide);
  const [slidesData, setSlidesData] = useState(data);
  const [isMoving, setIsMoving] = useState(false);
  const slideList = useRef();

  useEffect(() => {
    if (sliding) {
      slideList.current.style.transform = `translateX(-${(100 / slidesPerPage) * curSlide}%)`;
    } else {
      slideList.current.childNodes.forEach(slide => slide.classList.remove('active'));
      slideList.current.childNodes[curSlide].classList.add('active');
    }
  }, [curSlide, slidesPerPage]);

  useEffect(() => {
    if (auto) {
      const interval = setInterval(moveToSlide, intervalTime * 1000, "next");
      return () => clearInterval(interval);
    }
  });
  
  useEffect(() => {
    if (infinite & !notSliding) {
      const addFirst = data.slice(data.length - slidesPerPage, data.length).map((d, i) => {return { ...d, id: `${d.id}/clone/${i}` }});
      const addLast = data.slice(0, slidesPerPage).map((d, i) => {return { ...d, id: `${d.id}/clone/${i}` }});
      const newData = [...addFirst, ...data, ...addLast];
      setSlidesData(newData);
    }
  }, [slidesPerPage]);

  const moveToSlide = function (direction) {
    if (isMoving) return;
    setIsMoving(true);

    const limitSlide = direction === "prev" ? firstSlide : lastSlide;
    const initSlide = direction === "prev" ? lastSlide : firstSlide;
    const slideToGo = direction === "prev" ? curSlide - 1 : curSlide + 1;

    if (curSlide === limitSlide && infinite) {
      setCurSlide(slideToGo);
      setTimeout(() => {
        slideList.current.style.transition = "0s";
        setCurSlide(initSlide);
      }, transitionTime * 1000);
    } else if (curSlide === limitSlide) {
      setCurSlide(initSlide);
    } else {
      slideList.current.style.transition = `${transitionTime}s all ease`;
      setCurSlide(slideToGo);
    }

    setTimeout(() => {
      setIsMoving(false);
    }, transitionTime * 1000);
  };

  const renderSlides = slidesData.map((item) => {
    return (
      <div key={item.id} className="Slider__item" style={{flexBasis: `${100 / slidesPerPage}%`}}>
        {config.renderContent(item)}
      </div>
    );
  });

  const renderControllers = !notSliding && [
    <div
      key='prev'
      className="Slider__controller Slider__controller--prev"
      onClick={() => moveToSlide("prev")}
      style={config.controllerPrev?.style}
    >
      {config.controllerPrev?.render()}
    </div>,
    <div
      key='next'
      className="Slider__controller Slider__controller--next"
      onClick={() => moveToSlide("next")}
      style={config.controllerNext?.style}
    >
      {config.controllerNext?.render()}
    </div>];

  const renderDots = config.dots && Array(data.length).fill(0).map((_, i) => {
    if (i === curSlide) {
      return (
        <div key={i} className='Slider__dot-item' onClick={() => setCurSlide(i)}>
          {config.dots.renderActive()}
        </div>
      );
    }

    return (
      <div key={i} className='Slider__dot-item' onClick={() => setCurSlide(i)}>
        {config.dots.render()}
      </div>
    );
  })

  return (
    <div className={`Slider ${sliding ? 'sliding' : 'no-sliding'}`}>
      <div className="Slider__container">
        <div className="Slider__list" ref={slideList}>
          {renderSlides}
        </div>
      </div>
      {renderControllers}
      <div className='Slider__dot-list'>
        {renderDots}
      </div>
    </div>
  );
}

export default Slider;
