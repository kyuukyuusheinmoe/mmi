import { ReactElement } from 'react';
import { HomeIcon, FoodIcon, VisaIcon, HospitalIcon } from '@/components/Icons';

export const basicNeedsIcons: { [key: string]: ReactElement<any, any> } = {
  accomodation: <HomeIcon />,
  food: <FoodIcon />,
  hospital: <HospitalIcon />,
  residentialStatus: <VisaIcon />,
};
