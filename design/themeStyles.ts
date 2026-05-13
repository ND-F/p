export function getSurfaceStyles(dark: boolean) {
  if (dark) {
    return {
      // بدل الشفافية البيضاء، هنستخدم لون الـ Surface الغامق من الثيم
      background:
           "bg-[rgba(255,255,255,0.03)]",
      backgroundHover:
            "hover:bg-[rgba(255,255,255,0.055)]",
      border: "border-[var(--border)]",
      borderHover: "hover:border-[var(--border-hover)]",
      text: "text-[#F5F1E8]",
      muted: "text-white/55",
      heading: "text-white",
    };
  }

  return {
  background:
    "bg-[rgba(255,255,255,0.55)]",

  backgroundHover:
    "hover:bg-[rgba(255,255,255,0.74)]",

  border:
    "border-black/[0.04]",

  borderHover:
    "hover:border-black/[0.06]",

  text:
    "text-[#111111]",

  muted:
    "text-black/50",

  heading:
    "text-black",
};
}