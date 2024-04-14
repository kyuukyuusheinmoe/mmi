"use client";

import { defaultCategory, defaultCountry } from "@/constants/UIConstants";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function Switch() {
  const router = useRouter();
  const pathName = usePathname();
  const params = useSearchParams();

  const allParams = new URLSearchParams();

  allParams.set("country", params.get("country") || defaultCountry);
  allParams.set("category", params.get("category") || defaultCategory);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          const routeName = `${pathName}?${allParams.toString()}`.replace(
            "/my?",
            "/en?"
          );

          router.replace(routeName);
        }}>
        EN
      </button>
      -
      <button
        type="button"
        onClick={() => {
          const routeName = `${pathName}?${allParams.toString()}`.replace(
            "/en?",
            "/my?"
          );
          router.replace(routeName);
        }}>
        MY
      </button>
    </div>
  );
}
