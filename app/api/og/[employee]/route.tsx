import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(
  req: Request,
  context: any
) {

  const params =
    await context.params;

  const employee =
    decodeURIComponent(
      params.employee || "Executive"
    );

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

          overflow: "hidden",

          background:
            "linear-gradient(180deg,#07181D 0%,#050D10 100%)",

          color: "#F5F1E8",
        }}
      >

        {/* GLOW */}
        <div
          style={{
            position: "absolute",
            inset: 0,

            background:
              "radial-gradient(circle at center, rgba(198,164,106,0.05), transparent 60%)",
          }}
        />

        {/* LOGO */}
        <div
          style={{
            position: "absolute",
            top: 70,

            display: "flex",

            fontSize: 42,
            fontWeight: 700,

            color: "#F5F1E8",
          }}
        >
          NADIM
        </div>

        {/* NAME */}
<div
  style={{
    display: "flex",

    fontSize: "110px",
    fontWeight: 800,

    color: "#FFFFFF",

    lineHeight: 1,

    zIndex: 10,

    marginTop: "10px",
  }}
>
  {employee.charAt(0).toUpperCase() +
    employee.slice(1)}
</div>

        {/* LINE */}
        <div
          style={{
            width: 420,
            height: 1,

            marginTop: 36,
            marginBottom: 34,

            background:
              "rgba(198,164,106,0.55)",
          }}
        />

        {/* TITLE */}
        <div
          style={{
            display: "flex",

            fontSize: 32,

            letterSpacing: "0.32em",

            textTransform: "uppercase",

            color:
              "rgba(245,241,232,0.72)",
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