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
      "p-7 md:p-10",

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
      hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]
      `,

    cardHover:
      `
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]
      `,

  },

  glow: {

    dark:
      `
        bg-[linear-gradient(
          120deg,
          rgba(255,255,255,0.10),
          transparent_40%,
          rgba(255,255,255,0.04)
        )]
      `,

    light:
      `
        bg-[linear-gradient(
          120deg,
          rgba(255,255,255,0.10),
          transparent_40%,
          rgba(255,255,255,0.04)
        )]
      `,

    reflective:
      `
        bg-[radial-gradient(
          circle_at_top_left,
          rgba(255,255,255,0.06),
          transparent_45%
        )]
      `,

  },

  hero: {

  container:
    "h-[48vh] min-h-[420px] md:min-h-[540px]",

  title:
    "text-[38px] sm:text-[54px] md:text-[078px] lg:text-[092px]",

  subtitle:
    "text-[14px] md:text-[19px]",

  logo:
    "w-[150px] h-[150px] md:w-[190px] md:h-[190px]",

  divider:
    "w-[120px]",

},

  map: {

    title:
      "text-[28px] md:text-[40px]",

    label:
      "text-[11px] tracking-[0.28em]",

  },

};