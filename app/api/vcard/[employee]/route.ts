import { NextResponse } from "next/server";

import {
  getEmployees,
} from "@/lib/getEmployees";

export async function GET(
  req: Request,
  context: {
    params: Promise<{
      employee: string;
    }>;
  }
) {

  const { employee } =
    await context.params;

  const employees =
    await getEmployees();

  const data =
    employees.find(
      (e: any) =>

        String(e.slug)
          .trim()
          .toLowerCase()

        ===

        String(employee)
          .trim()
          .toLowerCase()
    );

  if (!data) {

    return new Response(
      "Employee not found",
      {
        status: 404,
      }
    );

  }

  const fullName =
    String(data.name || "").trim();

  const nameParts =
    fullName.split(/\s+/);

  const lastName =
    nameParts.length > 1
      ? nameParts[nameParts.length - 1]
      : "";

  const firstName =
    nameParts.length > 1
      ? nameParts
          .slice(0, -1)
          .join(" ")
      : fullName;

  const vcard = `

BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${fullName}
ORG:${data.company || ""}
TITLE:${data.title || ""}
TEL;TYPE=CELL:${data.phone || ""}
EMAIL:${data.email || ""}
URL:${data.website || ""}
ADR:${data.address || ""}
END:VCARD

`;

  return new NextResponse(
    vcard.trim(),
    {

      status: 200,

      headers: {

        "Content-Type":
          "text/vcard; charset=utf-8",

        "Content-Disposition":
          `inline; filename="${data.slug}.vcf"`,

      },

    }
  );

}