import React from "react";
import MDXComponent from "@/components/MDXComponent";
import StringAvatar from "@/components/StringAvatar";
import { SuggestionCardProps } from "../types";

const SuggestionCard = ({
  serialNo,
  author,
  address,
  header,
  content,
}: SuggestionCardProps) => {
  return (
    <div className="p-2 w-fit">
      <h3 className="text-lg"> {`Suggestion - ${serialNo}`}</h3>
      <div className="flex items-center gap-2">
        {author ? <StringAvatar name={author} /> : <></>}
        <div>
          {author}
          <span className="text-xs"> {address} </span>
        </div>
      </div>
      <li key={serialNo} className="text-sm gap-x-1 grid items-baseline">
        <h5 className="font-bold"> {header}</h5>
        <div className="grid">
          {content && <MDXComponent mdxStr={content} />}
        </div>
      </li>
    </div>
  );
};

export default SuggestionCard;
