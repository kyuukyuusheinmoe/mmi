import { getI18n, getCurrentLocale } from "@/locales/server";
import { defaultCountry } from "@/constants/UIConstants";
import CountryInformation from "@/containers/CountryInformation";
import CountryList from "@/containers/CountryList";
import { Provider } from "./provider";
import { Switch } from "./switch";

export default async function Home({
  params,
  searchParams: { country, category },
}: {
  params: { locale: string };
  searchParams: { country: string; category: string };
}) {
  const t = await getI18n();
  const currentLocale = getCurrentLocale();

  return (
    <div className="p-2">
      <div className="flex justify-between">
        <p>{t("hello")}</p>
        <Switch />
      </div>
      <Provider locale={currentLocale}>
        <CountryList />
        <CountryInformation
          countryCode={country || defaultCountry}
          category={category || "accomodation"}
        />
      </Provider>
    </div>
  );
}
