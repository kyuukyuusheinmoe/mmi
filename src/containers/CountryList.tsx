"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { countries } from "../constants/CountryList";
import { DropDown } from "@/components/Form";
import Language from "@/locales/en";
import clsx from "clsx";
import { useI18n } from "@/locales/client";

const CountryList = async () => {
  const t = useI18n();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    searchParams.get("country") &&
      setSelectedCountry(searchParams.get("country"));
  }, []);

  useEffect(() => {
    const allParams = new URLSearchParams(searchParams);
    selectedCountry && allParams.set("country", selectedCountry);

    router.replace(`/${pathName}?${allParams.toString()}`);
  }, [selectedCountry]);

  return (
    <div className="flex flex-wrap gap-2">
      <DropDown
        options={countries}
        value={selectedCountry}
        onChange={(val: string | null) => {
          setSelectedCountry(val);
        }}
        optionLabel={"label"}
        optionValue={"code"}
        defaultValue={countries[0]?.code}
        optionTemplate={(option: any) => (
          <>
            <div className={clsx("flex gap-2 p-2  w-fit")}>
              <span className={clsx("fi", `fi-${option.code}`)}></span>
              {t(option.label as keyof typeof Language)}
            </div>
          </>
        )}
      />
    </div>
  );
};

export default CountryList;
