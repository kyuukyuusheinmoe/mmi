import React from "react";
import { countryMapper } from "../constants/CountryList";
import IconButton from "@/components/IconButton";
import { basicNeedsIcons } from "./IconMappers";
import Link from "next/link";
import { SuggestionCard } from "@/components/Cards";
import { SuggestionCardProps } from "@/components/Cards/types";

const CountryInformation = ({
  countryCode,
  category,
}: {
  countryCode: string;
  category: string;
}) => {
  const countryInfo = countryMapper[countryCode as string];

  const references = countryInfo?.categories[category]?.refs;
  const suggestions = countryInfo?.categories[category]?.suggestions;

  const checkpoints = countryInfo?.categories[category]?.checkPoints;

  return (
    <div className="grid gap-y-4">
      <h2 className="text-xl"> {countryInfo?.name}</h2>
      <div className="flex flex-nowrap gap-2 overflow-scroll">
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
        <ul>
          {suggestions?.map(
            (sug: Omit<SuggestionCardProps, "serialNo">, index: number) => (
              <SuggestionCard serialNo={index + 1} {...sug} key={index} />
            )
          )}
        </ul>
      </div>
      <div>
        <h3 className="text-lg"> Check Points</h3>
        <ul>
          {checkpoints?.map((cp: string, index: number) => (
            <li key={index} className="text-sm gap-x-1 flex items-baseline">
              <i className="fa fa-square" aria-hidden="true"></i>
              {cp}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg"> References</h3>
        <ul>
          {references?.map(
            (ref: { label: string; url: string }, index: number) => (
              <li key={index} className="italic text-sm">
                <Link href={ref.url} target="blank">
                  {ref.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default CountryInformation;
