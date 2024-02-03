import { createGlobalStyle } from "styled-components";
import slabFont from './Assets/fonts/Oswald-VariableFont_wght.ttf'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face{
  font-family: 'slabo';
  src: url(${slabFont});
}

h1, h2, h3, h4, h5, h6, span, p, a, select, button{
  font-family: 'slabo', sans-serif;
}

html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  height: 100vh;
}

body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-track {
  border-left: 3px solid ${({ theme }) => theme.colors.primaryColor};
  border-right: 3px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
}

body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
}

a {
  text-decoration: none;
}

.btn{
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.textFontSize};
  transition: 0.25s;
  position: relative;
}

.btn::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 170%;
  width: 2px;
  background-color: #fff;
  border-radius: 50%;
}

.btn::after{
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 130%;
  height: 2px;
  background-color: #fff;
  border-radius: 50%;
}

.btn:hover{
}

li {
  list-style: none;
}

.sticky-header{
  border-bottom: 1px solid #ddd;
  background-color: ${({ theme }) => theme.colors.primaryColor};
}

.space-bottom{
  margin-bottom: 80px;
}

.heading-bottom{
  margin-bottom: 30px;
}

${"" /* resuable code section  */}

.container {
  max-width: 1340px;
  margin: 0 auto;
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
}

`;
