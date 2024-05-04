"use client";

import clsx from "clsx";
import React, { ReactNode, useState } from "react";

const TextContainer = ({ children }: { children: ReactNode }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <>
      <div
        className={clsx(
          "text-gray-800 whitespace-pre-line",
          isExpanded
            ? "max-h-full overflow-y-auto"
            : "max-h-[12rem] overflow-hidden p-1"
        )}>
        {children}
      </div>
      <span
        className="text-blue-700"
        onClick={() => setExpanded(!isExpanded)}>{`See ${
        !isExpanded ? "More" : "Less"
      }`}</span>
    </>
  );
};

export default TextContainer;
