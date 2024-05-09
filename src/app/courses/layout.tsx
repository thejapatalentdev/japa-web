import type { Metadata } from "next";
import Navbar from "./components/Navbar/Navbar";
import CoursesFooter from "./components/CoursesFooter/Footer";
export const metadata: Metadata = {
  title: "Japa Courses",
  icons: {
    icon: "/app/favicon.ico",
  },
  description: "Japa Courses",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <CoursesFooter />
    </div>
  );
}
