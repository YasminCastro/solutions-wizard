import { createGlobalStyle } from "styled-components";

export const colors = {
  black: "#000000",
  white: " #ffffff",
  purple100: "#a30664",
  purple90: "#b83d86",
  purple80: "#cc72a6",
  purple70: "#e3aeca",
  purple60: "#eac1d6",
  purple50: "#efcddd",
  purple40: "#f2d5e2",
  purple30: "#f3d9e4",
  purple20: "#f5dfe8",
  purple10: "#f8e6ec",
  purple0: "#faecf0",

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
