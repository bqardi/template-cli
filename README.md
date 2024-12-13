# Template CLI

Generate quick-start templates for web projects (using UMD/CDN for libraries like React or Tailwind), enabling rapid prototyping and testing of ideas or small code snippets.

_**NOTE!** These templates are **NOT** meant for **production** envionments!  
They are solely meant for prototyping or testing stuff out.  
Stuff like **small snippets of code** or quickly **testing a great idea** you might have had, are ideal usecases for these templates._

## How to use

Run the following command:  
`npx @bqardi/template-cli`

You are prompted with the following choices:

- [vanilla](#vanilla)
- [react](#react)

A prompt follows asking if you want to use Tailwind:

- for [vanilla with Tailwind](#vanilla-with-tailwind)
- for [react with Tailwind](#react-with-tailwind)

You will also be prompted to enter the name of your project.

## Vanilla

This template sets up a basic HTML, CSS, and JavaScript project. It's perfect for quickly testing out simple web ideas without any additional frameworks or libraries.

Files created:

- `index.html`
- `style.css`
- `app.js`

## React

This template sets up a basic React project using CDN for React and Babel (without any build step). It's ideal for testing out React components and building small React applications quickly.

Files created:

- `index.html`
- `style.css`
- `app.js`

## Vanilla with Tailwind

This template includes Tailwind CSS along with the basic HTML. Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom designs without writing a lot of custom CSS.

Files created:

- `index.html`
- `tailwind.config.js`

## React with Tailwind

This template combines React (CDN version) with Tailwind CSS, giving you the power of React's component-based architecture along with the utility-first CSS approach of Tailwind. It's great for building modern, responsive web applications quickly.

Files created:

- `index.html`
- `app.js`
- `tailwind.config.js`
