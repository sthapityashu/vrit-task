import { Metadata } from "next";

// export const metadata = {
//   generator: 'Next.js',
//   applicationName: 'Next.js',
//   referrer: 'origin-when-cross-origin',
//   keywords: ['Next.js', 'React', 'JavaScript'],
//   authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
//   creator: 'Jiachi Liu',
//   publisher: 'Sebastian Markbåge',
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
// }

export const faviconMetadata = {
  icons: {
    icon: {
      url: "./favicon.ico",
      type: "image/x-icon",
    },
    shortcut: { url: "./favicon.ico", type: "image/x-icon" },
  },
};

export const RootLayoutMetadata: Metadata = {
  // ...faviconMetadata,
  title: "NextJs+Vite+TailwindCss Boilerplate",
  description: "Start of a beautiful adventure ahead",
  // metadataBase, applicationName, authors, generator, keywords, referrer, themeColor, colorScheme, viewport, creator, publisher, robots, alternates, appleWebApp, icons, manifest, twitter, verification, formatDetection, itunes, abstract, appLinks, archives, assets, bookmarks, category, classification, other
};
