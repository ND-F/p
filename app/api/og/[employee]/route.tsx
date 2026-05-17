import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function GET(
  req: Request,
  { params }: any
) {

  try {

    const employee =
      params.employee;

    /* FETCH SHEET */
    const res =
      await fetch(
        "https://opensheet.elk.sh/1vvdDuKXNEG-J4oCLW1Xsu_Ur9Cgl0AMX9iai0Tqwmxk/Sheet1",
        {
          cache: "no-store",
        }
      );

    const data =
      await res.json();

    const employees =
      Array.isArray(data)
        ? data
        : [];

    const person =
      employees.find(
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

    /* LOGO BY THEME */
    const logoName =
      `${person.theme}-light.png`;

    const logoPath =
      path.join(
        process.cwd(),
        "public",
        "logos",
        logoName
      );

    const logoBuffer =
      await readFile(logoPath);

    const logoBase64 =
      `data:image/png;base64,${logoBuffer.toString("base64")}`;

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
              "linear-gradient(180deg,#07181D 0%,#041116 100%)",

            color: "#F5F1E8",
          }}
        >

          {/* BACKGROUND GLOW */}
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
            src={logoBase64}
            width="320"
            height="90"
            style={{
              objectFit: "contain",
              marginBottom: "50px",
            }}
          />

          {/* NAME */}
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,

              letterSpacing: "-2px",

              color: "#F5F1E8",

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

              marginTop: "28px",
              marginBottom: "24px",
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
                  "#C6A46A",
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

          {/* TITLE */}
          <div
            style={{
              fontSize: 28,

              letterSpacing: "8px",

              textTransform:
                "uppercase",

              color:
                "rgba(245,241,232,0.72)",

              textAlign: "center",

              marginBottom: "14px",
            }}
          >
            {person.title}
          </div>

          {/* COMPANY */}
          <div
            style={{
              fontSize: 22,

              letterSpacing: "5px",

              color:
                "rgba(198,164,106,0.85)",

              textTransform:
                "uppercase",

              textAlign: "center",
            }}
          >
            {person.company}
          </div>

        </div>
      ),

      {
        width: 1200,
        height: 630,
      }

    );

  } catch (error) {

    console.error(error);

    return new Response(
      String(error),
      {
        status: 500,
      }
    );

  }

}