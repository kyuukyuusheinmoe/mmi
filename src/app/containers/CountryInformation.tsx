'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { countryMapper } from '../constants/CountryList';
import IconButton from '@/components/IconButton';
import { basicNeedsIcons } from './IconMappers';

const CountryInformation = () => {
  const searchParams = useSearchParams();

  const country = searchParams.get('country') || 'th';
  console.log('xxx searchParams ', searchParams, country);

  const countryInfo = countryMapper[country as string];
  console.log('xxx countryInfo ', countryInfo);

  return (
    <div>
      {countryInfo.name}
      <div className="flex flex-wrap gap-2">
        {Object?.keys(countryInfo.categories)?.map((k) => (
          <IconButton key={k} icon={basicNeedsIcons[k]} label={k} />
        ))}
      </div>
    </div>
  );
};

export default CountryInformation;
