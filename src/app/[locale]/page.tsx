// import { setStaticParamsLocale } from 'next-international/server';
import { getI18n, getScopedI18n, getCurrentLocale } from '../../locales/server';
import Client from './client';
import { Provider } from './provider';
import { Switch } from './switch';

// Uncomment to test Static Generation on this page only
// export function generateStaticParams() {
//   return getStaticParams();
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Uncomment to test Static Generation
  // setStaticParamsLocale(locale);

  const t = await getI18n();
  const t2 = await getScopedI18n('scope.more' as never);
  const currentLocale = getCurrentLocale();

  return (
    <div>
      <Provider locale={locale}>
        <Client />
      </Provider>
      <h1>SSR / SSG</h1>
      <p>
        Current locale:
        <span>{currentLocale}</span>
      </p>
      <p>Hello: {t('title')}</p>
      <p>Hello: {t2('title' as never, { count: 'test' as never })}</p>
      <Switch />
    </div>
  );
}
