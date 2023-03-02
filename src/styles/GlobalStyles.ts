import { createGlobalStyle } from "styled-components";

export const colors = {
  black: "#000000",
  white: " #ffffff",
  purple1000: "#a30664",
  purple900: "#b83d86",
  purple800: "#cc72a6",
  purple700: "#e3aeca",
  purple600: "#eac1d6",
  purple500: "#efcddd",
  purple400: "#f3d9e4",
  purple300: "#f5dfe8",
  purple200: "#f8e6ec",
  purple100: "#faecf0",
  purpleLight20: "#fbf0f4",
  purpleLight50: "#fdf6f8",
  purpleLight70: "#fefbfc",

  grey50: "#707070",
};

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  
  a{
    color: inherit;
    text-decoration: none;  
  }
 
`;
