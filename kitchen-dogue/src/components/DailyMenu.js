import '../styles/dailyMenu.scss';
import { useFetchDailyMenuQuery } from '../store';
import DailyMenuItem from './DailyMenuItem';

function DailyMenu() {
  const { data, isLoading, isError } = useFetchDailyMenuQuery();

  if (isLoading) return 'loading...';
  else if (isError) return 'error...';

  const renderItems = data.map(item => {
    return <DailyMenuItem key={item.id} data={item} />;
  });

  return <section className='DailyMenu'>
    <h1 className='DailyMenu__title'>
      Daily <span className='DailyMenu__title--bold'>MENU</span>
    </h1>
    <div className='DailyMenu__list'>
      {renderItems}
    </div>
  </section>
}

export default DailyMenu;