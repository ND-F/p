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

const topBarLogo =
  dark
    ? "/logos/logo-industries-light.png"
    : "/logos/logo-industries-dark.png";

  return (

    <section
      id="og-hero"

      style={{
        ...variables,

        background:
          dark
            ? theme.colors.background
            : "#ECE7DC",

        color:
          dark
            ? theme.colors.foreground
            : "#07181D",
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
        className="
absolute
inset-0

pointer-events-none

opacity-[0.055]
"
        style={{
          backgroundImage:
            dark
              ? "url('/patterns/pattern-light.svg')"
              : "url('/patterns/pattern-dark.svg')",

          backgroundSize:
            "120px 120px",
        }}
      />

      {/* NOISE */}
      <div className="noise pointer-events-none absolute inset-0 z-[1]" />

      {/* VIGNETTE */}
      <div
        className="
absolute
inset-0

pointer-events-none

z-[2]

bg-[radial-gradient(circle,transparent_42%,rgba(0,0,0,0.42)_100%)]
"
      />

      {/* CENTER GLOW */}
      <div
        className="
absolute
left-1/2
top-1/2

-translate-x-1/2
-translate-y-1/2

w-[720px]
h-[280px]

rounded-full

bg-[#C6A46A]/[0.06]

blur-[120px]

pointer-events-none

z-[2]
"
      />

      {/* CINEMATIC LIGHT */}
      <fm.div
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
absolute
inset-0

pointer-events-none

z-[2]

bg-[radial-gradient(circle_at_center,rgba(198,164,106,0.08),transparent_46%)]
"
      />

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

pt-0
md:pt-2

flex
items-center
"
        >

          <div
            className="
flex
items-center

gap-3
md:gap-5
"
          >

            <img
              src={topBarLogo}
              alt={theme.brand.name}
              className="
w-[40px]
h-[40px]

md:w-[82px]
md:h-[82px]

object-contain

opacity-90
"
            />

            <div>

              <h2
                className="
text-[14px]
md:text-[16px]

font-semibold

tracking-[-0.04em]

leading-none
"
              >
                {theme.brand.name}
              </h2>

              <p
                className="
mt-1.5

text-[9px]
md:text-[11px]

uppercase

tracking-[0.24em]
md:tracking-[0.28em]

opacity-55
"
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

-translate-y-10
md:-translate-y-6
"
      >

        {/* MAIN LOGO */}
        <div className="flex justify-center mb-0 md:mb-1">

          <img
            src={logo}
            alt={theme.brand.name}
            className="
w-[145px]
h-[145px]

md:w-[250px]
md:h-[250px]

object-contain

opacity-95

drop-shadow-[0_0_60px_rgba(255,255,255,0.03)]
"
          />

        </div>

        {/* NAME */}
        <h1
          className={`
${design.hero.title}

whitespace-nowrap

leading-[0.9]

tracking-[-0.05em]

font-black

mb-3
md:mb-4

${
  dark
  ? "text-[#EAE8D8]"
  : "text-[#07181D]"
}

drop-shadow-[0_0_40px_rgba(255,255,255,0.04)]
`}
        >
          {name}
        </h1>

        {/* DIVIDER */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-5 md:mb-6">

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
w-[7px]
h-[7px]

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

tracking-[0.26em]
md:tracking-[0.34em]

${design.hero.subtitle}
`}
          style={{
            color:
              dark
  ? "rgba(245,241,232,0.68)"
  : "rgba(7,24,29,0.58)"
          }}
        >
          {title}
        </p>

      </fm.div>

    </section>

  );

}