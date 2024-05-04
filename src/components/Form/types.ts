import { ReactElement } from "react";

export type DropDownProps = {
    label?:string;
    placeholder?:string;
    onPointerEnterCapture?:(e: any) => void;
    onPointerLeaveCapture?:(e: any) => void;
    optionTemplate?:(e:any) => ReactElement;
    options: any
    optionLabel: string
    optionValue: string
    onChange:(e: any) => void;
}