
export const design = {

  radius: {

    card:
      "rounded-[26px] md:rounded-[30px]",

    section:
      "rounded-[36px]",

    dock:
      "rounded-full",

  },

  glass: {

    card:
      "backdrop-blur-2xl",

    dock:
      "backdrop-blur-xl",

  },

  spacing: {

    cardPadding:
      "p-6 md:p-8",

    sectionX:
      "px-6",

  },

  typography: {

    cardTitle:
      "text-[24px] md:text-[28px]",

    body:
      "text-[14px] md:text-[15px]",

    icon:
      "text-[20px] md:text-[34px]",

  },

  shadows: {

    card:
      `
        shadow-[0_10px_35px_rgba(0,0,0,0.10)]
      `,

    cardHover:
      `
        hover:shadow-[0_35px_80px_rgba(0,0,0,0.28)]
      `,

  },

  glow: {

    dark:
      `
        bg-[linear-gradient(
          120deg,
          rgba(255,255,255,0.16),
          transparent_38%,
          rgba(255,255,255,0.06)
        )]
      `,

    light:
      `
        bg-[linear-gradient(
          120deg,
          rgba(255,255,255,0.22),
          transparent_42%,
          rgba(255,255,255,0.10)
        )]
      `,

    reflective:
      `
        bg-[radial-gradient(
          circle_at_top_left,
          rgba(255,255,255,0.10),
          transparent_45%
        )]
      `,

  },

  hero: {

    container:
      "h-[60vh] min-h-[520px]",

    title:
      "text-[42px] sm:text-[52px] md:text-[82px]",

    subtitle:
      "text-[12px] md:text-[15px]",

    logo:
      "w-[150px] h-[150px] md:w-[190px] md:h-[190px]",

    divider:
      "w-[60px] md:w-[90px]",

  },

  map: {

    title:
      "text-[28px] md:text-[40px]",

    label:
      "text-[11px] tracking-[0.28em]",

  },

};