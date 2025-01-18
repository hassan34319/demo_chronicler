import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import './globals.css'
// Initialize Roboto with needed weights
const roboto = Roboto({
  weight: ['400', '500', '700'], // choose the weights you need
  subsets: ['latin'],  // specify character sets
  display: 'swap',     // ensures text remains visible during font load
  variable: '--font-roboto', // optional: for CSS variable usage
})

export const metadata: Metadata = {
  title: "Chronicler Collections",
  description: "Create Collections with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        {children}
      </body>
    </html>
  );
}
