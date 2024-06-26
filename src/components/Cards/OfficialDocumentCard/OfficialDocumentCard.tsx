import React from "react";
import {
  OfficialDocumentCardProps,
  OfficialDocumentDetailsProps,
} from "../types";
import StringAvatar from "@/components/StringAvatar";
import { getI18n } from "@/locales/server";
import MDXComponent from "@/components/MDXComponent";
import TextContainer from "@/components/TextContainer";

const OfficialDocumentCard = async ({
  author,
  address,
  header,
  details,
}: OfficialDocumentCardProps) => {
  const t = await getI18n();

  return (
    <div className="p-2">
      <div className="flex items-center gap-2">
        {author ? <StringAvatar name={author} /> : <></>}
        <div>
          {author}
          <span className="text-xs"> {address} </span>
        </div>
      </div>
      <h3 className="font-bold text-lg"> {header}</h3>

      <TextContainer>
        {details &&
          Object.keys(details)?.map((k) => (
            <div className="grid" key={k}>
              <h4 className="font-medium text-md underline">
                {t(k as keyof OfficialDocumentDetailsProps)}
              </h4>
              <MDXComponent
                mdxStr={details?.[k as keyof typeof details] || ""}
              />
            </div>
          ))}
      </TextContainer>
    </div>
  );
};

export default OfficialDocumentCard;
