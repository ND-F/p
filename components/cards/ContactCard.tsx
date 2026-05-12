
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

import { IconType } from "react-icons";

import { design }
from "@/design/system";

import { motion }
from "@/design/motion";

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

  const { dark } =
    useTheme();

  const surface =
    getSurfaceStyles(dark);

  const variables =
    getThemeVariables(dark);

  return (

    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"

      style={variables}

      className={`
        group
        relative
        overflow-hidden

        border

        transform-gpu
        will-change-transform

        active:scale-[0.985]

        ${design.radius.card}

        ${design.glass.card}

        ${motion.smooth}

        ${motion.hoverLift}

        ${design.shadows.card}

        ${design.shadows.cardHover}

        ${surface.background}

        ${surface.backgroundHover}

        ${surface.border}

        ${surface.borderHover}

        ${surface.text}
      `}
    >

        {
  dark && (

    <div
      className="
        absolute
        inset-0

        opacity-[0.38]

        pointer-events-none

        bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_42%)]
      "
    />

  )
}

      {/* MAIN GLOW */}
      <div
        className={`
          absolute
          inset-0

          opacity-0

          group-hover:opacity-100

          pointer-events-none

          ${motion.smooth}

          ${
            dark
              ? design.glow.dark
              : design.glow.light
          }
        `}
      />

      {/* REFLECTIVE LIGHT */}
      <div
        className={`
          absolute
          inset-0

          opacity-0

          group-hover:opacity-100

          pointer-events-none

          ${motion.smooth}

          ${design.glow.reflective}
        `}
      />

      {/* CONTENT */}
      <div
        className={`
          relative
          z-10

          ${design.spacing.cardPadding}
        `}
      >

        {/* ICON */}
        <div
          className="
            mb-10
            md:mb-14
          "
        >

          <div
            className={`
              ${design.typography.icon}

              ${motion.icon}

              group-hover:text-[var(--accent)]

              group-hover:scale-110

              group-hover:-translate-y-[2px]

              ${surface.heading}
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

              mb-2
              md:mb-3

              ${motion.fade}

              group-hover:tracking-[-0.015em]

              ${surface.heading}
            `}
          >
            {title}
          </h3>

          <p
            className={`
              ${design.typography.body}

              leading-relaxed

              ${motion.fade}

              group-hover:translate-x-[1px]

              ${surface.muted}
            `}
          >
            {value}
          </p>

        </div>

      </div>

      {/* ACCENT LINE */}
      <div
        className={`
          absolute
          bottom-0
          left-0

          h-[2px]

          w-0

          ${motion.smooth}

          group-hover:w-full

          group-hover:shadow-[0_0_14px_rgba(198,164,106,0.55)]

          bg-[var(--accent)]
        `}
      />

    </a>

  );

}
