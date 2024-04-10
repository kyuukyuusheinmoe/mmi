'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { countryMapper } from '../constants/CountryList';
import IconButton from '@/components/IconButton';
import { basicNeedsIcons } from './IconMappers';
import Link from 'next/link';

const CountryInformation = () => {
  const searchParams = useSearchParams();

  const country = searchParams.get('country') || 'th';

  const category = searchParams.get('category') || 'accomodation';

  const countryInfo = countryMapper[country as string];

  const references = countryInfo?.categories[category]?.refs;

  return (
    <div>
      <h2 className="text-xl"> {countryInfo.name}</h2>
      <div className="flex flex-nowrap gap-2">
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
