"use client";

import {
  useEffect,
} from "react";

type Props = {
  slug: string;
};

export default function VCardAutoOpen({
  slug,
}: Props) {

  useEffect(() => {

    const isMobile =

      /iPhone|iPad|iPod|Android/i
      .test(
        navigator.userAgent
      );

    if (!isMobile)
      return;

    const alreadyOpened =

      sessionStorage.getItem(
        `vcard-opened-${slug}`
      );

    if (alreadyOpened)
      return;

    const timer = setTimeout(() => {

      window.location.href =
        `/api/vcard/${slug}`;

      sessionStorage.setItem(
        `vcard-opened-${slug}`,
        "1"
      );

    }, 1200);

    return () =>
      clearTimeout(timer);

  }, [slug]);

  return null;

}