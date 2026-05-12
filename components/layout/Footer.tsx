
"use client";

import {
  useTheme,
} from "@/components/layout/ThemeProvider";

import {
  getSurfaceStyles,
} from "@/design/themeStyles";

import {
  getThemeVariables,
} from "@/design/themeVariables";

import { design }
from "@/design/system";

type Props = {

  brand?: string;

  systemName?: string;

};

export default function Footer({
  brand = "NADIM Industries",
  systemName = "Executive Identity System",
}: Props) {

  const { dark } =
    useTheme();

  const surface =
    getSurfaceStyles(dark);

  const variables =
    getThemeVariables(dark);

  return (

    <footer
      style={variables}

      className="
        px-6
        pb-10
      "
    >

      <div
        className={`
          max-w-6xl
          mx-auto

          pt-8

          border-t

          ${surface.border}

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-5
        `}
      >

        {/* BRAND */}
        <div>

          <p
            className={`
              text-[13px]

              tracking-[0.18em]

              uppercase

              ${surface.muted}
            `}
          >
            {brand}
          </p>

        </div>

        {/* SYSTEM */}
        <div>

          <p
            className={`
              text-[12px]

              ${surface.muted}
            `}
          >
            {systemName}
          </p>

        </div>

      </div>

    </footer>

  );

}