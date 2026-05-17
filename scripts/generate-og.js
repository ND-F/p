const fs = require("fs");
const path = require("path");

const sharp = require("sharp");

const { chromium } =
  require("playwright");

async function generate() {

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

  if (!fs.existsSync(outDir)) {

    fs.mkdirSync(
      outDir,
      { recursive: true }
    );

  }

  /* ========================================== */
  /* PATTERN */
  /* ========================================== */

  const patternPath = path.join(
    process.cwd(),
    "public",
    "patterns",
    "pattern-dark.svg"
  );

  const patternSvg =
    fs.readFileSync(
      patternPath,
      "utf8"
    );

  const patternBase64 =

    `data:image/svg+xml;base64,${Buffer
      .from(patternSvg)
      .toString("base64")}`;

  /* ========================================== */
  /* BROWSER */
  /* ========================================== */

  const browser =
    await chromium.launch({
      headless: true,
    });

  const page =
    await browser.newPage({

      viewport: {
        width: 1200,
        height: 630,
        deviceScaleFactor: 3,
      },

    });

  /* ========================================== */
  /* LOOP */
  /* ========================================== */

  for (const person of employees) {

    if (!person.slug)
      continue;

    const theme =
      String(
        person.theme || ""
      ).toLowerCase();

    /* ========================================== */
    /* LOGO */
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

<meta charset="UTF-8" />

<style>

*{
box-sizing:border-box;
}

html,
body{

margin:0;
padding:0;

width:1200px;
height:630px;

overflow:hidden;

}

body{

position:relative;

display:flex;
align-items:center;
justify-content:center;

background:
linear-gradient(
180deg,
#07181D 0%,
#041116 100%
);

font-family:
Arial,sans-serif;

color:#F5F1E8;

-webkit-font-smoothing:antialiased;

text-rendering:
geometricPrecision;

}

/* ========================================== */
/* WRAP */
/* ========================================== */

.wrap{

position:relative;

width:100%;
height:100%;

display:flex;
align-items:center;
justify-content:center;

overflow:hidden;

}

/* ========================================== */
/* PATTERN */
/* ========================================== */

.pattern{

position:absolute;
inset:0;

background-image:
url("${patternBase64}");

background-size:
185px 185px;

background-repeat:
repeat;

background-position:
center;

opacity:0.14;

pointer-events:none;

transform:
scale(1.02);

}

/* ========================================== */
/* TOP LIGHT */
/* ========================================== */

.topLight{

position:absolute;

top:-220px;
left:50%;

transform:
translateX(-50%);

width:1500px;
height:520px;

background:
radial-gradient(

ellipse at center,

rgba(198,164,106,0.08) 0%,
rgba(198,164,106,0.04) 36%,
transparent 74%

);

filter:blur(90px);

opacity:1;

}

/* ========================================== */
/* MAIN GLOW */
/* ========================================== */

.glow{

position:absolute;

left:50%;
top:50%;

transform:
translate(-50%,-50%);

width:920px;
height:920px;

border-radius:9999px;

background:
radial-gradient(

circle,

rgba(198,164,106,0.13) 0%,
rgba(198,164,106,0.07) 24%,
rgba(7,24,29,0.00) 70%

);

filter:blur(90px);

opacity:1;

}

/* ========================================== */
/* OVERLAY */
/* ========================================== */

.overlay{

position:absolute;
inset:0;

background:

radial-gradient(

circle at center,

rgba(7,24,29,0.00) 0%,

rgba(7,24,29,0.10) 42%,

rgba(4,17,22,0.62) 100%

),

linear-gradient(

180deg,

rgba(255,255,255,0.015) 0%,

rgba(0,0,0,0.14) 100%

);

}

/* ========================================== */
/* VIGNETTE */
/* ========================================== */

.vignette{

position:absolute;
inset:0;

box-shadow:

inset 0 0 180px rgba(0,0,0,0.34),

inset 0 0 260px rgba(0,0,0,0.20);

pointer-events:none;

}

/* ========================================== */
/* CONTENT */
/* ========================================== */

.content{

position:relative;
z-index:10;

display:flex;
flex-direction:column;

align-items:center;
justify-content:center;

transform:
translateY(-6px);

}

/* ========================================== */
/* LOGO */
/* ========================================== */

.logo{

width:350px;

margin-bottom:58px;

object-fit:contain;

filter:

drop-shadow(
0 0 18px rgba(255,255,255,0.04)
)

drop-shadow(
0 0 42px rgba(198,164,106,0.07)
);

opacity:0.98;

}

/* ========================================== */
/* NAME */
/* ========================================== */

.name{

font-size:92px;

font-weight:700;

line-height:0.95;

letter-spacing:-4px;

text-align:center;

max-width:1100px;

padding:0 70px;

color:#F5F1E8;

text-shadow:

0 0 34px rgba(255,255,255,0.04),

0 2px 10px rgba(0,0,0,0.24);

}

/* ========================================== */
/* DIVIDER */
/* ========================================== */

.divider{

display:flex;
align-items:center;
gap:18px;

margin-top:38px;
margin-bottom:30px;

}

.line{

width:170px;
height:1px;

background:
rgba(198,164,106,0.34);

}

.diamond{

width:11px;
height:11px;

transform:
rotate(45deg);

background:#C6A46A;

box-shadow:

0 0 18px rgba(198,164,106,0.26),

0 0 42px rgba(198,164,106,0.10);

}

/* ========================================== */
/* TITLE */
/* ========================================== */

.title{

font-size:26px;

font-weight:500;

letter-spacing:10px;

text-transform:uppercase;

color:
rgba(245,241,232,0.78);

text-align:center;

margin-bottom:18px;

padding:0 40px;

max-width:1100px;

}

/* ========================================== */
/* COMPANY */
/* ========================================== */

.company{

font-size:21px;

font-weight:500;

letter-spacing:6px;

color:
rgba(198,164,106,0.96);

text-transform:uppercase;

}

</style>

</head>

<body>

<div class="wrap">

<div class="pattern"></div>

<div class="topLight"></div>

<div class="glow"></div>

<div class="overlay"></div>

<div class="vignette"></div>

<div class="content">

<img
class="logo"
src="${logoBase64}"
/>

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

</div>

</body>
</html>

`;

    /* ========================================== */
    /* RENDER */
    /* ========================================== */

    await page.setContent(
      html,
      {
        waitUntil: "networkidle",
      }
    );

    await page.waitForTimeout(
      1200
    );

    const buffer =
      await page.screenshot({

        type: "png"

      });

    /* ========================================== */
    /* SAVE */
    /* ========================================== */

    const filePath = path.join(

      outDir,

      `${person.slug}.png`

    );

    await sharp(buffer)

      .resize(1200, 630)

      .png({

        quality: 100,

        compressionLevel: 0,

      })

      .toFile(filePath);

    console.log(
      `Generated: ${person.slug}.png`
    );

  }

  await browser.close();

}

generate();