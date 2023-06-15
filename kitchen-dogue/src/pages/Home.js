import HeroSlider from '../components/HeroSlider';
import SubHeroSlider from '../components/SubHeroSlider'
import SignatureMenu from '../components/SignatureMenu';
import DailyMenu from '../components/DailyMenu';
import FixedBanner from '../components/FixedBanner';

function Home() {
  return <main>
    <HeroSlider />
    <SubHeroSlider />
    <SignatureMenu />
    <DailyMenu />
    <FixedBanner />
  </main>
}

export default Home;