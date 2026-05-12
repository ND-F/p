"use client";

import {
  useTheme,
} from "@/components/layout/ThemeProvider";

import {
  getThemeVariables,
} from "@/design/themeVariables";

import { design }
from "@/design/system";

type Props = {

  address: string;

};

export default function MapSection({
  address,
}: Props) {

  const { dark } =
    useTheme();

  const variables =
    getThemeVariables(dark);

  return (

    <section
      style={variables}

      className="
        px-6
        pb-40
      "
    >

      <div
        className={`
          max-w-6xl
          mx-auto

          overflow-hidden

          ${design.radius.section}

          border
          border-white/[0.05]
        `}
      >

        {/* HEADER */}
        <div
          className="
            px-8
            md:px-10

            py-10

            bg-[rgba(255,255,255,0.025)]
          "
        >

          <p
            className={`
              uppercase

              ${design.map.label}

              text-[var(--accent)]

              mb-4
            `}
          >
            Headquarters
          </p>

          <h2
            className={`
              ${design.map.title}

              leading-tight

              font-semibold

              tracking-tight

              max-w-4xl
            `}
          >
            {address}
          </h2>

        </div>

        {/* MAP */}
        <iframe
          src="https://www.google.com/maps?q=30.0914416,31.0241968&z=15&output=embed"

          className="
            w-full
            h-[420px]

            border-0
          "

          loading="lazy"
        />

      </div>

    </section>

  );

}