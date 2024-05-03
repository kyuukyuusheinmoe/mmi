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
}: DropDownProps) => {
  return (
    <div className="w-72">
      <Select
        label={label}
        placeholder={placeholder}
        onPointerEnterCapture={onPointerEnterCapture}
        onPointerLeaveCapture={onPointerLeaveCapture}
        onChange={() => {}}>
        {options?.map((opt: any, index: number) => (
          <Option key={index}> {optionTemplate(opt)} </Option>
        ))}
      </Select>
    </div>
  );
};

export default DropDown;
