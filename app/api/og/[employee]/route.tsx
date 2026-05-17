
import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function GET(
  req: Request,
  { params }: any
) {

  try {

    /* ========================================== */
    /* EMPLOYEE */
    /* ========================================== */

    const employee =

      decodeURIComponent(
        params?.employee || ""
      )

      .trim()
      .toLowerCase();

    /* ========================================== */
    /* FETCH SHEET */
    /* ========================================== */

    const res = await fetch(

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

    /* ========================================== */
    /* FIND PERSON */
    /* ========================================== */

    const person =

      employees.find(
        (item: any) => {

          const slug =

            String(
              item?.slug || ""
            )

            .trim()
            .toLowerCase();

          return (
            slug === employee
          );

        }
      );

    if (!person) {

      return new Response(

        `Employee not found: ${employee}`,

        {
          status:404,
        }

      );

    }

    /* ========================================== */
    /* CLEAN */
    /* ========================================== */

    const clean = (v:any) =>

      String(v || "")

      .replace(/\s+/g," ")

      .trim();

    const name =
      clean(person.name);

    const title =
      clean(person.title);

    const company =
      clean(person.company);

    const theme =

      clean(person.theme)
      .toLowerCase();

    /* ========================================== */
    /* LOGO */
    /* ========================================== */

    const logoName =

      theme
      ? `${theme}-light.png`
      : "foundation-light.png";

    let logoBase64 = "";

    try {

      const logoPath =

        path.join(

          process.cwd(),

          "public",
          "logos",

          logoName

        );

      const logoBuffer =
        await readFile(
          logoPath
        );

      logoBase64 =

        `data:image/png;base64,${logoBuffer.toString("base64")}`;

    } catch(e){

      console.log(
        "Logo missing:",
        logoName
      );

    }

    /* ========================================== */
    /* IMAGE */
    /* ========================================== */

    return new ImageResponse(

      (

        <div

          style={{

            width:"1200px",
            height:"630px",

            display:"flex",

            flexDirection:"column",

            justifyContent:"center",
            alignItems:"center",

            position:"relative",

            overflow:"hidden",

            background:
              "linear-gradient(180deg,#07181D 0%,#041116 100%)",

            color:"#F5F1E8",

          }}

        >

          {/* GLOW */}

          <div

            style={{

              position:"absolute",

              width:"700px",
              height:"700px",

              borderRadius:"9999px",

              background:
                "rgba(198,164,106,0.08)",

              filter:
                "blur(120px)",

            }}

          />

          {/* LOGO */}

          {

            logoBase64

            ? (

              <div

                style={{

                  width:"320px",
                  height:"90px",

                  marginBottom:"42px",

                  backgroundImage:
                    `url(${logoBase64})`,

                  backgroundSize:
                    "contain",

                  backgroundRepeat:
                    "no-repeat",

                  backgroundPosition:
                    "center",

                  display:"flex",

                }}

              />

            )

            : (

              <div

                style={{

                  display:"flex",

                  fontSize:38,

                  letterSpacing:"6px",

                  marginBottom:"42px",

                  opacity:0.9,

                }}

              >

                {company}

              </div>

            )

          }

          {/* NAME */}

          <div

            style={{

              display:"flex",

              fontSize:82,

              fontWeight:700,

              letterSpacing:"-2px",

              color:"#F5F1E8",

              textAlign:"center",

              textShadow:
                "0 0 40px rgba(255,255,255,0.08)",

              maxWidth:"1000px",

              paddingLeft:"60px",
              paddingRight:"60px",

            }}

          >

            {name}

          </div>

          {/* DIVIDER */}

          <div

            style={{

              display:"flex",

              alignItems:"center",

              gap:"18px",

              marginTop:"28px",
              marginBottom:"24px",

            }}

          >

            <div

              style={{

                width:"120px",
                height:"1px",

                background:
                  "rgba(198,164,106,0.5)",

                display:"flex",

              }}

            />

            <div

              style={{

                width:"10px",
                height:"10px",

                transform:
                  "rotate(45deg)",

                background:"#C6A46A",

                display:"flex",

              }}

            />

            <div

              style={{

                width:"120px",
                height:"1px",

                background:
                  "rgba(198,164,106,0.5)",

                display:"flex",

              }}

            />

          </div>

          {/* TITLE */}

          <div

            style={{

              display:"flex",

              fontSize:28,

              letterSpacing:"8px",

              textTransform:
                "uppercase",

              color:
                "rgba(245,241,232,0.72)",

              textAlign:"center",

              marginBottom:"14px",

              paddingLeft:"40px",
              paddingRight:"40px",

              maxWidth:"1000px",

            }}

          >

            {title}

          </div>

          {/* COMPANY */}

          <div

            style={{

              display:"flex",

              fontSize:22,

              letterSpacing:"5px",

              color:
                "rgba(198,164,106,0.85)",

              textTransform:
                "uppercase",

              textAlign:"center",

            }}

          >

            {company}

          </div>

        </div>

      ),

      {
        width:1200,
        height:630,
      }

    );

  } catch(error){

    console.error(error);

    return new Response(

      `OG generation failed:\n\n${String(error)}`,

      {
        status:500,
      }

    );

  }

}