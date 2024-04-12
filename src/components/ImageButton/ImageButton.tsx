'use client';
import React from 'react';
import clsx from 'clsx';
import Language from '@/locales/en';
import Link from 'next/link';
import { useI18n } from '@/locales/client';

type ImageButtonProps = {
  label: string;
  code: string;
  wrapperClass?: string;
};

const ImageButton = ({ label, code, wrapperClass }: ImageButtonProps) => {
  const t = useI18n();

  return (
    <Link href={`?country=${code}`}>
      <div className={clsx('flex gap-2 p-2  w-fit', wrapperClass)}>
        <span className={clsx('fi', `fi-${code}`)}></span>
        {t(label as keyof typeof Language)}
      </div>
    </Link>
  );
};

export default ImageButton;
