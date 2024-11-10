// Assets
import "@/assets/css/globals.css";

// Default imports
import { Metadata } from "next";

// Custom imports
import { RootLayoutMetadata } from "@/utils/seo/metadata";
import { ChildrenSchema } from "@/utils/schemas/GlobalSchema";
import { RootFooter, RootHeader } from "@/assets/views/layouts/root";
import { poppins } from "@/assets/fonts/nextjs-fonts";

// SEO Metadata for Home
export const metadata: Metadata = RootLayoutMetadata;

const RootLayout: React.FC<ChildrenSchema> = (props) => {
  // Props
  const { children } = props;

  return (
    <html lang="en">
      <link rel="shortcut icon" href="/image/favicon.ico" type="image/x-icon" />
      <body
        className={`${poppins.variable} font-poppins thin-scrollbar min-w-screen min-h-screen max-w-[2000px] mx-auto grid grid-rows-[160px_minmax(calc(100vh-160px),auto)_auto]`}
      >
        <RootHeader />
        <main>{children}</main>
        <RootFooter />
      </body>
    </html>
  );
};

export default RootLayout;
