import React, { ReactElement } from "react";
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
import { infoSectionList } from "@/constants/UIConstants";

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

  const checkPoints = countryCategory?.checkPoints;

  const official_announcements = countryCategory?.official_announcements;

  const InfoSectionMapper: { [key: string]: ReactElement } = {
    official_announcements: (
      <>
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
      </>
    ),
    suggestions: (
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
    ),
    checkPoints: (
      <div>
        <h3 className="text-lg font-bold">{t("checkpoints")}</h3>
        <ul>
          {checkPoints?.[currentLocale]?.map((cp: string, index: number) => (
            <li key={index} className="text-sm gap-x-1 flex items-baseline">
              <i className="fa fa-check" aria-hidden="true"></i>
              {cp}
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <div className="grid gap-y-4">
      <div className="mt-4 flex justify-between items-center">
        <h2 className="text-xl mt-2"> {t(countryInfo.name, { key: null })}</h2>
      </div>
      <div className="flex flex-nowrap gap-2 overflow-scroll no-scrollbar">
        {Object?.keys(countryInfo?.categories)?.map((k) => (
          <IconButton
            selected={k === category}
            key={k}
            icon={basicNeedsIcons[k]}
            label={k}
            url={`?country=${countryCode}&category=${k}`}
            styledClasses={{
              selected: "border-red-300 text-red-300 font-medium",
              unselected: "border-gray-300",
            }}
          />
        ))}
      </div>
      <div className="">
        {infoSectionList?.map((section) => {
          return (
            <div>
              {countryCategory?.[section] ? InfoSectionMapper[section] : null}
            </div>
          );
        })}
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
