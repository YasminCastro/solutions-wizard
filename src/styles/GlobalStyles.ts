import { createGlobalStyle } from "styled-components";

export const colors = {
  black: "#000000",
  white: " #ffffff",
  lightGrey: "#f5f7fa",
  grey50: "#707070",

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

  mantineTeal: "#20c796",
  mantineRed: "#fe6b6b",
};

export const randomMantineColors = [
  "dark",
  "gray",
  "red",
  "pink",
  "grape",
  "violet",
  "indigo",
  "",
  "cyan",
  "teal",
  "green",
  "lime",
  "yellow",
  "orange",
];

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

  button{
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;	
  }


  ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 35px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
 
`;
