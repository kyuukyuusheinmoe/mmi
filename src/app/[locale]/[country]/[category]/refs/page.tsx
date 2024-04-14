import { countries, countryMapper } from "@/constants/CountryList";
import { defaultCountry } from "@/constants/UIConstants";
import React from "react";
import { getI18n } from "@/locales/server";
import { ReferenceCard } from "@/components/Cards";
import { ReferenceCardProps } from "@/components/Cards/types";
import clsx from "clsx";
import English from "@/locales/en";

const Page = async ({
  params,
}: {
  params: { country: string; category: string };
}) => {
  const country = params.country || defaultCountry;
  const category = params.category;

  const t = await getI18n();

  const countryObj = countries.find((c) => c.code === country);

  const title = `${t(category as keyof typeof English)} in ${
    countryObj?.label ? t(countryObj.label as keyof typeof English) : ""
  }`;

  const countryInfo = countryMapper[country as string];

  const references = countryInfo?.categories[category].refs;

  return (
    <div className="p-4">
      <div className="flex gap-2 items-center mb-2">
        <h5 className="text-xl ">{title}</h5>
        <span className={clsx("fi", `fi-${country}`)}></span>
      </div>

      <div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {references?.map((ref: ReferenceCardProps, index: number) => (
            <li key={index} className="text-sm">
              <ReferenceCard
                {...ref}
                url={`/${country}/${category}/refs/${ref.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
