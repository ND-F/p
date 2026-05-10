type Props = {
  dark?: boolean;
};

export default function PatternOverlay({
  dark = true,
}: Props) {

  return (

    <div className="absolute inset-0 pointer-events-none">

      <div
        className={`
          absolute
          inset-0
          ${
            dark
              ? "opacity-[0.035]"
              : "opacity-[0.05]"
          }
        `}
        style={{

          backgroundImage:
            "url('/patterns/pattern-light.svg')",

          backgroundSize: "120px 120px",

          backgroundRepeat: "repeat",

          backgroundPosition: "center",

        }}
      />

    </div>

  );

}