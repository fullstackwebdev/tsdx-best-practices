
# Full Stack Web Development Typescript NPM Module Bootstrap

www.fullstackwebdevelopment.com



# Recipe

## Create tsdx 

```sh
npx tsdx create tsdx-best-practices
```

## Install Jest

```
npm install jest @types/jest ts-jest
```

## Install Chai
```
npm install chai chai-as-promised 
npm install @types/chai 
npm install @types/chai-as-promised

```

## Git init

```sh
git add .
git commit -m 'Init CP'
```

### Setup Jest

`./jest.config.js`

```js
module.exports = {
  // roots: ['<rootDir>/src'],
  watchPathIgnorePatterns: ['/logs/'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'node',
};

```

### Setup ESLint

```
npm install eslint eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser

```

### eslintrc.js


`.eslintrc.js`

```js
module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
      'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
      'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
      'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
    },
    rules: {
      'ignoreChainWithDept': 0,
      "prettier/prettier": ["error"],
      // "no-unused-vars": 1,
      // "no-underscore-dangle": 1,
      // "no-return-await": "off",
      // "no-console" : ["error", { "allow": ["warn", "error"] }],
      // "consistent-return": 1
  
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
  };
  
```

### Enable ESLint Vscode

1. Vscode -> Extensions
2. Extension: Marketplace -> Eslint
3. Right Click -> Enable Workspace

### Enable Prettier VSCode

1. Vscode -> Extensions
2. Extension: Marketplace -> Prettier
3. Right Click -> Enable Workspace


## Extra features (Feb 2020)

### Babel Plugin Proposal Optional Chaining
### Babel Plugin Transform Object Assign

```
npm install @babel/plugin-proposal-optional-chaining  @babel/plugin-transform-object-assign babel-core 
```

## NPM Update

```
npm update
npm outdated
```

```
npm install -g npm-check-updates
npx ncu

```




-----



# TSDX Bootstrap

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
