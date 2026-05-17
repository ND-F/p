import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(
  req: Request,
  { params }: any
) {

  return new ImageResponse(

    (
      <div
        style={{
          width: "1200px",
          height: "630px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          background: "#07181D",

          color: "white",

          fontSize: 80,
          fontWeight: 700,
        }}
      >
        {params.employee}
      </div>
    ),

    {
      width: 1200,
      height: 630,
    }

  );

}