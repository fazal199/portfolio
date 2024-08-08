import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Web-Developer From Vapi",
  description: "Need a Website or Web-App To Grow Your Business? So I am here to Provide The Best Website or Web-App For Your Business",
  keywords: ['web developer, web development, web developer vapi'],
  authors: [{ name: "Fazal Hussain" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" >
      {/* <body className={(inter,poppins)}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
