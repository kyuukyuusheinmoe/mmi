import React from "react";
import { countryMapper } from "../constants/CountryList";
import IconButton from "@/components/IconButton";
import { basicNeedsIcons } from "./IconMappers";
import { ReferenceCard, SuggestionCard } from "@/components/Cards";
import {
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
  const countryInfo = countryMapper[countryCode as string];

  const countryCategory = countryInfo?.categories[category];

  const references = countryCategory?.refs;
  const suggestions = countryCategory?.suggestions;

  const checkpoints = countryCategory?.checkPoints;

  const currentLocale = getCurrentLocale();
  const t = await getI18n();

  return (
    <div className="grid gap-y-4">
      <h2 className="text-xl mt-2"> {t(countryInfo.name, { key: null })}</h2>
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
          {references?.map((ref: ReferenceCardProps, index: number) => (
            <li key={index} className="text-sm">
              <ReferenceCard {...ref} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryInformation;
