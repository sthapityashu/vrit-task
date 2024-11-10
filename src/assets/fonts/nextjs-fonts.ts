// Default imports
import {
  // Khand,
  // League_Spartan,
  // Montserrat,
  // Mukta,
  Poppins,
  // Roboto,
  // Titillium_Web,
} from "next/font/google";

/**
 *
 * @title
 * Font families
 *
 * @tip
 * Comment out those which you are not going to use
 *
 */

// const khand = Khand({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-khand",
// });

// const league_spartan = League_Spartan({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-league_spartan",
// });

// const montserrat = Montserrat({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });

// const mukta = Mukta({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-mukta",
// });

export const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-roboto",
// });

// const titillium_web = Titillium_Web({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-titillium_web",
// });

//////////////////////////////////////////////////
/**
 * @title
 * Font family for Nextjs
 *
 * @import
 * For this - You will need to import fonts in layout file
 **/
export const fontFamily = {
  // khand: "var(--font-khand)",
  // league_spartan: "var(--font-league_spartan)",
  // montserrat: "var(--font-montserrat)",
  // mukta: "var(--font-mukta)",
  poppins: "var(--font-poppins)",
  // roboto: "var(--font-roboto)",
  // titillium_web: "var(--font-titillium_web)"
};
