"use client";

import React from "react";
import { Select, Option } from "@material-tailwind/react";
import { DropDownProps } from "../types";

const DropDown = ({
  label,
  placeholder,
  onPointerEnterCapture,
  onPointerLeaveCapture,
  optionTemplate,
  options,
  optionLabel,
  optionValue,
  defaultValue,
  value,
  onChange,
}: DropDownProps) => {
  return (
    <div className="w-72">
      <Select
        label={label}
        placeholder={placeholder}
        value={value || defaultValue}
        onPointerEnterCapture={(e: any) => {
          onPointerEnterCapture?.(e);
        }}
        onPointerLeaveCapture={(e: any) => {
          onPointerLeaveCapture?.(e);
        }}
        onChange={(val) => {
          onChange(val);
        }}>
        {options?.map((opt: any, index: number) => (
          <Option key={index} value={opt.code}>
            {optionTemplate?.(opt) || opt[optionLabel]}{" "}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default DropDown;
