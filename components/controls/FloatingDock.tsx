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

left-1/2
bottom-5
md:bottom-7

-translate-x-1/2

z-50

flex
items-center

gap-2

px-5
py-4

md:px-6
md:py-4

border

${design.radius.dock}

${motion.smooth}

backdrop-blur-[26px]

${
  dark
    ? `
bg-[rgba(7,24,29,0.72)]
border-white/[0.04]
shadow-[0_10px_35px_rgba(0,0,0,0.28)]
`
    : `
bg-[rgba(255,255,255,0.72)]
border-black/[0.03]
shadow-[0_10px_30px_rgba(0,0,0,0.06)]
`
}
`}
    >

      {/* SHARE */}
      <DockButton
        label="Share"
        onClick={sharePage}
        heading={surface.heading}
        dark={dark}
      >
        <FiShare2 className="text-[17px] md:text-[18px]" />
      </DockButton>

      {/* THEME */}
      <DockButton
        label="Theme"
        onClick={toggleTheme}
        heading={surface.heading}
        dark={dark}
      >

        {dark ? (
          <FiSun className="text-[17px] md:text-[18px]" />
        ) : (
          <FiMoon className="text-[17px] md:text-[18px]" />
        )}

      </DockButton>

      {/* SAVE */}
      <DockButton
        label="Save Contact"
        onClick={downloadVCF}
        heading={surface.heading}
        dark={dark}
      >
        <FiDownload className="text-[17px] md:text-[18px]" />
      </DockButton>

    </div>

  );

}

type DockButtonProps = {

  children: React.ReactNode;

  label: string;

  onClick?: () => void;

  heading: string;

  dark: boolean;

};

function DockButton({
  children,
  label,
  onClick,
  heading,
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

flex
items-center
justify-center

rounded-full

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

bottom-[140%]
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

group-hover:opacity-100
group-hover:translate-y-0

transition-all
duration-300

rounded-full

backdrop-blur-[20px]

${
  dark
    ? `
bg-[rgba(7,24,29,0.92)]
border border-white/[0.05]
text-white
`
    : `
bg-[rgba(255,255,255,0.92)]
border border-black/[0.04]
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