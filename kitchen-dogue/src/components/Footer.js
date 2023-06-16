import '../styles/footer.scss';

function Footer() {
  const infoData = ['회사소개', '이용약관', '개인정보처리방침', '이용안내', '제휴안내'];

  return <footer className='Footer'>
    <ul>
      <li className='Footer__title'>INFORMATION</li>
      {infoData.map((data, i) => {
        return <li key={i} className='Footer__text'>{data}</li>
      })}
    </ul>
    <ul>
      <li className='Footer__title'>CUSTOMER CENTER</li>
      <li className='Footer__phone'>010-4311-4433</li>
      <li className='Footer__text'>
        업무시간 <span className='Footer__text--gray'>am 09:00 - pm 6:00</span>
      </li>
      <li className='Footer__text'>
        점심시간 <span className='Footer__text--gray'>pm 12:00 - pm 1:00</span>
      </li>
      <li className='Footer__text'>
        주말 및 공휴일은 휴무입니다.
      </li>
    </ul>
    <ul>
      <li className='Footer__title'>BANKING INFO</li>
      <li className='Footer__phone'>217-092309-04-010</li>
      <li className='Footer__text'>
        기업은행 <span className='Footer__text--gray'>예금주: 주식회사 페치</span>
      </li>
    </ul>
    <div>
      <ul>
        <li className='Footer__title'>DELIVERY INQUIRY</li>
        <li className='Footer__text'>
          DELIVERY: 우체국 택배 1588-1300
        </li>
      </ul>
      <ul>
        <li className='Footer__title'>RETURN ADDRESS</li>
        <li className='Footer__text'>
          교환/반품주소: 서울특별시 강남구 도산대로 30길 29-3 지하 1층
        </li>
      </ul>
    </div>
  </footer>
}

export default Footer;