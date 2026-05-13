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

  const surface = getSurfaceStyles(dark);

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
min-h-[26px]

flex
flex-col
justify-between

overflow-hidden

border

${
  dark
    ? "bg-[rgba(255,255,255,0.03)]"
    : "bg-[rgba(255,255,255,0.55)]"
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
hover:bg-[rgba(255,255,255,0.055)]
hover:border-white/[0.08]
`
    : `
hover:bg-[rgba(255,255,255,0.82)]
hover:border-black/[0.06]
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
opacity-60
bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_42%)]
"
      />

      {/* CONTENT */}
      <div
        className={`
relative
z-10
h-full

flex
flex-col
justify-between

p-6 md:p-7
`}
      >
        <div>
          {/* ICON */}
          <div className="mb-8 md:mb-12">
            <div
              className={`
text-[18px] md:text-[28px]
${surface.heading}

transition-all
duration-500

group-hover:text-[var(--accent)]
group-hover:scale-110
`}
            >
              <Icon />
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h3
              className={`
${design.typography.cardTitle}
font-semibold
tracking-tight
mb-1

${surface.heading}
`}
            >
              {title}
            </h3>

            <p
              className={`
${design.typography.body}
opacity-70
break-words
leading-relaxed
max-w-full
overflow-hidden
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