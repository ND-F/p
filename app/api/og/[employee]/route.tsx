import { ImageResponse } from "next/og";

export const runtime = "edge";

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
        cache:"no-store",
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
        (item:any) => {

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

    /* ========================================== */
    /* NOT FOUND */
    /* ========================================== */

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

    const logoUrl =

      theme === "industries"

      ? "https://raw.githubusercontent.com/ND-F/p/main/public/logos/industries-light.png"

      : theme === "group"

      ? "https://raw.githubusercontent.com/ND-F/p/main/public/logos/group-light.png"

      : "https://raw.githubusercontent.com/ND-F/p/main/public/logos/foundation-light.png";

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

            fontFamily:"sans-serif",

          }}

        >

          {/* glow */}

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

          {/* logo */}

          <img

            src={logoUrl}

            width="320"
            height="90"

            style={{

              objectFit:"contain",

              marginBottom:"42px",

            }}

          />

          {/* name */}

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

          {/* divider */}

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

              }}

            />

            <div

              style={{

                width:"10px",
                height:"10px",

                transform:
                  "rotate(45deg)",

                background:"#C6A46A",

              }}

            />

            <div

              style={{

                width:"120px",
                height:"1px",

                background:
                  "rgba(198,164,106,0.5)",

              }}

            />

          </div>

          {/* title */}

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

          {/* company */}

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