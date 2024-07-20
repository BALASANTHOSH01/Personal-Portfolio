import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Bala Santhosh",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.className}`}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
