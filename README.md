# Pokémon - Tekever

![Preview-Screens](https://i.imgur.com/fXL36vT.jpg)

## Why?

This project is part of Tekever's selection process for Dev ReactJS.

The application basically consists of a list of pokémons, from the list the user can consult specific pokémon details and also add it to the favorites list.

As much as possible I tried to build a user-friendly and functional interface.

## A few notes about this App

**1** - It was built on the basis of `create-react-app`.

**2** - For this challenge I used the `Material-UI`, which brings all the features of Material Design to React projects.

**3** - Application state management is done with `Context API`.

**4** - Local storage is used to save the user's favorite pokemons.

**5** - As few pages were created, routing is done with `react-router-dom`.

## Functionalities

- Home Page:
  - List of pokemons, the list brings 20 pokemons, if the user wants to see others, he can use the pagination system.

- Details:
  - On the home page, the user can select a pokemon and is directed to the page to consult their characteristics in detail. At this point, the user can favorite their pokémon. When it does this, a list is created in the local storage with this information.
  
- Favourites:
  - It's like the home page, which brings up a list of pokemons, but at the moment it only brings up the pokemons that the user has favorited on the details page.

## Starting the Application

### Prerequisites

To run this project in development mode, you will need a basic environment to run a React application, which you can find [here.](https://reactjs.org/docs/getting-started.html)

### Installing

**Cloning this repository**

```
$ https://github.com/bernalvinicius/pokemon-tekever
$ cd pokemon-tekever
```

**Installing dependencies**

```
$ yarn
```

_ou_

```
$ npm install
```

**Run Application**

With all dependencies installed and the environment configured correctly, you can now run the project.

```
$ npm start
```

## Built with

**Ps:** Below I will talk about some plugins, all of them in [Visual Studio Code](https://code.visualstudio.com/).

After generating a new project with 'npx create-react-app', I created some extra files to leave the application pre-configured at compilation and indentation levels.

The following files were created: (in the project root):

- **.prettierrc**

For this file to be valid, the extension must be added [Prettier – Code formatter](https://prettier.io/). Prettier is nothing more than a code formatter, it ensures that all emitted code conforms to a consistent style. For example, you can write a line of code that gets too long, you can limit the maximum line length to 60 characters, and then Prettier will do the work of organizing the code for you. With the extension installed and the file created, you can start configuring the file. For more informations: [Prettier](https://prettier.io/).

- **jsconfig.json**

The jsconfig.json file specifies root files and options for the features provided by the JavaScript service. For example, by default the JavaScript language service will parse and provide IntelliSense for all files in your JavaScript project. If you want to specify which files to exclude or include to provide proper IntelliSense, you can use a property in jsconfig.json to do so. For more informations: [jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig).

- **.eslintrc.js**

ESLint is designed to be configurable, you can disable all rules and run with just basic syntax validation, or mix and match grouped rules and custom rules. We configure ESLint through the .eslintrc.js file, it specifies all the configuration information that we want to apply. For more informations: [ESLint Documentation](https://eslint.org/docs/user-guide/configuring). You must also install the extension of [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

After creating all these files and extensions, the following dependencies were installed:

- [React](https://reactjs.org/)
- [React-Router-Dom](https://reactrouter.com/)
- [ESlint](https://eslint.org/)
- [eslint-config-airbnb](https://github.com/airbnb/javascript)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme)
- [eslint-import-resolver-alias](https://github.com/johvin/eslint-import-resolver-alias#readme)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#readme)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react)
- [Prettier](https://github.com/prettier/prettier)
- [prop-types](https://github.com/facebook/prop-types)

## Contacts

Email-me: vinicius.bernal@agap2.pt

Thank you