import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(
  req: Request,
  context: any
) {

  try {

    const params =
      await context.params;

    const slug =
      params.employee;

    /* =========================
       FETCH EMPLOYEE
    ========================= */

    let employee: any = null;

    try {

      const res = await fetch(
        "https://opensheet.elk.sh/2PACX-1vS0iSZW9diQdZYYORE2r09vXXXXXXXXXXXX/sheet1",
        {
          cache: "no-store",
        }
      );

      const data =
        await res.json();

      const rows =
        Array.isArray(data)
          ? data
          : [];

      employee =
        rows.find(
          (item: any) =>
            item.slug === slug
        );

    } catch (err) {

      console.log(
        "sheet fetch error",
        err
      );

    }

    /* =========================
       FALLBACKS
    ========================= */

    const fullName =
      employee?.name ||
      "NADIM";

    const position =
      employee?.position ||
      employee?.title ||
      "Executive Director";

    const theme =
      employee?.theme ||
      "foundation";

    /* =========================
       DYNAMIC LOGOS
    ========================= */

    const logos: any = {

      foundation:
        "https://id.nadimfoundation.org/logos/foundation-light.png",

      industries:
        "https://id.nadimfoundation.org/logos/industries-light.png",

      group:
        "https://id.nadimfoundation.org/logos/group-light.png",

      kenda:
        "https://id.nadimfoundation.org/logos/kenda-light.png",

      executive:
        "https://id.nadimfoundation.org/logos/logo-light.png",

    };

    const logo =
      logos[theme] ||
      logos.foundation;

    /* =========================
       OG IMAGE
    ========================= */

    return new ImageResponse(

      (
        <div
          style={{
            width: "1200px",
            height: "630px",

            display: "flex",
            flexDirection: "column",

            alignItems: "center",
            justifyContent: "center",

            position: "relative",

            overflow: "hidden",

            background:
              "linear-gradient(180deg,#07181D 0%,#050D10 100%)",

            color:
              "#F5F1E8",

            fontFamily:
              "Arial",
          }}
        >

          {/* glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,

              display: "flex",

              background:
                "radial-gradient(circle at center, rgba(198,164,106,0.08), transparent 58%)",
            }}
          />

          {/* vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,

              display: "flex",

              background:
                "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.50) 100%)",
            }}
          />

          {/* logo */}
          <img
            src={logo}

            width={320}
            height={120}

            alt="logo"

            style={{
              objectFit:
                "contain",

              marginBottom:
                "48px",
            }}
          />

          {/* name */}
          <div
            style={{
              display: "flex",

              fontSize: "104px",

              fontWeight: 800,

              lineHeight: 1,

              letterSpacing:
                "-0.05em",

              color:
                "#F5F1E8",

              textAlign:
                "center",

              paddingLeft:
                "80px",

              paddingRight:
                "80px",

              textShadow:
                "0 0 40px rgba(255,255,255,0.06)",
            }}
          >
            {fullName}
          </div>

          {/* divider */}
          <div
            style={{
              display: "flex",

              alignItems:
                "center",

              gap: "24px",

              marginTop: "34px",
              marginBottom: "34px",
            }}
          >

            <div
              style={{
                width: "170px",
                height: "1px",

                background:
                  "rgba(198,164,106,0.5)",

                display: "flex",
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

                display: "flex",
              }}
            />

            <div
              style={{
                width: "170px",
                height: "1px",

                background:
                  "rgba(198,164,106,0.5)",

                display: "flex",
              }}
            />

          </div>

          {/* position */}
          <div
            style={{
              display: "flex",

              fontSize: "30px",

              letterSpacing:
                "0.22em",

              textTransform:
                "uppercase",

              color:
                "rgba(245,241,232,0.72)",

              textAlign:
                "center",

              paddingLeft:
                "120px",

              paddingRight:
                "120px",
            }}
          >
            {position}
          </div>

        </div>
      ),

      {
        width: 1200,
        height: 630,
      }

    );

  } catch (error: any) {

    return new Response(

      `
OG ERROR:

${error?.message}
      `,

      {
        status: 500,
      }

    );

  }

}