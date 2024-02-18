import { createGlobalStyle } from "styled-components";
import OswaldFont from './Assets/fonts/Oswald-VariableFont_wght.ttf'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face{
  font-family: 'slabo';
  src: url(${OswaldFont});
}

h1, h2, h3, h4, h5, h6, span, p, a, select, button, input, textarea, label{
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
  background-color: ${({ theme }) => theme.colors.secondaryColor};
}

body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-track {
  border-left: 3px solid #fff;
  border-right: 3px solid #fff;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
}

body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
}

.dashboard-main::-webkit-scrollbar{
  display: none;
}

a {
  text-decoration: none;
}

.btn{
  color: ${({ theme }) => theme.colors.primaryColor};
  background-color: ${({ theme }) => theme.colors.tertiaryColor};
  border: 1.5px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 5px;
  padding: 10px 40px;
  font-size: ${({ theme }) => theme.fontSize.textFontSize};
  transition: 0.25s;
}

.btn:hover{
  color: ${({ theme }) => theme.colors.tertiaryColor};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border: 1.5px solid ${({ theme }) => theme.colors.tertiaryColor};
}

// .btn::before{
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 170%;
//   width: 2px;
//   background-color: ${({ theme }) => theme.colors.tertiaryColor};
//   border-radius: 50%;
// }

// .btn::after{
//   content: '';
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   width: 130%;
//   height: 2px;
//   background-color: ${({ theme }) => theme.colors.tertiaryColor};
//   border-radius: 100%;
// }

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

// .sub-heading{
//   text-align: center;
//   margin-bottom: 70px;
// }

// .sub-heading h2{
//   color: #000;
//   font-size: 60px;
// }

.theme-heading{
  display: flex;
  align-items: center;
  gap: 18px;
  h2{
      color: ${({ theme }) => theme.colors.primaryColor};
      font-size: ${({ theme }) => theme.fontSize.smallHeadingFontSize};
      flex-grow: 1;
  }
  span{
      background-color: ${({ theme }) => theme.colors.primaryColor};
      height: 1.5px;
      width: 100%;
      position: relative;

      &::after{
          content: '';
          position: absolute;
          bottom: -14px;
          width: 30px;
          height: 30px;
          background-color: ${({ theme }) => theme.colors.primaryColor};
          border-radius: 50%;
      }
  }
}

.heading-left{
  span{
      &::after{
          right: -10px;
      }
  }
}

.heading-right{
  span{
      &::after{
          left: -10px;
      }
  }
}

.page-content{
  padding: 50px 20px;
  max-width: 800px;
  margin: 0 auto;
}

.page-heading{
  font-size: ${({ theme }) => theme.fontSize.extraLargeHeadingFontSize};
  text-align: center;
  margin-bottom: 50px;
}

.page-content p{
  font-size: ${({ theme }) => theme.fontSize.textFontSize};
  margin-top: 20px;
}

.page-content-head{
  font-size: ${({ theme }) => theme.fontSize.extraSmallHeadingFontSize};
  margin-bottom: 20px;
}

.dash-page-content{
  padding: 50px 0;
  max-width: 100%;
  margin: 0 auto;
}

.dash-page-heading{
  font-size: ${({ theme }) => theme.fontSize.extraLargeHeadingFontSize};
  text-align: center;
  margin-bottom: 50px;
}

.dash-page-head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.dash-page-head h1{
  font-size: ${({ theme }) => theme.fontSize.extraLargeHeadingFontSize};
}

.input-class{
  // background-color: #f7f7f7;
  // border-radius: 5px;
  // border: 2px solid #ddd;
  // padding: 5px 10px;

  border: none;
  outline: none;
  padding: 10px 30px;  
  background-color: transparent;
  border-radius: 40px;
  box-shadow: inset 7px 7px 15px rgba(255, 255, 255, 0.2),
              inset -7px -7px 15px rgba(0, 0, 0, 0.1),
              inset -5px -5px 15px rgba(255, 255, 255, 0.2),
              inset 7px 7px 15px rgba(0, 0, 0, 0.1);   
  font-size: ${({ theme }) => theme.fontSize.textFontSize};     
}

.divider{
  width: 100%;
  height: 1.5px;
  background-color: #ddd;
  margin: 20px 0;
}

.container {
  max-width: 95%;
  margin: 0 auto;
}

form {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  label{
      font-size: ${({ theme }) => theme.fontSize.textFontSize};
  }
  
  .form-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    .form-col {
      height: 100%;
      flex-basis: calc((100% - 20px) / 2);

      input[type="text"],
      input[type="email"],
      input[type="number"],
      input[type="tel"],
      input[type="date"],
      input[type="time"],
      textarea,
      select {
        height: 100%;
        width: 100%;
      }
    }
  }

  .form-row-full {

    text-align: center;

    input[type="text"],
    input[type="email"],
    input[type="number"],
    input[type="tel"],
    input[type="date"],
    input[type="time"],
    input[type="password"],
    textarea{
      width: 100%;
    }

    input[type="submit"] {
      cursor: pointer;
    }
  }
}

@media(max-width: 500px){

  form .form-row .form-col {
    flex-basis: 100%!important;
  }

  .dash-page-head{
    flex-direction: column;
  }
}

`;
