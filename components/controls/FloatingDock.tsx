"use client";

import {
  useTheme,
} from "@/components/layout/ThemeProvider";

import {
  FiSun,
  FiMoon,
  FiShare2,
  FiDownload,
} from "react-icons/fi";

type Props = {
  employee: {
    name: string;
    title: string;
    company: string;
    email: string;
    phone: string;
  };
};

export default function FloatingDock({
  employee,
}: Props) {

  const {
    dark,
    toggleTheme,
  } = useTheme();

  const downloadVCF = () => {

    const vcf = `BEGIN:VCARD
VERSION:3.0
FN:${employee.name}
ORG:${employee.company}
TITLE:${employee.title}
TEL:${employee.phone}
EMAIL:${employee.email}
END:VCARD`;

    const blob = new Blob(
      [vcf],
      {
        type: "text/vcard",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      `${employee.name
        .toLowerCase()
        .replaceAll(" ", "-")}.vcf`;

    link.click();

    window.URL.revokeObjectURL(url);

  };

  const sharePage = async () => {

    if (navigator.share) {

      await navigator.share({
        title: employee.name,
        url: window.location.href,
      });

    } else {

      navigator.clipboard.writeText(
        window.location.href
      );

    }

  };

  return (

    <div
      className={`
        fixed
        bottom-5
        md:bottom-7

        left-1/2
        -translate-x-1/2

        z-50

        flex
        items-center

        gap-1.5
        md:gap-2

        px-2.5
        py-2.5

        md:px-3
        md:py-3

        rounded-full

        backdrop-blur-xl

        shadow-2xl

        transition-all
        duration-500

        ${
          dark
            ? `
              bg-[rgba(10,22,25,0.78)]
              border
              border-white/[0.05]
            `
            : `
              bg-[rgba(255,255,255,0.72)]
              border
              border-black/[0.06]
            `
        }
      `}
    >

      {/* SHARE */}
      <DockButton
        label="Share"
        onClick={sharePage}
        dark={dark}
      >
        <FiShare2 className="text-[16px] md:text-[18px]" />
      </DockButton>

      {/* THEME */}
      <DockButton
        label="Theme"
        onClick={toggleTheme}
        dark={dark}
      >

        {dark ? (
          <FiSun className="text-[16px] md:text-[18px]" />
        ) : (
          <FiMoon className="text-[16px] md:text-[18px]" />
        )}

      </DockButton>

      {/* SAVE */}
      <DockButton
        label="Save Contact"
        onClick={downloadVCF}
        dark={dark}
      >
        <FiDownload className="text-[16px] md:text-[18px]" />
      </DockButton>

    </div>

  );

}

type DockButtonProps = {

  children: React.ReactNode;

  label: string;

  onClick?: () => void;

  dark: boolean;

};

function DockButton({
  children,
  label,
  onClick,
  dark,
}: DockButtonProps) {

  return (

    <div className="relative group">

      <button
        onClick={onClick}
        className={`
          w-10
          h-10

          md:w-11
          md:h-11

          rounded-full

          flex
          items-center
          justify-center

          transition-all
          duration-300

          hover:text-[#C6A46A]
          hover:scale-110

          ${
            dark
              ? "text-white/80"
              : "text-black/70"
          }
        `}
      >

        {children}

      </button>

      {/* TOOLTIP */}
      <div
        className={`
          absolute

          bottom-[135%]
          left-1/2
          -translate-x-1/2

          px-3
          py-2

          rounded-full

          text-[10px]
          uppercase
          tracking-[0.22em]

          whitespace-nowrap

          opacity-0
          translate-y-2

          pointer-events-none

          transition-all
          duration-300

          group-hover:opacity-100
          group-hover:translate-y-0

          backdrop-blur-xl

          border

          shadow-xl

          ${
            dark
              ? `
                bg-[rgba(10,22,25,0.92)]
                border-white/[0.06]
                text-white
              `
              : `
                bg-[rgba(255,255,255,0.92)]
                border-black/[0.06]
                text-black
              `
          }
        `}
      >

        {label}

      </div>

    </div>

  );

}