Program Name: Envelope (A Login Page Sims)

Written with: Typescript, NextJS, ChakraUI, Firebase, Recoil, Storybook

Testing provided by: Cypress (E2E Testing)

Version: 1.0

For default Login you can use:

### Email : default@mail.com

### Password : 123456

or just register with your own mail if you'd like.

===

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I added nx later in development because I have no prior experience on handling monorepo but from what I heard adding nx may result in better caching capability, so I add it anyway in the last phase of development.

===

## Getting Started

You can visit the deployed app on vercel, but if you'd like to run it locally then the steps would be:

Clone the project

```bash
git clone "https://github.com/FaithL3S5/envelope-login-page.git"
```

Go to the project directory

```bash
cd envelope-login-page
```

Install dependencies

```bash
npm install
```

\*note : the .npmrc included in this repo turns the --force tag of npm to true; this is done because ChakraUI Storybook Add-on has conflicting dependencies with Storybook 7 despite the fact that it will run without problem even if you use Storybook 7 dependencies.

Afterwards you can checkout the npm run capabilities of this project below to use it according to your need!

===

## NPM Run Capabilities

To run the server (served at http://localhost:3000) run

```bash
npm run dev # for development mode
# or
npm start # for production mode
```

To build the project for production (output is ".next" folder) run

```bash
npm run build
```

There's also linting capability using ESLint, run it with

```bash
npm run lint
```

You can also run the storybook environment (served at http://localhost:6006) by running

```bash
npm run storybook
```

Or build the storybook for production (output is "storybook-static" folder) with

```bash
npm run build-storybook
```

This repo uses cypress for e2e testing, run the code below to run the test with UI

```bash
npm run test
```

Or in headless mode

```bash
npm run test:headless
```

Or if you just want to open the cypress in general

```bash
npm run cypress
```

===

## Limitations

- This app maybe not as secure as possible because there are limited input checking such as email validation or password requirements; most securities are provided by the default settings of Firebase
- Storybook is unable to give control to customize the component's stories (frankly I'm very new with storybook in general so I'm not sure what caused this)
- There's some linting issue (warnings) because of Storybook component's needs of _interesting_ imports
- There may be some commented codes in this project; this is intentional to showcase the capabilities of using components such as Navbar to display the Envelope brand instead of an Absolute Flex like shown in the deployed vercel app
