import { createGlobalStyle } from "styled-components";

export const myThemes = {
    lightMode: {
        primaryColor: "rgb(73,146,106)",
        secondaryColor: "rgb(71, 79, 160)",
        backgroundColor: "#ffffff",
        accentColor: "rgb(254,118,36)",
        accentColor1: "rgba(73,146,106, 0.1)",
        accentColor2: "rgba(255,192,203,0.1)",
        accentColor3: "rgb(254,118,36, 0.1)",
        accentColor4: "rgba(71, 79, 160, 0.1)",
    }
};

export const GlobalStyles = createGlobalStyle`
// html,
// body {
//   padding: 0;
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
// }

// a {
//   color: inherit;
//   text-decoration: none;
// }

// * {
//   box-sizing: border-box;
// }
`