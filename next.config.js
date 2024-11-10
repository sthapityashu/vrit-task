/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA).
  // distDir: './dist', // Changes the build output directory to `./dist/`.

  // IMAGE CONFIG
  images: {
    // domains: ["https://www.onlinekhabar.com"],
    unoptimized: true,
    // loader: "custom",
    // loaderFile: "./constants/methods/cloudinaryLoader.ts",
  },
}

export default nextConfig