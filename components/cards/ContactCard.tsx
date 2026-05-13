"use client";
import { useTheme } from "@/components/layout/ThemeProvider";
import { getSurfaceStyles } from "@/design/themeStyles";
import { IconType } from "react-icons";
import { design } from "@/design/system";
import { motion } from "@/design/motion";

export default function ContactCard({ title, value, href, icon: Icon }: { title: string; value: string; href: string; icon: IconType }) {
  const { dark } = useTheme();
  const surface = getSurfaceStyles(dark);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative overflow-hidden border
        ${design.radius.card} 
        ${design.glass.card} 
        ${motion.smooth} 
        ${motion.hoverLift}
        ${design.shadows.card}
        ${surface.background} 
        ${surface.border} 
        ${surface.text}
        transition-all duration-500
      `}
    >
      {/* اللمعة عند الهوفر - فقط تظهر عند تمرير الماوس */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 ${dark ? design.glow.dark : design.glow.light}`} />

      {/* CONTENT */}
      <div className={`relative z-10 ${design.spacing.cardPadding}`}>
        <div className="mb-8 md:mb-12">
          <div className={`${design.typography.icon} group-hover:text-[var(--accent)] group-hover:scale-110 transition-transform duration-500 ${surface.heading}`}>
            <Icon />
          </div>
        </div>
        <div>
          <h3 className={`${design.typography.cardTitle} font-semibold tracking-tight mb-1 ${surface.heading}`}>{title}</h3>
          <p className={`${design.typography.body} opacity-70`}>{value}</p>
        </div>
      </div>

      {/* الخط الذهبي السفلي */}
      <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full`} />
    </a>
  );
}