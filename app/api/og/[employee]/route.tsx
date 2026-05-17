import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(
  req: Request,
  { params }: any
) {

  const employee =
    params.employee;

  return new ImageResponse(

    (
      <div
        style={{
          width: "1200px",
          height: "630px",

          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          alignItems: "center",

          position: "relative",

          background:
            "linear-gradient(180deg,#07181D 0%,#050D10 100%)",

          color: "#F5F1E8",

          overflow: "hidden",

          fontFamily: "sans-serif",
        }}
      >

        {/* PATTERN */}
        <div
          style={{
            position: "absolute",
            inset: 0,

            opacity: 0.08,

            backgroundImage:
              "url('https://id.nadimfoundation.org/patterns/pattern-light.svg')",

            backgroundSize: "140px 140px",
          }}
        />

        {/* GLOW */}
        <div
          style={{
            position: "absolute",

            width: 700,
            height: 260,

            borderRadius: 999,

            background:
              "rgba(198,164,106,0.10)",

            filter: "blur(120px)",
          }}
        />

        {/* LOGO */}
        <img
          src="https://id.nadimfoundation.org/logos/logo-light.png"

          width="180"
          height="180"

          style={{
            objectFit: "contain",
            marginBottom: 20,
          }}
        />

        {/* NAME */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,

            letterSpacing: "-0.05em",

            lineHeight: 1,

            marginBottom: 24,
          }}
        >
          {employee.toUpperCase()}
        </div>

        {/* DIVIDER */}
        <div
          style={{
            display: "flex",
            alignItems: "center",

            gap: 20,

            marginBottom: 26,
          }}
        >

          <div
            style={{
              width: 180,
              height: 1,

              background:
                "rgba(198,164,106,0.65)",
            }}
          />

          <div
            style={{
              width: 10,
              height: 10,

              background: "#C6A46A",

              transform: "rotate(45deg)",
            }}
          />

          <div
            style={{
              width: 180,
              height: 1,

              background:
                "rgba(198,164,106,0.65)",
            }}
          />

        </div>

        {/* SUBTITLE */}
        <div
          style={{
            fontSize: 32,

            letterSpacing: "0.35em",

            textTransform: "uppercase",

            opacity: 0.7,
          }}
        >
          Nadim Foundation
        </div>

      </div>
    ),

    {
      width: 1200,
      height: 630,
    }

  );

}