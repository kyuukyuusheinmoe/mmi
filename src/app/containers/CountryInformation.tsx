'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { countryMapper } from '../constants/CountryList';
import IconButton from '@/components/IconButton';
import { basicNeedsIcons } from './IconMappers';
import Link from 'next/link';
import StringAvatar from '@/components/StringAvatar';

const CountryInformation = () => {
  const searchParams = useSearchParams();

  const country = searchParams.get('country') || 'th';

  const category = searchParams.get('category') || 'accomodation';

  const countryInfo = countryMapper[country as string];

  const references = countryInfo?.categories[category]?.refs;
  const suggestions = countryInfo?.categories[category]?.suggestions;

  const checkpoints = countryInfo?.categories[category]?.checkPoints;

  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-xl"> {countryInfo.name}</h2>
      <div className="flex flex-nowrap gap-2 overflow-auto">
        {Object?.keys(countryInfo.categories)?.map((k) => (
          <IconButton
            key={k}
            icon={basicNeedsIcons[k]}
            label={k}
            category={k}
          />
        ))}
      </div>

      <div>
        <ul>
          {suggestions?.map(
            (
              sug: {
                author?: string;
                address?: string;
                header?: string;
                content?: string;
              },
              index: number
            ) => (
              <>
                <h3 className="text-lg"> {`Suggestion - ${index + 1}`}</h3>
                <div className="flex items-center gap-2">
                  {sug.author ? <StringAvatar name={sug.author} /> : <></>}
                  <div>
                    {sug.author}
                    <span className="text-xs"> {sug.address} </span>
                  </div>
                </div>
                <li
                  key={index}
                  className="text-sm gap-x-1 flex flex-col items-baseline"
                >
                  <h5 className="font-bold"> {sug.header}</h5>
                  {sug.content}
                </li>
              </>
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
