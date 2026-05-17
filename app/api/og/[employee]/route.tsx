import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(
  req: Request,
  { params }: any
) {
  try {

    const employee =
      params.employee;

    /* FETCH EMPLOYEE DATA */
    const res = await fetch(
      "https://opensheet.elk.sh/2PACX-1vS0iSZW9diQdZYYORE2r09vW0l5q1x0L4X3Z6v4WQ/Sheet1",
      {
        cache: "no-store",
      }
    );

    const data =
      await res.json();

    const person =
      data.find(
        (item: any) =>
          item.slug === employee
      );

    if (!person) {

      return new Response(
        "Employee not found",
        {
          status: 404,
        }
      );

    }

    /* THEME */
    const background =
      "#07181D";

    const foreground =
      "#F5F1E8";

    const accent =
      "#C6A46A";

    /* LOGO */
    const logo =
      "https://id.nadimfoundation.org/logos/logo-light.png";

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
              `linear-gradient(
                180deg,
                ${background} 0%,
                #041116 100%
              )`,

            color: foreground,
          }}
        >

          {/* PATTERN */}
          <div
            style={{
              position: "absolute",
              inset: 0,

              opacity: 0.08,

              backgroundSize:
                "160px",

              backgroundImage:
                `radial-gradient(
                  circle,
                  rgba(255,255,255,0.08) 1px,
                  transparent 1px
                )`,
            }}
          />

          {/* CENTER GLOW */}
          <div
            style={{
              position: "absolute",

              width: "700px",
              height: "700px",

              borderRadius: "9999px",

              background:
                "rgba(198,164,106,0.08)",

              filter:
                "blur(120px)",
            }}
          />

          {/* LOGO */}
          <img
            src={logo}
            width="260"
            height="70"
            style={{
              objectFit: "contain",
              marginBottom: "60px",
            }}
          />

          {/* NAME */}
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,

              letterSpacing: "-2px",

              color: foreground,

              textAlign: "center",

              textShadow:
                "0 0 40px rgba(255,255,255,0.08)",
            }}
          >
            {person.name}
          </div>

          {/* DIVIDER */}
          <div
            style={{
              display: "flex",
              alignItems: "center",

              gap: "18px",

              marginTop: "34px",
              marginBottom: "26px",
            }}
          >

            <div
              style={{
                width: "120px",
                height: "1px",

                background:
                  "rgba(198,164,106,0.5)",
              }}
            />

            <div
              style={{
                width: "10px",
                height: "10px",

                transform:
                  "rotate(45deg)",

                background:
                  accent,
              }}
            />

            <div
              style={{
                width: "120px",
                height: "1px",

                background:
                  "rgba(198,164,106,0.5)",
              }}
            />

          </div>

          {/* POSITION */}
          <div
            style={{
              fontSize: 30,

              letterSpacing: "10px",

              textTransform:
                "uppercase",

              color:
                "rgba(245,241,232,0.72)",

              textAlign: "center",
            }}
          >
            {person.position}
          </div>

        </div>
      ),

      {
        width: 1200,
        height: 630,
      }

    );

  } catch (error) {

    return new Response(
      "OG generation failed",
      {
        status: 500,
      }
    );

  }
}