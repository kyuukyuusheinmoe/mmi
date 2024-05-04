"use client";
import React, { ReactElement } from "react";
import { useI18n } from "@/locales/client";
import Language from "@/locales/en";
import Link from "next/link";
import clsx from "clsx";

type ImageButtonProps = {
  label: string;
  icon: ReactElement;
  url?: string;
  selected: boolean;
  styledClasses?: {
    selected?: string;
    unselected?: string;
  };
};

const IconButton = ({
  label,
  icon,
  url = "#",
  styledClasses,
  selected,
}: ImageButtonProps) => {
  const t = useI18n();
  return (
    <Link href={url}>
      <div
        className={clsx(
          "flex items-center gap-1 px-2 py-1 border-[0.1px] w-fit rounded-full whitespace-nowrap",
          selected ? styledClasses?.selected : styledClasses?.unselected
        )}>
        {icon}
        {t(label as keyof typeof Language)}
      </div>
    </Link>
  );
};

export default IconButton;
