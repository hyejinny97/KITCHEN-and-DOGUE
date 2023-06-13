import "../styles/slider.scss";
import { useState, useRef, useEffect } from "react";

function Slider({
  data,
  config,
  transitionTime = 1,
  intervalTime = 3,
  sliding = false,
  infinite = false,
  auto = false,
}) {
  const firstSlide = infinite ? 1 : 0;
  const lastSlide = infinite ? data.length : data.length - 1;
  const [curSlide, setCurSlide] = useState(firstSlide);
  const [isMoving, setIsMoving] = useState(false);
  const slideList = useRef();
  const dotsList = useRef();

  useEffect(() => {
    if (sliding) {
      slideList.current.style.transform = `translateX(-${100 * curSlide}%)`;
    } else {
      slideList.current.childNodes.forEach(slide => slide.classList.remove('active'));
      slideList.current.childNodes[curSlide].classList.add('active');
    }
  }, [curSlide]);

  useEffect(() => {
    if (auto) {
      const interval = setInterval(moveToSlide, intervalTime * 1000, "next");
      return () => clearInterval(interval);
    }
  });

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

  let newData = data;
  if (infinite) {
    const addFirst = { ...data.at(-1), id: `${data.at(-1).id}/clone` };
    const addLast = { ...data.at(0), id: `${data.at(0).id}/clone` };
    newData = [addFirst, ...data, addLast];
  }

  let renderSlides = newData.map((item) => {
    return (
      <div key={item.id} className="Slider__item">
        {config.renderContent(item)}
      </div>
    );
  });

  const renderDots = Array(data.length).fill(0).map((_, i) => {
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
      <div
        className="Slider__controller Slider__controller--prev"
        onClick={() => moveToSlide("prev")}
        style={config.controllerPrev.style}
      >
        {config.controllerPrev.render()}
      </div>
      <div
        className="Slider__controller Slider__controller--next"
        onClick={() => moveToSlide("next")}
        style={config.controllerNext.style}
      >
        {config.controllerNext.render()}
      </div>
      <div className='Slider__dot-list' ref={dotsList}>
        {renderDots}
      </div>
    </div>
  );
}

export default Slider;
