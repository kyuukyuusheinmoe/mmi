import React from "react";
import Image from "next/image";
import { countryMapper } from "@/constants/CountryList";
import { ReferenceCardProps } from "@/components/Cards/types";
import { CategorySectionHeader } from "@/components/Headers";
import {
  HeartIcon as OutlinedHeartIcon,
  ChatBubbleOvalLeftIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Page = ({
  params,
}: {
  params: {
    country: string;
    category: string;
    id: string;
  };
}) => {
  const { country, category, id } = params;

  const refs = countryMapper[country]?.categories?.[category]?.refs;

  const refInfo: ReferenceCardProps = refs?.find(
    (ref: Omit<ReferenceCardProps, "url">) => ref.id === +id
  );

  const { imageUrl, name, description, source } = refInfo;

  return (
    <div>
      {/** Product Details */}
      <div className="flex items-center gap-2 p-2">
        <div className="w-[10rem] aspect-square rounded-md relative">
          <Image
            src={imageUrl ? imageUrl : "/assets/agents/sompo.png"}
            alt="agent-image"
            layout="fill"
          />
        </div>
        <div>
          <Link
            href={source}
            className="text-lg line-clamp-2 text-blue-500"
            target="blank">
            {`${name} >>`}
          </Link>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      {/** Action List */}
      <div className="flex items-center gap-4">
        <div className="flex gap-0.5 text-gray-800">
          <OutlinedHeartIcon className="w-6 aspect-square text-blue-500" />
          {"Like"}
        </div>
        <div className="flex gap-0.5 text-gray-800">
          <ChatBubbleOvalLeftIcon className="w-6 aspect-square text-blue-500" />
          {"Comment"}
        </div>
        <div className="flex gap-0.5 text-gray-800">
          <StarIcon className="w-6 aspect-square text-blue-500" />
          {"Rate"}
        </div>
      </div>
      {/** Product Services */}
      <div>
        <CategorySectionHeader title="Services" />
      </div>
      {/** Product Reviews */}
      <div>
        <CategorySectionHeader title="Reviews" />
      </div>
    </div>
  );
};

export default Page;
