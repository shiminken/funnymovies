This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), and deployed using Vercel.

##Git link for reference:

1. Main repo: https://github.com/shiminken/funnymovies

- Run the development server:
  ```bash
  npm run dev
  # or
  yarn dev
  ```
  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

2. Ui components repo: https://github.com/shiminken/movies-ui-components

- Run the storybook server:
  `yarn storybook`
  Storybook is used to show all components with different. For each component, we can set different props to show the effect by changing the `*.stories.tsx` file in the component directory.
- Build command:
  `yarn build`

TODO: Create Tool to generate a ui component with a default storybook.

## About Backend

- My Backend skill is limited, so I used supabase to do the authentication and movies sharing job API.

* Reference: https://supabase.com/

## About unit test and integration test

- All tests located in the folder **tests** under src folder
- Run individual test by running the command
  `yarn test -- [path to the test file]`
- I don't have much experience writing tests, that's why the test files are a bit mess.
