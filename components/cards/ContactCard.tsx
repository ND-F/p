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

  return (

    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        glass-card
        group
        relative
        overflow-hidden

        rounded-[26px]
        md:rounded-[32px]

        border
        border-white/[0.05]

        bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(10,22,25,0.88))]

        backdrop-blur-2xl

        transition-all
        duration-500

        hover:-translate-y-[6px]

        shadow-[0_10px_35px_rgba(0,0,0,0.10)]
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute
          inset-0

          opacity-0

          group-hover:opacity-100

          transition-all
          duration-700

          pointer-events-none

          bg-[linear-gradient(120deg,rgba(255,255,255,0.12),transparent_38%,rgba(255,255,255,0.03))]
        "
      />

      <div
        className="
          relative
          z-10

          p-7
          md:p-11
        "
      >

        {/* ICON */}
        <div className="mb-10
                        md:mb-12">

          <div
            className="
              text-[24px]
              md:text-[28px]

              transition-all
              duration-700

              group-hover:text-[#C6A46A]
              group-hover:scale-110
            "
          >

            <Icon />

          </div>

        </div>

        {/* TEXT */}
        <div>

          <h3
            className="
              text-[28px]
              font-semibold
              tracking-tight
              mb-3
            "
          >
            {title}
          </h3>

          <p
            className="
              text-[14px]
              md:text-[15px]
              leading-relaxed
              text-white/60
            "
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