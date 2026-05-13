export function getSurfaceStyles(dark: boolean) {
  if (dark) {
    return {
      // بدل الشفافية البيضاء، هنستخدم لون الـ Surface الغامق من الثيم
      background: "bg-[var(--surface)]",
      backgroundHover: "hover:bg-[var(--surface-hover)]",
      border: "border-[var(--border)]",
      borderHover: "hover:border-[var(--border-hover)]",
      text: "text-[#F5F1E8]",
      muted: "text-white/55",
      heading: "text-white",
    };
  }

  return {
    background: "bg-white/70",
    backgroundHover: "hover:bg-white/90",
    border: "border-black/[0.05]",
    borderHover: "hover:border-black/[0.08]",
    text: "text-[#111111]",
    muted: "text-black/50",
    heading: "text-black",
  };
}