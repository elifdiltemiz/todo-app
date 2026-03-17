# React Todo App

This project is a simple Todo List application developed using React and Vite. The application allows users to create, manage, and track daily tasks through a clean and minimal interface. It demonstrates the use of modern React development practices together with a fast build environment provided by Vite.

## Project Overview

The purpose of this project is to build a basic task management interface where users can add tasks, mark them as completed, and remove them when they are no longer needed. The application focuses on simplicity, usability, and component-based architecture.

## Technologies Used

React
Vite
Tailwind CSS
JavaScript (ES6)

## Features

Add new tasks
Mark tasks as completed
Delete tasks from the list
Responsive user interface
Fast development and build process using Vite

## Installation

Clone the repository:

```bash
git clone https://github.com/elifdiltemiz/react-todo-app.git
```

Navigate to the project folder:

```bash
cd react-todo-app
```

Install the required dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run locally at:

```
http://localhost:5173
```

## Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
todo-app
│
├── src
│   ├── components
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public
├── index.html
├── package.json
└── vite.config.js
```

## Author

Elif Diltemiz
Computer Engineering Student
Alanya Alaaddin Keykubat University


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
