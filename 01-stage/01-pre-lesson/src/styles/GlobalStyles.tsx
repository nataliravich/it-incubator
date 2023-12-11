import { createGlobalStyle } from "styled-components";
import { myTheme } from "./animations/Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,      /*для всех элементов и псевдоэлементов*/
*::before,
*::after {
	margin: 0;
padding:0;
box-sizing: border-box;
}

body{
	background-color: ${myTheme.colors.grey.light};
	margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
` 