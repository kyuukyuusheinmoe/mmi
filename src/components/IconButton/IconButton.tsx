'use client';

import React, { ReactElement } from 'react';
import { useSearchParams } from 'next/navigation';
import { useI18n } from '@/locales/client';
import Language from '@/locales/en';
import Link from 'next/link';

type ImageButtonProps = {
  label: string;
  icon: ReactElement;
  category: string;
};

const IconButton = ({ label, icon, category }: ImageButtonProps) => {
  console.log('xxx icon ', icon, label);
  const searchParams = useSearchParams();
  const country = searchParams.get('country');

  const t = useI18n();
  return (
    <Link href={`?country=${country}&category=${category}`}>
      <div className="flex items-center gap-1 p-2 border-2 border-red-300 w-fit rounded-full whitespace-nowrap">
        {icon}
        {t(label as keyof typeof Language)}
      </div>
    </Link>
  );
};

export default IconButton;
