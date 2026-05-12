export function getSurfaceStyles(
  dark: boolean
) {

  if (dark) {

    return {

        
      background:
        "bg-[rgba(255,255,255,0.03)]",

      backgroundHover:
        "hover:bg-[rgba(255,255,255,0.055)]",

      border:
        "border-white/[0.05]",

      borderHover:
        "hover:border-white/[0.08]",

      text:
        "text-[#F5F1E8]",

      muted:
        "text-white/55",

      heading:
         "text-white",
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