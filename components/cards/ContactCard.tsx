"use client";

import { useTheme } from "@/components/layout/ThemeProvider";
import { getSurfaceStyles } from "@/design/themeStyles";
import { IconType } from "react-icons";

import { design } from "@/design/system";
import { motion } from "@/design/motion";

type Props = {
  title: string;
  value: string;
  href: string;
  icon: IconType;
};

export default function ContactCard({
  title,
  value,
  href,
  icon: Icon,
}: Props) {

  const { dark } = useTheme();

  const surface =
    getSurfaceStyles(dark);

  return (

    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"

      className={`
group
relative

block
w-full
min-h-[260px]

flex
flex-col
justify-between

overflow-hidden

border

${
  dark
    ? "bg-[linear-gradient(145deg,rgba(10,22,25,0.88),rgba(5,14,16,0.94))]"
    : "bg-[rgba(248,244,236,0.78)]"
}

${design.radius.card}
${design.glass.card}

${motion.smooth}
${motion.hoverLift}

${design.shadows.card}

${surface.border}
${surface.text}

${
  dark
    ? `
hover:bg-[linear-gradient(145deg,rgba(12,26,30,0.94),rgba(7,18,20,0.98))]
hover:border-white/[0.07]
`
    : `
hover:bg-[rgba(252,248,242,0.92)]
hover:border-black/[0.05]
`
}

transition-all
duration-500
`}
    >

      {/* GLOW */}
      <div
        className={`
absolute
inset-0

opacity-0
group-hover:opacity-100

pointer-events-none

transition-all
duration-700

${
  dark
    ? design.glow.dark
    : design.glow.light
}
`}
      />

      {/* REFLECTIVE LAYER */}
      <div
        className="
absolute
inset-0

pointer-events-none

opacity-40

bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_42%)]
"
      />

      {/* CONTENT */}
      <div
        className="
relative
z-10
h-full

flex
flex-col
justify-between

p-7
md:p-8
"
      >

        <div>

          {/* ICON + LABEL */}
          <div
            className="
flex
items-center
gap-3

mb-10
md:mb-12
"
          >

            <div
              className={`
text-[22px]
md:text-[28px]

${surface.heading}

transition-all
duration-500

group-hover:text-[var(--accent)]
group-hover:scale-105
`}
            >
              <Icon />
            </div>

            <span
              className="
text-[11px]
md:text-[12px]

uppercase

tracking-[0.18em]

text-[#C6A46A]
opacity-70

font-medium
"
            >
              {title}
            </span>

          </div>

          {/* VALUE */}
          <div>

            <p
              className={`
text-[13px]
md:text-[19px]

font-medium

leading-[1.32]

tracking-[-0.03em]

break-words

transition-colors
duration-500

${
  dark
    ? "text-[#E7E1D6]"
    : "text-[#07181D]"
}

opacity-82
`}
            >
              {value}
            </p>

          </div>

        </div>

      </div>

      {/* GOLD LINE */}
      <div
        className="
absolute
bottom-0
left-0

h-[2px]
w-0

bg-[var(--accent)]

transition-all
duration-500

group-hover:w-full
"
      />

    </a>

  );

}