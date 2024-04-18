import React from "react";
import { countryMapper } from "../constants/CountryList";
import IconButton from "@/components/IconButton";
import { basicNeedsIcons } from "./IconMappers";
import {
  ReferenceCard,
  SuggestionCard,
  OfficialDocumentCard,
} from "@/components/Cards";
import {
  OfficialDocumentCardProps,
  ReferenceCardProps,
  SuggestionCardProps,
} from "@/components/Cards/types";
import { getCurrentLocale, getI18n } from "@/locales/server";
import { CategorySectionHeader } from "@/components/Headers";

const CountryInformation = async ({
  countryCode,
  category,
}: {
  countryCode: string;
  category: string;
}) => {
  const t = await getI18n();
  const currentLocale = getCurrentLocale();

  const countryInfo = countryMapper[countryCode as string];

  const countryCategory = countryInfo?.categories[category];

  const references = countryCategory?.refs;
  const suggestions = countryCategory?.suggestions;

  const checkpoints = countryCategory?.checkPoints;

  const official_announcements = countryCategory?.official_announcements;

  return (
    <div className="grid gap-y-4">
      <div className="mt-4 flex justify-between items-center">
        <h2 className="text-xl mt-2"> {t(countryInfo.name, { key: null })}</h2>
        <button className="border-[0.1px] bg-red-300 rounded-md shadow-lg p-2">
          <i className="fa fa-plus "> </i> {" Be a contributor "}
        </button>
      </div>
      <div className="flex flex-nowrap gap-2 overflow-scroll no-scrollbar">
        {Object?.keys(countryInfo?.categories)?.map((k) => (
          <IconButton
            key={k}
            icon={basicNeedsIcons[k]}
            label={k}
            url={`?country=${countryCode}&category=${k}`}
          />
        ))}
      </div>
      <div className="">
        <h3 className="text-lg font-bold">{t("official_announcements")}</h3>
        <ul>
          {official_announcements?.map(
            (
              doc: { [key: string]: OfficialDocumentCardProps },
              index: number
            ) => (
              <OfficialDocumentCard {...doc?.[currentLocale]} key={index} />
            )
          )}
        </ul>
      </div>
      <div className="">
        <h3 className="text-lg font-bold">{t("suggestions")}</h3>
        <ul>
          {suggestions?.map(
            (sug: Omit<SuggestionCardProps, "serialNo">, index: number) => (
              <SuggestionCard serialNo={index + 1} {...sug} key={index} />
            )
          )}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold">{t("checkpoints")}</h3>
        <ul>
          {checkpoints?.[currentLocale]?.map((cp: string, index: number) => (
            <li key={index} className="text-sm gap-x-1 flex items-baseline">
              <i className="fa fa-check" aria-hidden="true"></i>
              {cp}
            </li>
          ))}
        </ul>
      </div>
      <div className=" overflow-scroll no-scrollbar">
        <CategorySectionHeader
          title={t("refs")}
          seeAll={`/${countryCode}/${category}/refs`}
        />
        <ul className="flex flex-nowrap gap-2">
          {references?.map(
            (ref: Omit<ReferenceCardProps, "url">, index: number) => (
              <li key={index} className="text-sm">
                <ReferenceCard
                  {...ref}
                  url={`/${countryCode}/${category}/refs/${ref.id}`}
                />
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default CountryInformation;
