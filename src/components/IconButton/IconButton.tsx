'use client';

import React, { ReactElement, ReactNode } from 'react';
import { useI18n } from '@/locales/client';
import Language from '@/locales/en';

type ImageButtonProps = {
  label: string;
  icon: ReactElement;
};

const IconButton = ({ label, icon }: ImageButtonProps) => {
  console.log('xxx icon ', icon, label);

  const t = useI18n();
  return (
    <div className="flex items-center gap-1 p-2 border-2 border-red-300 w-fit rounded-full">
      {icon}
      {t(label as keyof typeof Language)}
    </div>
  );
};

export default IconButton;
