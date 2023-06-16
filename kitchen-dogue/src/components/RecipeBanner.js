import '../styles/recipeBanner.scss';
import recipeLogo from '../assets/recipeLogo.png';
import data from '../data/recipeBannerData';
import { Link } from 'react-router-dom';

function RecipeBanner() {
  const { cakes, homeFoods } = data;

  const renderRecipes = [...cakes, ...homeFoods].map(recipe => {
    return (
      <Link to={recipe.link} key={recipe.id}>
        <div className='RecipeBanner__image-wrap'>
          <img className='RecipeBanner__image' src={recipe.image} alt={recipe.label} />
        </div>
      </Link>
    );
  });

  return <section className='RecipeBanner'>
    <img className='RecipeBanner__logo' src={recipeLogo} alt='recipe-logo' />
    <div className='RecipeBanner__content'>
      <div className='RecipeBanner__image-list'>
        {renderRecipes.slice(0, 3)}
      </div>
      <p className='RecipeBanner__text'>특별한 날, 반려견을 위한 케이크 만들기</p>
    </div>
    <div className='RecipeBanner__content'>
      <div className='RecipeBanner__image-list'>
        {renderRecipes.slice(3)}
      </div>
      <p className='RecipeBanner__text'>매일매일, 건강하고 맛있는 집밥 차리기</p>
    </div>
  </section>
}

export default RecipeBanner;