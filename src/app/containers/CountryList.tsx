import ImageButton from '@/components/ImageButton';
import React from 'react';
import { countries } from '../constants/CountryList';

const CountryList = async () => {
  return (
    <div className="flex flex-wrap gap-2">
      {countries.map((country) => (
        <ImageButton
          {...country}
          wrapperClass="border-[0.1px] border-red-300 rounded-md shadow-lg"
        />
      ))}
    </div>
  );
};

export default CountryList;
