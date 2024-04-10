import { getI18n, getCurrentLocale } from '../../locales/server';
import CountryInformation from '../containers/CountryInformation';
import CountryList from '../containers/CountryList';
import { Provider } from './provider';
import { Switch } from './switch';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getI18n();
  const currentLocale = getCurrentLocale();

  return (
    <div>
      <p>
        Current locale:
        <span>{currentLocale}</span>
      </p>
      <p>Hello: {t('hello')}</p>
      <Switch />
      <Provider locale={currentLocale}>
        <CountryList />
        <CountryInformation />
      </Provider>
    </div>
  );
}
