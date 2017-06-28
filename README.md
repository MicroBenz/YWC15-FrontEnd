# YWC15
Website for YWC#15 Powered by React with Server-Side Rendered by Next.js

## #WeAreHiring

## What you need to do first
- Simply `npm install` (or `yarn`)
- Then `yarn dev`
- Go to `http://localhost:3000`
- If apps is come with no error...You are good to go!

## Project Structure
This project structure are follow to [Next.js documentation](https://github.com/zeit/next.js/tree/v2.4.2) (bacause it's force use to use structure like this) and some of our own implementation

- `pages` each file contain **single page** of our apps.
- `component` contains **component** that in each page will use it.
- `static` contains external library or static assets like image.
- `store` contains things about Redux (like middlewares, reducers).
- `utils` contains function that use across the apps.
- `server` contains API server-side code (Back-end job is inside that folder).

## Things you need to strictly do!!!!!
- **Page** should be wrap by `connect` from `store/connect.js`
- If you want **Component** to be connect with Redux state, use `connect` from `react-redux`
