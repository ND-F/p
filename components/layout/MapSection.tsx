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
px-5
md:px-6

pb-36
"
    >

      <div
        className={`
max-w-6xl
mx-auto

overflow-hidden

${design.radius.section}

border

backdrop-blur-xl

${
  dark
    ? `
border-white/[0.05]

bg-[linear-gradient(145deg,rgba(10,22,25,0.88),rgba(5,14,16,0.94))]

shadow-[0_12px_40px_rgba(0,0,0,0.24)]
`
    : `
border-[#07181D]/[0.04]

bg-[linear-gradient(145deg,rgba(248,244,236,0.78),rgba(236,231,220,0.92))]

shadow-[0_10px_40px_rgba(0,0,0,0.05)]
`
}
`}
      >

        {/* HEADER */}
        <div
          className={`
px-7
md:px-10

pt-8
md:pt-10

pb-7
md:pb-9

border-b

${
  dark
    ? `
border-white/[0.04]

bg-transparent
`
    : `
border-[#07181D]/[0.04]

bg-[rgba(255,248,240,0.34)]
`
}
`}
        >

          <p
            className={`
uppercase

${design.map.label}

text-[var(--accent)]

opacity-90

mb-4
`}
          >
            Headquarters
          </p>

          <h2
            className={`
text-[20px]
md:text-[22px]

leading-[1.12]

font-semibold

tracking-[-0.045em]

max-w-5xl

transition-colors
duration-500

${
  dark
    ? "text-[#F5F1E8]"
    : "text-[#07181D]"
}

opacity-90
`}
          >
            {address}
          </h2>

        </div>

        {/* MAP */}
        <div
          className="
relative
overflow-hidden
"
        >

          <div
            className="
absolute
inset-0

pointer-events-none

bg-[linear-gradient(to_top,rgba(0,0,0,0.04),transparent_25%)]
"
          />

          <iframe
            src="https://www.google.com/maps?q=30.0914416,31.0241968&z=15&output=embed"

            className="
w-full

h-[360px]
md:h-[420px]

border-0

grayscale-[0.08]
contrast-[1.02]
"
            loading="lazy"
          />

        </div>

      </div>

    </section>

  );

}