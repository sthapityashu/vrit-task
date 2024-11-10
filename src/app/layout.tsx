// Assets
import "@/assets/css/globals.css";

// Default imports
import { Metadata } from "next";

// Custom imports
import { RootLayoutMetadata } from "@/utils/seo/metadata";
import { ChildrenSchema } from "@/utils/schemas/GlobalSchema";
import { RootHeader } from "@/assets/views/layouts/root";
import { poppins } from "@/assets/fonts/nextjs-fonts";
import { CartProvider } from "@/context/useCart";

// SEO Metadata for Home
export const metadata: Metadata = RootLayoutMetadata;

const RootLayout: React.FC<ChildrenSchema> = (props) => {
  // Props
  const { children } = props;

  return (
    <html lang="en">
      <link rel="shortcut icon" href="/image/favicon.ico" type="image/x-icon" />
      <body
        className={`${poppins.variable} font-poppins thin-scrollbar min-w-screen min-h-screen max-w-[2000px] mx-auto `}
      >
        <CartProvider>
          <RootHeader />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
};

export default RootLayout;
