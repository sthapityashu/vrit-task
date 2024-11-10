import defaultTheme from "tailwindcss/defaultTheme";

//////////////////////////////////////////////////
/**
 * @title
 * Responsive screens
 **/
export const screens = {
  ...defaultTheme.screens, // Default Tailwind CSS breakpoints
  "3xs": "175px", // Extremely small screens (smartwatches)
  "2xs": "300px", // Extra small screens (small smartphones)
  xs: "475px", // Small screens (standard smartphones)
  sm: "640px", // Medium screens (tablets)
  md: "768px", // Medium-large screens (iPads, larger tablets)
  lg: "1024px", // Large screens (small laptops, desktops)
  xl: "1280px", // Extra-large screens (standard desktops)
  "2xl": "1536px", // Extra-extra-large screens (large desktops)
};

//////////////////////////////////////////////////
/**
 * @title
 * Font Family for ReactJs
 *
 * @import
 * For this - You will need to import this in index.css
 **/
export const reactJsFontFamily = {
  poppins: "Poppins, sans-serif",
};

//////////////////////////////////////////////////
/**
 * @title
 * Z Index for all devices (currently using from MUI)
 **/
export const zIndex = {
  minus_100: "-100",
  minus_10: "-10",
  minus_1: "-1",
  mobile_stepper: "1000",
  fab: "1050",
  speed_dial: "1050",
  app_bar: "1100",
  drawer: "1200",
  modal: "1300",
  snackbar: "1400",
  tooltip: "1500",
};

//////////////////////////////////////////////////
/**
 * @title
 * Keyframes to be used for animations
 **/
export const keyframes = {
  slideUp: {
    "0%": { height: "400px" },
    "100%": { height: "0" },
  },
  slideDown: {
    "0%": { height: "0" },
    "100%": { height: "400px" },
  },
  slideRightMiniLogo: {
    "0%": { marginLeft: "0" },
    "80%": { marginLeft: "48px" },
  },
  showUp: {
    "0%": { opacity: "1" },
    "30%": { opacity: "1" },
    "100%": { opacity: "0" },
  },
  showDown: {
    "0%": { opacity: "0" },
    "30%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
};

//////////////////////////////////////////////////
/**
 * @title
 * Animations for the whole site
 **/
export const animation = {
  slideUp: "slideUp 0.3s ease-out",
  slideDown: "slideDown 0.3s ease-out",
  slideRightMiniLogo: "slideRightMiniLogo 0.5s ease-out",
  showUp: "showUp 0.6s ease-out",
  showDown: "showDown 0.6s ease-in",
};
