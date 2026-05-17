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
  /* BROWSER */
  /* ========================================== */

  const browser =
    await chromium.launch();

  const page =
    await browser.newPage({

      viewport: {
        width: 1200,
        height: 630,
        deviceScaleFactor: 3,
      },

    });

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
    /* LOGO BASE64 */
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

display:flex;
align-items:center;
justify-content:center;

position:relative;

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

inset:-120px;

background-image:
url("${patternBase64}");

background-size:340px;

background-repeat:repeat;

background-position:center;

opacity:0.045;

transform:
rotate(-8deg)
scale(1.12);

filter:blur(0.2px);

mix-blend-mode:soft-light;

}

/* ========================================== */
/* TOP LIGHT */
/* ========================================== */

.topLight{

position:absolute;

top:-240px;
left:50%;

transform:translateX(-50%);

width:1200px;
height:520px;

background:
radial-gradient(

ellipse at center,

rgba(198,164,106,0.10) 0%,
rgba(198,164,106,0.04) 32%,
transparent 72%

);

filter:blur(60px);

opacity:0.8;

}

/* ========================================== */
/* MAIN GLOW */
/* ========================================== */

.glow{

position:absolute;

width:920px;
height:920px;

border-radius:9999px;

background:
radial-gradient(

circle,

rgba(198,164,106,0.12) 0%,
rgba(198,164,106,0.05) 38%,
rgba(198,164,106,0.02) 52%,
transparent 74%

);

filter:blur(90px);

opacity:0.9;

}

/* ========================================== */
/* OVERLAY */
/* ========================================== */

.overlay{

position:absolute;
inset:0;

background:

linear-gradient(
180deg,
rgba(7,24,29,0.12) 0%,
rgba(4,17,22,0.34) 100%
),

radial-gradient(
circle at center,
rgba(255,255,255,0.015),
transparent 70%
);

}

/* ========================================== */
/* VIGNETTE */
/* ========================================== */

.vignette{

position:absolute;
inset:0;

box-shadow:

inset 0 0 220px rgba(0,0,0,0.55),

inset 0 0 80px rgba(0,0,0,0.35);

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

padding-top:10px;

}

/* ========================================== */
/* LOGO */
/* ========================================== */

.logo{

width:320px;

margin-bottom:54px;

object-fit:contain;

filter:

drop-shadow(
0 0 24px rgba(255,255,255,0.05)
)

drop-shadow(
0 0 60px rgba(198,164,106,0.04)
);

}

/* ========================================== */
/* NAME */
/* ========================================== */

.name{

font-size:72px;

font-weight:700;

line-height:1;

letter-spacing:-3px;

text-align:center;

max-width:1000px;

padding:0 70px;

color:#F5F1E8;

text-shadow:

0 0 40px rgba(255,255,255,0.05),

0 2px 10px rgba(0,0,0,0.30);

}

/* ========================================== */
/* DIVIDER */
/* ========================================== */

.divider{

display:flex;
align-items:center;
gap:18px;

margin-top:34px;
margin-bottom:28px;

}

.line{

width:138px;
height:1px;

background:
rgba(198,164,106,0.38);

}

.diamond{

width:10px;
height:10px;

transform:
rotate(45deg);

background:#C6A46A;

box-shadow:

0 0 14px rgba(198,164,106,0.24),

0 0 30px rgba(198,164,106,0.10);

}

/* ========================================== */
/* TITLE */
/* ========================================== */

.title{

font-size:24px;

letter-spacing:9px;

text-transform:uppercase;

color:
rgba(245,241,232,0.72);

text-align:center;

margin-bottom:16px;

padding:0 40px;

max-width:1000px;

}

/* ========================================== */
/* COMPANY */
/* ========================================== */

.company{

font-size:20px;

letter-spacing:5px;

color:
rgba(198,164,106,0.92);

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
      700
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