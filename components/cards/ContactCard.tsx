"use client";

import {
  useTheme,
} from "@/components/layout/ThemeProvider";

import { IconType } from "react-icons";

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

  return (

    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group
        relative
        overflow-hidden

        rounded-[26px]
        md:rounded-[30px]

        border
        backdrop-blur-2xl

        transition-all
        duration-500

        hover:-translate-y-[4px]
        active:scale-[0.985]

        ${
          dark
            ? `
              bg-[rgba(255,255,255,0.03)]
              border-white/[0.05]

              hover:bg-[rgba(255,255,255,0.055)]
              hover:border-white/[0.08]

              text-[#F5F1E8]
            `
            : `
              bg-[rgba(255,255,255,0.55)]
              border-black/[0.04]

              hover:bg-[rgba(255,255,255,0.74)]
              hover:border-black/[0.06]

              text-[#111111]
            `
        }

        shadow-[0_10px_35px_rgba(0,0,0,0.10)]
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]
      `}
    >

      {/* GLOW */}
      <div
        className={`
          absolute
          inset-0

          opacity-0

          group-hover:opacity-100

          transition-all
          duration-700

          pointer-events-none

          ${
            dark
              ? `
                bg-[linear-gradient(120deg,rgba(255,255,255,0.10),transparent_40%,rgba(255,255,255,0.04))]
              `
              : `
                bg-[linear-gradient(120deg,rgba(255,255,255,0.42),transparent_40%,rgba(255,255,255,0.16))]
              `
          }
        `}
      />

      <div
        className="
          relative
          z-10

          p-7
          md:p-10
        "
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
              text-[20px]
              md:text-[34px]

              transition-all
              duration-500

              group-hover:text-[#C6A46A]
              group-hover:scale-110

              ${
                dark
                  ? "text-white"
                  : "text-black"
              }
            `}
          >

            <Icon />

          </div>

        </div>

        {/* TEXT */}
        <div>

          <h3
            className={`
              text-[24px]
              md:text-[28px]

              font-semibold

              tracking-tight

              mb-2
              md:mb-3

              ${
                dark
                  ? "text-white"
                  : "text-black"
              }
            `}
          >
            {title}
          </h3>

          <p
            className={`
              text-[14px]
              md:text-[15px]

              leading-relaxed

              transition-colors
              duration-500

              ${
                dark
                  ? "text-white/55"
                  : "text-black/50"
              }
            `}
          >
            {value}
          </p>

        </div>

      </div>

      {/* BOTTOM LINE */}
      <div
        className="
          absolute
          bottom-0
          left-0

          h-[2px]
          w-0

          bg-[#C6A46A]

          transition-all
          duration-500

          group-hover:w-full
        "
      />

    </a>

  );

}