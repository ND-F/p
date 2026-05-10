import Papa from "papaparse";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS0iSZW9diQdZYYORE2r09vLH_Bz31rT0bynsDXoA9OZII9SosW71mFcL8jULLqy6_TtOkBCPEJ6S4b/pub?output=csv";

export async function getEmployees() {

  const response =
    await fetch(SHEET_URL, {
      cache: "no-store",
    });

  const csv =
    await response.text();

  const parsed =
    Papa.parse<any>(csv, {
      header: true,
    });

  return parsed.data;

}