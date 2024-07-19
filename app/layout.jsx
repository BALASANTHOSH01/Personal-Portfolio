import { Inter, Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Bala Santhosh",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.className} bg-[--thirdColor]`}>
        {children}
      </body>
    </html>
  );
}
