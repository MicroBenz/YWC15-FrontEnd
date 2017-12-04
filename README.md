# YWC#15
Website for YWC#15 Registration and Public Relation powered by **React** with Server-Side Rendering by **Next.js**

#WeAreHiring

## Project Structure
This project structure are follow to [Next.js documentation](https://github.com/zeit/next.js/tree/v2.4.2) (bacause it's force use to use structure like this) and some of our own implementation

- `pages` each file contain **single page** of our apps.
- `component` contains **component** that in each page will use it.
- `static` contains external library or static assets like image.
- `store` contains things about Redux (like middlewares, reducers). And we are following to [ducks](https://github.com/erikras/ducks-modular-redux) architecture.
- `utils` contains utility function that uses across the apps.

## Things you need to strictly do!!!!!
- **Page** should be wrap by `connect` from `store/connect.js`
- If you want **Component** to be connect with Redux state, use `connect` from `react-redux`

## Note
- `config.js` is now blind.
