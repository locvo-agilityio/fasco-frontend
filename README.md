## React Revise

### Overview

- This document provides requirements and estimation for Next.js 15 Practice.
- Design: [Figma](<https://www.figma.com/design/Cb7q0gkKL5GKZKtfNqiSDg/Fasco-Online-Shopping-Website-Design---eCommerce-Store-Website---UI-Kit-(Community)?node-id=0-757&t=1dTLjdOp7YllFmFI-0>)
- Plan: [Plan Practice](https://docs.google.com/document/d/1g2Vfl5fSFJ1wv7_XOuTUy-bxCOEK9E2jhUOb8Ci0M9c/edit?tab=t.0#heading=h.ce4wphdvgowg)

### Target

- Improve and apply the features of Nextjs 14 while implementing Nextjs 15
- Implement the cutting-edge features of Next.js 15 to ensure the app is utilizing the latest improvements for both performance and development experience.

  - @next/codemod CLI.
  - Async Request APIs.
  - Caching Semantics.
  - Turbopack Dev.
  - React 19 Support.
  - Static Route Indicator.
  - Enhanced Forms (next/form).
  - TypeScript support for next.config.ts.
  - Server Actions Security.
  - ESLint 9 Support.
  - Development and Build Performance.

- Use NextAuth.js for managing user authentication with various providers like Google, GitHub, or email authentication, with session management and secure authentication.
- Apply HeroUI for a modern and responsive UI framework to style components.

### Timeline

- Estimate: 14 days (2025/02/26 - 2025/03/17)

### Technical

- Prettier
- ESLint
- Next.js
- HeroUI
- NextAuth
- React
- TypeScript
- Storybook
- Jest
- React Query
- React-Testing-Library
- TaiwindCSS
- Strapi

### Requirements

- SIGN-IN PAGE

  - Users can sign in with a registered account using credentials.
  - Optionally, the user should be able to sign in using third-party authentication (Google, Github).
  - Validation form: should display errors if
    - Email is not found in the database.
    - The password is incorrect.
  - The users can be navigated to the sign-up page by clicking on “Register Now” when they haven’t had an account yet.
  - Users after sign-in successfully:
    - JWT tokens should have an expiration time (1 hour), and the client should automatically refresh the token if the user remains active.
    - Should be automatically logged out after a period of inactivity (1 hour). The user should be redirected to the sign-in page.

- SIGN-UP PAGE

  - Users can sign up for a new account with an email address and password.
  - Validation form:
    - Validation errors should be shown immediately after the user submits the form:
      - Missing required fields.
      - Invalid email format.
      - Password mismatch
      - Weak passwords
      - Email already in use
    - Password:
      - At least 8 characters in length.
      - Must contain at least one uppercase letter, one lowercase letter, one number, and one special character.
      - Users should see real-time password strength feedback.
    - Email:
      - The email address should be unique and follow the standard form (ex: test@gmail.com)

- HOME PAGE

  - Display the list of products.
  - The user should be navigated to the shop page when clicking on the “Shop Now” or “View More” button.
  - The user can sign in through the sign-in tab from the Navbar.
  - The user can sign up through the sign-in tab from the Navbar.

- SHOP PAGE

  - Display the list of products by pagination (9 orders per page).
  - The user can take more orders by clicking on the next or previous button.
  - The user should be navigated to the Product Details page when clicking on each item.
  - The user can search products by product name.
  - The user can filter the list of products by filter items.

- PRODUCT DETAIL PAGE

  - The user can view the details of product with size, color…
  - The user can view the mini cart module by clicking on the cart icon. Only users who signed in can proceed to checkout or view the cart. The user who hasn’t signed in will be navigated to the login page.
  - Add to cart:
    - The signed-in user can proceed to add the product to the cart by the “Add to cart” button.
    - The user who hasn’t signed in will be redirected to the Sign-in page when clicking on the “Add to cart” button.

- CART PAGE

  - The signed-in user can view the details of the order including price, quantity, and total.
  - The signed-in user can update the information or the order.
  - The signed-in user can proceed to checkout.

- NOT FOUND PAGE

  - The signed-in user should be navigated to the not found page when:
    - Accessing a non-existent static or dynamic page.
    - Dynamic route parameters are invalid or missing data.
    - An API route cannot find the requested resource.
    - Manually navigate to a 404 page using the router

- UNIT TESTING

  - Unit test coverage is required over 90%.

- CHECKING PAGE SPEED

  - Checking the website page speed through the Lighthouse tool.

- DEPLOY WITH VERCEL

  - Reference link: https://vercel.com/

### Getting Started

- Step 1: Clone repository.

  - SSH: `$ git@gitlab.asoft-python.com:loc.vo/nextjs-training.git`.
  - HTTPS: `$ https://gitlab.asoft-python.com/loc.vo/nextjs-training.git`.

- Step 2:

  - Open terminal: `cd .\fasco\`
  - Install the packages `pnpm install`.

- Step 3:

  - Add file .env and add elements like .env.example
  - Run app:
    - Run web local: `pnpm dev`

- Step 4:

  - Run Storybook: `pnpm storybook`.
  - Run Test: `pnpm test`

## Author

- Loc vo.
- Email: [loc.vo@asnet.com.vn](loc.vo@asnet.com.vn).
