/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Outputs a Single-Page Application (SPA).
  // distDir: './dist', // Changes the build output directory to `./dist/`.

  // IMAGE CONFIG
  images: {
    domains: ["https://d2v5dzhdg4zhx3.cloudfront.net"],
    unoptimized: true,
    // loader: "custom",
    // loaderFile: "./constants/methods/cloudinaryLoader.ts",
  },
};

export default nextConfig;
