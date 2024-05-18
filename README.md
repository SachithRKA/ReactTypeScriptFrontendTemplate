# React TypeScript Frontend Template

## Introduction
React TypeScript Frontend Template is a comprehensive React frontend template featuring a home page, login, register, database, and membership plan page. It serves as a foundation for building web applications with React and TypeScript.

## Features
- **Home Page**: A landing page providing an overview of the application.
- **Login Page**: Allows users to authenticate and access secured features.
- **Register Page**: Enables new users to create accounts.
- **Database Integration**: Incorporates database functionality for storing and retrieving data.
- **Membership Plan Page**: Displays membership plans and features for users.

## Getting Started
You can access the hosted version of this template via the following link: [React TypeScript Frontend Template](https://sachithrka.github.io/ReactTypeScriptFrontendTemplate/).

## Hosting with GitHub Pages
This project is hosted using GitHub Pages. To host your React application using GitHub Pages, follow these steps:
1. Ensure your project is a React application with a `build` folder generated.
2. Install the `gh-pages` package as a dev dependency:
   ```bash
   npm install gh-pages --save-dev
   ```
3. Add a `homepage` field to your `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/your-repository-name"
   ```
4. Add the following scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
   }
   ```
5. Deploy your application by running:
   ```bash
   npm run deploy
   ```

## Usage
Simply navigate to the provided link to start using the template. No installation is required.

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License
This project is licensed under the [MIT License](LICENSE).
