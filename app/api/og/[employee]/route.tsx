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
            "radial-gradient(circle at center,#07232A 0%,#050D10 75%)",

          color: "#F5F1E8",
        }}
      >

        {/* BACKGROUND GLOW */}
        <div
          style={{
            position: "absolute",
            inset: 0,

            background:
              "radial-gradient(circle at center, rgba(198,164,106,0.05), transparent 60%)",
          }}
        />

        {/* TOP LOGO */}
        <div
          style={{
            position: "absolute",
            top: "70px",

            display: "flex",

            fontSize: "42px",
            fontWeight: 700,

            color: "#F5F1E8",

            letterSpacing: "-0.03em",

            zIndex: 5,
          }}
        >
          NADIM
        </div>

        {/* NAME */}
        <div
          style={{
            display: "flex",

            fontSize: "140px",
            fontWeight: 900,

            lineHeight: 1,

            color: "#FFFFFF",

            zIndex: 10,

            marginTop: "10px",
          }}
        >
          {employee.charAt(0).toUpperCase() +
            employee.slice(1)}
        </div>

        {/* GOLD DIVIDER */}
        <div
          style={{
            display: "flex",
            alignItems: "center",

            gap: "24px",

            marginTop: "34px",
            marginBottom: "34px",

            zIndex: 5,
          }}
        >

          <div
            style={{
              width: "180px",
              height: "1px",

              background:
                "rgba(198,164,106,0.55)",
            }}
          />

          <div
            style={{
              width: "10px",
              height: "10px",

              background:
                "#C6A46A",

              transform:
                "rotate(45deg)",
            }}
          />

          <div
            style={{
              width: "180px",
              height: "1px",

              background:
                "rgba(198,164,106,0.55)",
            }}
          />

        </div>

        {/* SUBTITLE */}
        <div
          style={{
            display: "flex",

            fontSize: "32px",

            letterSpacing: "0.32em",

            textTransform: "uppercase",

            color:
              "rgba(245,241,232,0.72)",

            zIndex: 5,
          }}
        >
          Executive Identity
        </div>

        {/* VIGNETTE */}
        <div
          style={{
            position: "absolute",
            inset: 0,

            background:
              "radial-gradient(circle, transparent 35%, rgba(0,0,0,0.48) 100%)",
          }}
        />

      </div>
    ),

    {
      width: 1200,
      height: 630,
    }

  );

}