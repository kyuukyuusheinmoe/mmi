'use client';
import React from 'react';
import clsx from 'clsx';
import Language from '@/locales/en';
import Link from 'next/link';
import { useI18n } from '@/locales/client';

type ImageButtonProps = {
  label: string;
  code: string;
};

const ImageButton = ({ label, code }: ImageButtonProps) => {
  const t = useI18n();

  return (
    <Link href={`?country=${code}`}>
      <div className="flex p-2 border-2 border-red-300 w-fit rounded-full">
        <span className={clsx('fi', `fi-${code}`)}></span>
        {t(label as keyof typeof Language)}
      </div>
    </Link>
  );
};

export default ImageButton;
