
"use client";

import {
  useTheme,
} from "@/components/layout/ThemeProvider";

import {
  getThemeVariables,
} from "@/design/themeVariables";

import { design }
from "@/design/system";

import { motion as fm }
from "framer-motion";

type Props = {

  name: string;

  title: string;

  theme: any;

};

export default function Hero({
  name,
  title,
  theme,
}: Props) {

  const { dark } =
    useTheme();

  const variables =
    getThemeVariables(dark);

  const logo =
    dark
      ? theme.logos.light
      : theme.logos.dark;

  return (

    <section
      style={{
        ...variables,

        background:
          dark
            ? theme.colors.background
            : "#F4F1E8",

        color:
          dark
            ? theme.colors.foreground
            : "#111111",
      }}

      className={`
        relative

        ${design.hero.container}

        overflow-hidden

        flex
        items-center
        justify-center

        px-6
      `}
    >

      {/* PATTERN */}
      <div
        className={`
          absolute
          inset-0

          pointer-events-none

          ${
            dark
              ? "opacity-[0.035]"
              : "opacity-[0.05]"
          }
        `}
        style={{
          backgroundImage:
            dark
              ? "url('/patterns/pattern-light.svg')"
              : "url('/patterns/pattern-dark.svg')",

          backgroundSize:
            "120px 120px",
        }}
      />

      {/* CINEMATIC GLOWS */}
      {dark && (

        <div
          className="
            absolute
            inset-0

            overflow-hidden

            pointer-events-none
          "
        >

          {/* GOLD GLOW */}
          <fm.div
            animate={{
              x: [0, 40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              top-[-140px]
              left-[-120px]

              w-[420px]
              h-[420px]

              rounded-full

              blur-[120px]

              opacity-[0.12]
            "
            style={{
              background:
                'radial-gradient(circle,var(--accent),transparent 72%)',
            }}
          />

          {/* BLUE GLOW */}
          <fm.div
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[-220px]
              right-[-140px]

              w-[500px]
              h-[500px]

              rounded-full

              blur-[140px]

              opacity-[0.18]
            "
            style={{
              background:
                'radial-gradient(circle,#0F3A46,transparent 72%)',
            }}
          />

        </div>

      )}

      {/* TOP BAR */}
      <div
        className="
          absolute
          top-0
          left-0

          w-full

          z-20
        "
      >

        <div
          className="
            w-full

            px-4
            md:px-8

            py-8

            flex
            items-center
          "
        >

          <div
            className="
              flex
              items-center

              gap-5
            "
          >

            <div className="shrink-0">

              <img
                src={logo}
                alt={theme.brand.name}
                className="
                  w-[52px]
                  h-[52px]

                  object-contain
                "
              />

            </div>



              <div
                className="
                  absolute
                  inset-0

                  pointer-events-none

                  opacity-[0.16]

                  blur-[120px]
                "
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, #0F3A46, transparent 42%)",
                }}
              />

            <div>

              <h2
                className="
                  text-[16px]

                  font-semibold

                  tracking-tight
                "
              >
                {theme.brand.name}
              </h2>

              <p
                className="
                  text-[11px]

                  uppercase

                  tracking-[0.28em]

                  mt-1
                "
                style={{
                  color:
                    dark
                      ? theme.colors.muted
                      : "rgba(0,0,0,0.45)",
                }}
              >
                Since 1978
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* HERO CONTENT */}
      <fm.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}

        className="
          relative
          z-10

          text-center

          -translate-y-8
          md:-translate-y-10
        "
      >

        {/* MAIN LOGO */}
        <div className="flex justify-center mb-1">

          <div
            className={`
              ${design.hero.logo}

              flex
              items-center
              justify-center
            `}
          >

            <img
              src={logo}
              alt={theme.brand.name}
              className="
                w-[190px]
                h-[190px]

                object-contain

                opacity-95
              "
            />

          </div>

        </div>

        {/* NAME */}
        <h1
          className={`
            ${design.hero.title}

            leading-[0.92]

            tracking-[-0.07em]

            font-black

            mb-4
          `}
        >
          {name}
        </h1>

        {/* DIVIDER */}
        <div className="flex items-center justify-center gap-6 mb-6">

          <div
            className={`
              ${design.hero.divider}

              h-px
            `}
            style={{
              background:
                `${theme.colors.accent}88`,
            }}
          />

          <div
            className="
              w-[8px]
              h-[8px]

              rotate-45

              bg-[var(--accent)]
            "
          />

          <div
            className={`
              ${design.hero.divider}

              h-px
            `}
            style={{
              background:
                `${theme.colors.accent}88`,
            }}
          />

        </div>

        {/* TITLE */}
        <p
          className={`
            uppercase

            tracking-[0.34em]

            ${design.hero.subtitle}
          `}
          style={{
            color:
              dark
                ? theme.colors.muted
                : "rgba(0,0,0,0.55)",
          }}
        >
          {title}
        </p>

      </fm.div>

    </section>

  );

}