import '../styles/signatureMenu.scss';
import { useFetchSignatureMenuQuery } from '../store';
import HomeMenuItem from './HomeMenuItem';

function SignatureMenu() {
  const { data, isLoading, isError } = useFetchSignatureMenuQuery();

  if (isLoading) return 'loading...';
  else if (isError) return 'error...';

  const renderItems = data.map(item => {
    return <HomeMenuItem className='SignatureMenu__item' key={item.id} data={item} />
  });

  return <section className='SignatureMenu'>
    <h1 className='SignatureMenu__title'>
      SIGNATURE <span className='SignatureMenu__title--bold'>MENU</span>
    </h1>
    <div className='SignatureMenu__list'>
      {renderItems}
    </div>
  </section>
}

export default SignatureMenu;