import '../styles/fixedBanner.scss';

function FixedBanner() {
  return <section className='FixedBanner'>
    <div className='FixedBanner__inner'>
      <p className='FixedBanner__content FixedBanner__content--fst'>키친앤도그 전 제품</p>
      <p className='FixedBanner__content FixedBanner__content--sec'>
        주문 즉시&nbsp;
        <span className='FixedBanner__content--bold'>당일 생산</span>
      </p>
    </div>
  </section>
}

export default FixedBanner;