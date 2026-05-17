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
        }}
      >

        {/* BG PATTERN */}
        <div
          style={{
            position: "absolute",
            inset: 0,

            opacity: 0.08,

            backgroundImage:
              "radial-gradient(circle at center, rgba(198,164,106,0.15), transparent 60%)",
          }}
        />

        {/* LOGO */}
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,

            letterSpacing: "-0.04em",

            marginBottom: 40,

            zIndex: 2,
          }}
        >
          NADIM
        </div>

        {/* NAME */}
        <div
          style={{
            fontSize: 110,
            fontWeight: 800,

            letterSpacing: "-0.06em",

            color: "#F5F1E8",

            textTransform: "capitalize",

            zIndex: 2,

            textShadow:
              "0 0 40px rgba(255,255,255,0.05)",
          }}
        >
          {employee}
        </div>

        {/* LINE */}
        <div
          style={{
            width: 420,
            height: 1,

            background:
              "rgba(198,164,106,0.5)",

            marginTop: 42,
            marginBottom: 34,

            zIndex: 2,
          }}
        />

        {/* TITLE */}
        <div
          style={{
            fontSize: 34,

            letterSpacing: "0.35em",

            textTransform: "uppercase",

            color:
              "rgba(245,241,232,0.72)",

            zIndex: 2,
          }}
        >
          Executive Identity
        </div>

      </div>
    ),

    {
      width: 1200,
      height: 630,
    }

  );

}