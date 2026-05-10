type Props = {
  address: string;
};

export default function MapSection({
  address,
}: Props) {

  return (

    <section
      className="
        px-6
        pb-40
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto

          overflow-hidden

          rounded-[36px]

          border
          border-white/[0.05]
        "
      >

        <div
          className="
            px-8
            md:px-10

            py-10

            bg-[rgba(255,255,255,0.025)]
          "
        >

          <p
            className="
              uppercase

              tracking-[0.28em]

              text-[11px]

              text-[#C6A46A]

              mb-4
            "
          >
            Headquarters
          </p>

          <h2
            className="
              text-[28px]
              md:text-[40px]

              leading-tight

              font-semibold

              tracking-tight

              max-w-4xl
            "
          >
            {address}
          </h2>

        </div>

        <iframe
          src="
https://www.google.com/maps?q=30.0914416,31.0241968&z=15&output=embed
          "
          className="
            w-full
            h-[420px]
            border-0
          "
          loading="lazy"
        />

      </div>

    </section>

  );

}