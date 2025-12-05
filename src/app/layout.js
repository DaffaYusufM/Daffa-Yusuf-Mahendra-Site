import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "My Personal Site | Daffa Yusuf Mahendra",
  description: "Portfolio website of Daffa Yusuf Mahendra - Undergraduate Information System at Telkom University Surabaya. Interested in UI/UX Design, Web Development, Machine Learning, and AI Automation.",
  keywords: ["Daffa Yusuf Mahendra", "Portfolio", "Web Developer", "UI/UX Designer", "Telkom University"],
  authors: [{ name: "Daffa Yusuf Mahendra" }],
  openGraph: {
    title: "Daffa Yusuf Mahendra - Portfolio",
    description: "Undergraduate Information System at Telkom University Surabaya",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
