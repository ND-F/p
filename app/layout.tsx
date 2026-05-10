import "./globals.css";

import {
  ThemeProvider,
} from "@/components/layout/ThemeProvider";

export const metadata = {
  title: "NADIM",
  description:
    "Executive Identity System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body>

        <ThemeProvider>

          {children}

        </ThemeProvider>

      </body>

    </html>

  );

}