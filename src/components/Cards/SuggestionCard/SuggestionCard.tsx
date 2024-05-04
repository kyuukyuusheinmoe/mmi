import React from "react";
import MDXComponent from "@/components/MDXComponent";
import StringAvatar from "@/components/StringAvatar";
import { SuggestionCardProps } from "../types";
import TextContainer from "@/components/TextContainer";

const SuggestionCard = ({
  serialNo,
  author,
  address,
  header,
  content,
}: SuggestionCardProps) => {
  return (
    <div className="p-2 w-fit">
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
          <TextContainer>
            {content && <MDXComponent mdxStr={content} />}
          </TextContainer>
        </div>
      </li>
    </div>
  );
};

export default SuggestionCard;
