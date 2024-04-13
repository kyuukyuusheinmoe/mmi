import React from "react";
import Image from "next/image";
import { ReferenceCardProps } from "../types";
import Link from "next/link";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { HeartIcon as OutlinedHeartIcon } from "@heroicons/react/24/outline";

const ReferenceCard = ({
  name,
  imageUrl,
  description,
  url,
  tags,
}: ReferenceCardProps) => {
  return (
    <Link href={url} target="blank">
      <div className="w-[10rem] border-[0.1px] border-gray-50 shadow-md px-2 pb-4">
        <div className="flex justify-center">
          <div className="agent-image w-[8rem] aspect-square rounded-md relative">
            {imageUrl ? (
              <Image src={imageUrl} alt="agent-image" layout="fill" />
            ) : (
              <Image
                src={"/assets/agents/sompo.png"}
                alt="agent-image"
                layout="fill"
              />
            )}
          </div>
        </div>
        <div className="grid gap-y-2 mt-2">
          <h5 className="text-sm line-clamp-2"> {name}</h5>
          <p className="text-gray-500">{description}</p>
          {/** Tag */}
          {tags?.map((tag: string, index: number) => (
            <div
              className="w-fit bg-gray-100 rounded-full p-1 text-xs"
              key={index}>
              {tag}
            </div>
          ))}
          <div className="flex text-[9px] items-center gap-4">
            <div className="flex gap-0.5 text-gray-800">
              <OutlinedHeartIcon className="w-4 aspect-square text-blue-500" />
              {"12 likes"}
            </div>
            <div className="flex gap-0.5 text-gray-800">
              <ChatBubbleOvalLeftIcon className="w-4 aspect-square text-blue-500" />
              {"12 comments"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReferenceCard;
