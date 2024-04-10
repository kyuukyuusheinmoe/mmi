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
      <div className="flex justify-between">
        <p>{t('hello')}</p>
        <Switch />
      </div>
      <Provider locale={currentLocale}>
        <CountryList />
        <CountryInformation />
      </Provider>
    </div>
  );
}
