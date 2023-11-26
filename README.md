# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   See all countries from the API on the homepage
-   Search for a country using an `input` field
-   Filter countries by region
-   Click on a country to see more detailed information on a separate page
-   Click through to the border countries on the detail page
-   Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

<img src="/screenshots/desktop.png" alt="Desktop view">
<img src="/screenshots/mobile.png" alt="Mobile view" width="200" height="500">

### Links

-   Solution URL: [Github](https://github.com/GabeGar/rest-countries-api-with-color)
-   Live Site URL: [Vercel](https://rest-countries-api-with-color-peach.vercel.app/)

## My process

### Built with

-   [Typescript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/) - JS library
-   [React](https://reactjs.org/) - JS library
-   [React-router-dom](https://reactrouter.com/en/main) - Routing
-   [TanStack-Query](https://tanstack.com/query/latest) - Data fetching
-   [React-paginate](https://github.com/AdeleD/react-paginate) - Pagination
-   [RestCountries](https://restcountries.com/) - Api
-   [Tailwind](https://tailwindcss.com/) - CSS framework
-   [React-icons](https://react-icons.github.io/react-icons/) - Icons
-   [Tailwind-prettier-plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) - plugin
-   Mobile-first workflow
-   CSS custom properties
-   CSS Grid
-   FlexBox

### What I learned

-   React query is an extremely powerful library. Definitely feels like the surface has yet to be scratched, as all I utilized was the useQuery hook to do some simple data fetching. Makes handling the data, error and loading states, in multiple components that depend on it, a breeze, as it handles all of that and more, for you, out of the box. Also being able to cache and read/load fairly large sets of data, with out re-fetching upon return to home, made my application much more fluid. Coupled with pagination, the app, I believe, is running as efficiently as I could possible make it.

-   Implementing pagination with the react-paginate library, was a first for me. While I struggled at first, the easy to follow documentation on the repository, helped me implement relatively no time flat. Pagination is definitely an area I could improve upon down the line but overall, I am satisfied with the current results, thanks to this neat library.

## Author

-   Frontend Mentor - [@Gabegar](https://www.frontendmentor.io/profile/GabeGar)
-   Github - [@Gabegar](https://github.com/GabeGar)
