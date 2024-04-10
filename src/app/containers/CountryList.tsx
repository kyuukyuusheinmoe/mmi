import ImageButton from '@/components/ImageButton';
import React from 'react';
import { countries } from '../constants/CountryList';

const CountryList = async () => {
  return (
    <div className="flex flex-wrap gap-2">
      {countries.map((country) => (
        <ImageButton {...country} />
      ))}
    </div>
  );
};

export default CountryList;
