import '../styles/company.scss';
import image from '../assets/dogs-grid.jpg';

function Company() {
  return <section className='Company'>
    <div className='Company__banner'>
      <p className='Company__banner-text'>
        프리미엄 반려동물 전문 매거진
      </p>
      <p className='Company__banner-text Company__banner-text--large'>
        {'<라이프앤도그>'}가 만든 브랜드
      </p>
    </div>
    <div className='Company__content'>
      <h4 className='Company__content-title'>가족을 위해 차린 집밥 '키친앤도그'</h4>
      <p className='Company__content-text'>
        저는 우연이와 봉구라는 이름의 두 마리 반려견과 살고 있습니다. 아침이면 간단한 음식을 챙겨 먹고 서둘러 출근합니다. 아이들은 집에 남아 테라스를 들락날락하면서 그들만의 시간을 보내지요. 하루가 끝나가는 저녁에는 다 같이 모여 식사를 합니다. 대부분 그날 냉장고에 있는 혹은 시장에서 고른 가장 신선한 재료가 아이들과 저의 저녁이 됩니다. 키친앤도그는 내 새끼에게 최고급만을 먹이겠다는 유난스러운 고집으로 탄생한 것이 아닙니다. 그저 자연스럽게, 가족에게 집밥을 차리는 마음으로 간식을 말리고 죽을 끓이고 밥을 찐 일상이 쌓여 레시피가 되고 이것이 모여 ‘키친앤도그’라는 브랜드가 되었습니다. 키친앤도그 제품은 빨리 배송되지 않습니다. 주문이 들어온 이후에야 시장에 가서 직접 눈으로 보고 재료를 구입해 처음부터 끝까지 손으로 만들기 때문입니다. 내 가족에게 먹이는 것과 마찬가지로 가장 신선하고 좋은 것으로, 하나하나 정성스럽게 만드는 것은 물론이고요. 사람이 먹는 재료로, 사람이 먹는 음식처럼 맛과 향, 식감과 영양을 고려한 휴먼그레이드 등급의 간식, 키친앤도그는 반려견을 위해 차린 집밥입니다.
      </p>
    </div>
    <img className='Company__image' src={image} alt='dogs-grid' />
  </section>
}

export default Company;