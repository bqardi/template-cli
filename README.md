# Template CLI

Generate quick-start templates for web projects (using UMD/CDN for libraries like React or Tailwind), enabling rapid prototyping and testing of ideas or small code snippets.

## How to use

Run the following command:  
`npx @bqardi/template-cli`

A prompt follows with following choices:

- [vanilla](#vanilla)
- [vanilla-tailwind](#vanilla-tailwind)
- [react](#react)
- [react-tailwind](#react-tailwind)

## Vanilla

This template sets up a basic HTML, CSS, and JavaScript project. It's perfect for quickly testing out simple web ideas without any additional frameworks or libraries.

Files created:

- `index.html`
- `style.css`
- `app.js`

## Vanilla Tailwind

This template includes Tailwind CSS along with the basic HTML. Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom designs without writing a lot of custom CSS.

Files created:

- `index.html`
- `tailwind.config.js`

## React

This template sets up a basic React project using CDN for React and Babel (without any build step). It's ideal for testing out React components and building small React applications quickly.

Files created:

- `index.html`
- `style.css`
- `app.js`

## React Tailwind

This template combines React (CDN version) with Tailwind CSS, giving you the power of React's component-based architecture along with the utility-first CSS approach of Tailwind. It's great for building modern, responsive web applications quickly.

Files created:

- `index.html`
- `app.js`
- `tailwind.config.js`
