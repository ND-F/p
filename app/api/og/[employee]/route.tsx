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

    /* FETCH DATA */
    const res = await fetch(
  "https://opensheet.elk.sh/1vvdDuKXNEG-J4oCLW1Xsu_Ur9Cgl0AMX9iai0Tqwmxk/Sheet1",
  {
    cache: "no-store",
  }
);

const data =
  await res.json();

/* SAFETY */
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

    /* LOGO FILE */
    const logoPath =
      path.join(
        process.cwd(),
        "public",
        "logos",
        "foundation-light.png"
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

    console.error(error);

return new Response(
  String(error),
      {
        status: 500,
      }
    );

  }

}