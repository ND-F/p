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

${
  dark
    ? `
border-white/[0.05]
bg-[rgba(255,255,255,0.03)]
`
    : `
border-black/[0.04]
bg-[rgba(255,255,255,0.82)]
shadow-[0_10px_30px_rgba(0,0,0,0.04)]
`
}
`}
      >

        {/* HEADER */}
        <div
          className={`
px-7
md:px-10

py-8
md:py-10

${
  dark
    ? "bg-[rgba(255,255,255,0.02)]"
    : "bg-[rgba(255,255,255,0.55)]"
}
`}
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

leading-[1.12]

font-semibold

tracking-[-0.035em]

max-w-4xl

${
  dark
    ? "text-white"
    : "text-[#111111]"
}
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