import React from "react";
import { CategorySectionHeaderProps } from "../types";
import Link from "next/link";

const CategorySectionHeader = ({
  title,
  seeAll,
}: CategorySectionHeaderProps) => {
  return (
    <div className="flex justify-between p-2">
      <h3 className="text-lg font-bold">{title}</h3>
      {seeAll && (
        <Link className="text-blue-500" href={seeAll}>
          {" "}
          See All{" "}
        </Link>
      )}
    </div>
  );
};

export default CategorySectionHeader;
