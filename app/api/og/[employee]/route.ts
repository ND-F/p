import { chromium } from "playwright";

export async function GET(
  req: Request,
  { params }: any
) {

  const browser =
    await chromium.launch({
      headless: true,
    });

  const page =
    await browser.newPage({

      viewport: {
        width: 1200,
        height: 630,
      },

      deviceScaleFactor: 2,

    });

  await page.goto(
    `https://id.nadimfoundation.org/${params.employee}?og=1`,
    {
      waitUntil: "networkidle",
    }
  );

  /* WAIT EXTRA FRAME */
  await page.waitForTimeout(1200);

  const hero =
    page.locator("#og-hero");

  const buffer =
    await hero.screenshot({

      type: "png",

      animations: "disabled",

    });

  await browser.close();

  return new Response(
    new Uint8Array(buffer),
    {

      headers: {

        "Content-Type":
          "image/png",

        "Cache-Control":
          "public, max-age=3600",

      },

    }
  );

}