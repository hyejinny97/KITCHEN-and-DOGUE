import HeroSlider from '../components/HeroSlider';
import SubHeroSlider from '../components/SubHeroSlider'
import SignatureMenu from '../components/SignatureMenu';
import DailyMenu from '../components/DailyMenu';
import FixedBanner from '../components/FixedBanner';
import SpecialMenu from '../components/SpecialMenu';

function Home() {
  return <main>
    <HeroSlider />
    <SubHeroSlider />
    <SignatureMenu />
    <DailyMenu />
    <FixedBanner />
    <SpecialMenu />
  </main>
}

export default Home;