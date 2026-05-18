import { NextResponse } from "next/server";

export const runtime = "nodejs";

async function getEmployees() {

  const res = await fetch(

    "https://opensheet.elk.sh/1vvdDuKXNEG-J4oCLW1Xsu_Ur9Cgl0AMX9iai0Tqwmxk/Sheet1",

    {
      cache: "no-store",
    }

  );

  return res.json();

}

export async function GET(
  req: Request,
  { params }: any
) {

  const employees =
    await getEmployees();

  const employee =
    employees.find(
      (e: any) =>
        e.slug === params.employee
    );

  if (!employee) {

    return new NextResponse(
      "Employee not found",
      { status:404 }
    );

  }

  const vcf = `

BEGIN:VCARD
VERSION:3.0
FN:${employee.name || ""}
ORG:${employee.company || ""}
TITLE:${employee.title || ""}
TEL;TYPE=CELL:${employee.phone || ""}
EMAIL:${employee.email || ""}
URL:${employee.website || ""}
ADR;TYPE=WORK:;;${employee.address || ""}
END:VCARD

`.trim();

  return new NextResponse(vcf, {

    headers: {

      "Content-Type":
        "text/vcard",

      "Content-Disposition":
        `inline; filename="${employee.slug}.vcf"`,

    },

  });

}