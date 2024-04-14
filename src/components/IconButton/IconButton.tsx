"use client";
import React, { ReactElement } from "react";
import { useI18n } from "@/locales/client";
import Language from "@/locales/en";
import Link from "next/link";

type ImageButtonProps = {
  label: string;
  icon: ReactElement;
  url?: string;
};

const IconButton = ({ label, icon, url = "#" }: ImageButtonProps) => {
  const t = useI18n();
  return (
    <Link href={url}>
      <div className="flex items-center gap-1 px-2 py-1 border-[0.1px] border-red-300 w-fit rounded-full whitespace-nowrap">
        {icon}
        {t(label as keyof typeof Language)}
      </div>
    </Link>
  );
};

export default IconButton;
