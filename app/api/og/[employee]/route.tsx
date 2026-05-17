import { ImageResponse } from "next/og";

export const runtime = "edge";

async function getEmployeeData(
  slug: string
) {

  const res = await fetch(
    "https://opensheet.elk.sh/2PACX-1vS0iSZW9diQdZYYORE2r09vXXXXXXXXXXXX/sheet1",
    {
      next: {
        revalidate: 300,
      },
    }
  );

  const data =
    await res.json();

  return data.find(
    (item: any) =>
      item.slug === slug
  );

}

export async function GET(
  req: Request,
  context: any
) {

  const params =
    await context.params;

  const slug =
    params.employee;

  const employee =
    await getEmployeeData(
      slug
    );

  /* =========================
     DYNAMIC DATA
  ========================= */

  const fullName =
    employee?.name ||
    "Executive";

  const position =
    employee?.position ||
    employee?.title ||
    "Managing Director";

  const theme =
    employee?.theme ||
    "foundation";

  /* =========================
     DYNAMIC LOGO
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

          fontFamily:
            "Arial",
        }}
      >

        {/* CENTER GLOW */}
        <div
          style={{
            position: "absolute",
            inset: 0,

            background:
              "radial-gradient(circle at center, rgba(198,164,106,0.06), transparent 58%)",
          }}
        />

        {/* VIGNETTE */}
        <div
          style={{
            position: "absolute",
            inset: 0,

            background:
              "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* LOGO */}
        <img
          src={logo}
          alt="logo"

          width={340}

          style={{
            objectFit:
              "contain",

            marginBottom:
              "42px",

            opacity: 0.96,
          }}
        />

        {/* NAME */}
        <div
          style={{
            display: "flex",

            fontSize: "104px",

            fontWeight: 800,

            lineHeight: 1,

            letterSpacing:
              "-0.04em",

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

        {/* DIVIDER */}
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
              width: "170px",
              height: "1px",

              background:
                "rgba(198,164,106,0.5)",
            }}
          />

        </div>

        {/* POSITION */}
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

}