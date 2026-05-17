const fs = require("fs");
const path = require("path");

const sharp = require("sharp");

const { chromium } =
  require("playwright");

async function generate(){

  /* ========================================== */
  /* FETCH SHEET */
  /* ========================================== */

  const res = await fetch(

    "https://opensheet.elk.sh/1vvdDuKXNEG-J4oCLW1Xsu_Ur9Cgl0AMX9iai0Tqwmxk/Sheet1"

  );

  const employees =
    await res.json();

  /* ========================================== */
  /* OUTPUT */
  /* ========================================== */

  const outDir = path.join(
    process.cwd(),
    "public",
    "og"
  );

  if (!fs.existsSync(outDir)){

    fs.mkdirSync(
      outDir,
      { recursive:true }
    );

  }

  /* ========================================== */
  /* BROWSER */
  /* ========================================== */

  const browser =
    await chromium.launch();

  const page =
    await browser.newPage({

      viewport:{
        width:1200,
        height:630,
      },

    });

  /* ========================================== */
  /* LOOP */
  /* ========================================== */

  for (const person of employees){

    if (!person.slug)
      continue;

    const theme =
      String(
        person.theme || ""
      ).toLowerCase();

    /* ========================================== */
    /* LOGO PATH */
    /* ========================================== */

    const logoPath =

      theme === "industries"

      ? path.join(
          process.cwd(),
          "public",
          "logos",
          "logo-industries-light.png"
        )

      : theme === "group"

      ? path.join(
          process.cwd(),
          "public",
          "logos",
          "logo-group-light.png"
        )

      : path.join(
          process.cwd(),
          "public",
          "logos",
          "logo-foundation-light.png"
        );

    /* ========================================== */
    /* BASE64 */
    /* ========================================== */

    const logoBuffer =
      fs.readFileSync(
        logoPath
      );

    const logoBase64 =

      `data:image/png;base64,${logoBuffer.toString("base64")}`;

    /* ========================================== */
    /* HTML */
    /* ========================================== */

    const html = `

<!DOCTYPE html>
<html>

<head>

<meta charset="UTF-8">

<style>

body{

margin:0;
padding:0;

width:1200px;
height:630px;

display:flex;
align-items:center;
justify-content:center;

overflow:hidden;

background:
linear-gradient(
180deg,
#07181D 0%,
#041116 100%
);

font-family:
Arial,sans-serif;

color:#F5F1E8;

}

.wrap{

position:relative;

width:100%;
height:100%;

display:flex;
flex-direction:column;

align-items:center;
justify-content:center;

overflow:hidden;

}

.glow{

position:absolute;

width:700px;
height:700px;

border-radius:9999px;

background:
rgba(198,164,106,0.08);

filter:blur(120px);

}

.logo{

width:320px;

margin-bottom:42px;

object-fit:contain;

}

.name{

font-size:82px;

font-weight:700;

letter-spacing:-2px;

text-align:center;

max-width:1000px;

padding:0 60px;

text-shadow:
0 0 40px rgba(255,255,255,0.08);

}

.divider{

display:flex;
align-items:center;
gap:18px;

margin-top:28px;
margin-bottom:24px;

}

.line{

width:120px;
height:1px;

background:
rgba(198,164,106,0.5);

}

.diamond{

width:10px;
height:10px;

transform:
rotate(45deg);

background:#C6A46A;

}

.title{

font-size:28px;

letter-spacing:8px;

text-transform:uppercase;

color:
rgba(245,241,232,0.72);

text-align:center;

margin-bottom:14px;

padding:0 40px;

max-width:1000px;

}

.company{

font-size:22px;

letter-spacing:5px;

color:
rgba(198,164,106,0.85);

text-transform:uppercase;

}

</style>

</head>

<body>

<div class="wrap">

<div class="glow"></div>

<img
class="logo"
src="${logoBase64}"
>

<div class="name">
${person.name || ""}
</div>

<div class="divider">

<div class="line"></div>

<div class="diamond"></div>

<div class="line"></div>

</div>

<div class="title">
${person.title || ""}
</div>

<div class="company">
${person.company || ""}
</div>

</div>

</body>
</html>

`;

    /* ========================================== */
    /* RENDER */
    /* ========================================== */

    await page.setContent(
      html
    );

    await page.waitForTimeout(
      300
    );

    const buffer =
      await page.screenshot();

    /* ========================================== */
    /* SAVE */
    /* ========================================== */

    const filePath = path.join(

      outDir,

      `${person.slug}.png`

    );

    await sharp(buffer)

    .png()

    .toFile(filePath);

    console.log(
      `Generated: ${person.slug}.png`
    );

  }

  await browser.close();

}

generate();