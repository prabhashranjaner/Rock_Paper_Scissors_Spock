import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --col-gold-light:hsl(39, 89%, 49%);
    --col-gold-dark: hsl(28, 76%, 44%);
    --col-blue-light:hsl(230, 89%, 62%);
    --col-blue-dark:hsl(229, 64%, 46%);
    --col-red-light:hsl(349, 71%, 52%);
    --col-red-dark:hsl(347, 75%, 35%);
    --col-purple-light: hsl(261, 73%, 60%);
    --col-purple-dark:hsl(261, 51%, 44%);
    --col-sky-light:hsl(189, 59%, 53%);
    --col-sky-dark:hsl(194, 58%, 42%);

    --col-text:hsl(229, 25%, 31%);
    --col-gray:hsl(246, 11%, 37%);

    --col-grad-light:hsl(214, 47%, 23%) ;
    --col-grad-dark:hsl(237, 48%, 15%);

    --col-grad:radial-gradient(at top, var(--col-grad-light), var(--col-grad-dark) );

}

*,*::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    min-height: 100dvh;
    font-family: "Barlow Semi Condensed", sans-serif;
    background-image: var(--col-grad);
    color: white;
    padding: 1.2rem;
     text-transform: uppercase;
     overflow: hidden;
}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`;

export default GlobalStyles;
