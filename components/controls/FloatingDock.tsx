
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

import {
  FiSun,
  FiMoon,
  FiShare2,
  FiDownload,
} from "react-icons/fi";

import { design }
from "@/design/system";

import { motion }
from "@/design/motion";

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

  const surface =
    getSurfaceStyles(dark);

  const variables =
    getThemeVariables(dark);

  /* DOWNLOAD CONTACT */
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

  /* SHARE PAGE */
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
      style={variables}

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

        border

        ${design.radius.dock}

        ${design.glass.dock}

        ${design.shadows.card}

        ${motion.smooth}

        ${surface.background}

        ${surface.border}
      `}
    >

      {/* SHARE */}
      <DockButton
        label="Share"
        onClick={sharePage}
        heading={surface.heading}
      >
        <FiShare2 className="text-[16px] md:text-[18px]" />
      </DockButton>

      {/* THEME */}
      <DockButton
        label="Theme"
        onClick={toggleTheme}
        heading={surface.heading}
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
        heading={surface.heading}
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

  heading: string;

};

function DockButton({
  children,
  label,
  onClick,
  heading,
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

          flex
          items-center
          justify-center

          ${design.radius.dock}

          ${motion.smooth}

          ${heading}

          hover:text-[var(--accent)]

          hover:scale-110
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

          whitespace-nowrap

          uppercase

          text-[10px]

          tracking-[0.22em]

          opacity-0

          translate-y-2

          pointer-events-none

          border

          group-hover:opacity-100

          group-hover:translate-y-0

          ${design.radius.dock}

          ${design.glass.dock}

          ${motion.fade}

          bg-[rgba(10,22,25,0.92)]

          border-white/[0.06]

          text-white
        `}
      >

        {label}

      </div>

    </div>

  );

}