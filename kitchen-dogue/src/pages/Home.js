import HeroSlider from '../components/HeroSlider';
import SubHeroSlider from '../components/SubHeroSlider'
import SignatureMenu from '../components/SignatureMenu';
import DailyMenu from '../components/DailyMenu';

function Home() {
  return <main>
    <HeroSlider />
    <SubHeroSlider />
    <SignatureMenu />
    <DailyMenu />
  </main>
}

export default Home;