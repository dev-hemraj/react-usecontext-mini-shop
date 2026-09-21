# React useContext Mini Shop

A small React project built to practice the `useContext` hook by creating a simple shopping cart counter.

## Tech Stack

- React
- JavaScript
- Tailwind CSS
- Vite

## Features

- Display products dynamically using `.map()`
- Add products to the cart
- Show cart item count in the header
- Show total cart items in the cart summary
- Clear the cart
- Share cart state between components using `useContext`

## React Concepts Practiced

- `useState`
- `useContext`
- `createContext`
- Context Provider
- Props
- Component structure
- `.map()`
- Event handling

## Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
│
├── context/
│   └── CartContext.jsx
│
├── data/
│   └── product.js
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## How It Works

`CartContext` stores the shared cart state:

```js
const [cartCount, setCartCount] = useState(0);
```

The state is shared with other components using:

```jsx
<CartContext.Provider value={{ cartCount, setCartCount }}>
  {children}
</CartContext.Provider>
```

Components can access the shared state using:

```js
const { cartCount, setCartCount } = useContext(CartContext);
```

When the user clicks **Add to Cart**, the cart count increases.

```js
setCartCount((prev) => prev + 1);
```

When the user clicks **Clear Cart**, the cart count resets to `0`.

```js
setCartCount(0);
```

## Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go inside the project:

```bash
cd YOUR_PROJECT_NAME
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Purpose

This project was created as part of my React learning journey to understand how `useContext` can be used to share state between multiple components without passing props through every component.

## Next Improvements

- Store actual products in the cart
- Calculate total cart price
- Add product quantity
- Remove individual products
- Prevent duplicate products
- Add localStorage
- Build a complete cart page
