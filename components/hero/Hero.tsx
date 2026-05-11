"use client";

import Image from "next/image";

import {
  useTheme,
} from "@/components/layout/ThemeProvider";

import { motion } from "framer-motion";

type Props = {

  name: string;

  title: string;

  theme: {
  background: string;

  foreground: string;

  muted: string;

  accent: string;

  logoLight: string;

  logoDark: string;

  brandName: string;
};

};

export default function Hero({
  name,
  title,
  theme,
}: Props) {

  const { dark } =
    useTheme();

  return (

    <section
      className="
        relative
        h-[58vh]
        min-h-[520px]
        overflow-hidden
        flex
        items-center
        justify-center
        px-6
      "
      style={{
        background: dark
          ? theme.background
          : "#F4F1E8",

        color: dark
          ? theme.foreground
          : "#121212",
      }}
    >

      {/* PATTERN */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          pointer-events-none
        "
        style={{
          backgroundImage: dark
            ? "url('/patterns/pattern-light.svg')"
            : "url('/patterns/pattern-dark.svg')",

          backgroundSize: "120px 120px",
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
          <motion.div
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
                "radial-gradient(circle,#C6A46A,transparent 72%)",
            }}
          />

          {/* BLUE GLOW */}
          <motion.div
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
                "radial-gradient(circle,#0F3A46,transparent 72%)",
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

            <div
              className="
                relative
                w-[52px]
                h-[52px]
              "
            >

              <Image
                src={
                      dark
                        ? theme.logoLight
                        : theme.logoDark
                    }
                alt={theme.brandName}
                fill
                priority
                sizes="74px"
                className="object-contain"
              />

            </div>

            <div>

              <h2
                className="
                  text-[16px]
                  font-semibold
                  tracking-tight
                "
              >
                NADIM
              </h2>

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                  mt-1
                "
                style={{
                  color: dark
                    ? theme.muted
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

      <motion.div
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

          <div className="relative w-[150px] h-[150px] md:w-[190px] md:h-[190px]">

            <Image
              src={
                dark
                  ? "/logos/logo-light.png"
                  : "/logos/logo-dark.png"
              }
              alt="NADIM"
              fill
              priority
              sizes="190px"
              className="object-contain opacity-95"
            />

          </div>

        </div>

        {/* NAME */}
        <h1
          className="
            text-[42px]
            sm:text-[52px]
            md:text-[82px]
            leading-[0.92]
            tracking-[-0.07em]
            font-black
            mb-4
          "
        >
          {name}
        </h1>

        {/* GOLD DIVIDER */}
        <div className="flex items-center justify-center gap-6 mb-6">

          <div
            className="w-[60px] md:w-[90px] h-px"
            style={{
              background: `${theme.accent}88`,
            }}
          />

          <div
            className="
              w-[8px]
              h-[8px]
              rotate-45
            "
            style={{
              background: theme.accent,
            }}
          />

          <div
            className="w-[60px] md:w-[90px] h-px"
            style={{
              background: `${theme.accent}88`,
            }}
          />

        </div>

        {/* TITLE */}
        <p
          className="
            uppercase
            tracking-[0.34em]
            text-[12px]
            md:text-[15px]
          "
          style={{
            color: dark
              ? theme.muted
              : "rgba(0,0,0,0.55)",
          }}
        >
          {title}
        </p>

      </motion.div>

    </section>

  );

}