import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";

export const metadata: Metadata = {
  title: "VQ-Portfolio",
  description: "Portfolio do Valdmiro Quiquel",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-pt">
      <body>
        <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
