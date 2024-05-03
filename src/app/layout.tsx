import "./globals.css";
import type { Metadata } from "next";
import ToastProvider from "@/common/ToastProvider";
import { Poppins } from "next/font/google";
export const metadata: Metadata = {
  title: "Japa | open to work",
  icons: {
    icon: "../app/favicon.ico",
  },
  description: "JAPA Description",
};

const poppins = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastProvider>{children}</ToastProvider>
        <div id="modals" />
      </body>
    </html>
  );
}
