"use client";
import React from "react";
import { countries } from "../constants/CountryList";
import { DropDown } from "@/components/Form";
import Language from "@/locales/en";
import clsx from "clsx";
import { useI18n } from "@/locales/client";

const CountryList = async () => {
  const t = useI18n();
  return (
    <div className="flex flex-wrap gap-2">
      <DropDown
        options={countries}
        onChange={() => {}}
        optionLabel={"label"}
        optionValue={"code"}
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
