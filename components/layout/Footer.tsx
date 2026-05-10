export default function Footer() {

  return (

    <footer
      className="
        px-6
        pb-10
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto

          pt-8

          border-t
          border-white/[0.05]

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-5
        "
      >

        <div>

          <p
            className="
              text-[13px]

              tracking-[0.18em]

              uppercase

              text-white/35
            "
          >
            NADIM Industries
          </p>

        </div>

        <div>

          <p
            className="
              text-[12px]

              text-white/30
            "
          >
            Executive Identity System
          </p>

        </div>

      </div>

    </footer>

  );

}