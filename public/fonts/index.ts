import { Inter,Poppins } from "next/font/google";

const inter_init = Inter({
  subsets: ["latin"],
  weight: ["200", "500","700", "800"],
  variable: "--font-inter",
});

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100","200", "300", "400", "500", "800"],
  variable: "--font-poppins",
});

export const poppins = poppins_init.variable;
export const inter = inter_init.variable;
