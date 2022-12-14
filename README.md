# ReactiveFormTestDemo3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Configure Jest

Remove any reference to Jasmine/Karma in the package.json

```npm
npm remove @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter
```

Install Jest

```npm
npm i --save-dev jest jest-preset-angular @types/jest
```

Create the setup-jest.ts in the proyect folder in the next content.

```js
import "jest-preset-angular/setup-jest";
```

Add to package json

```json
"jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-jest.ts"
    ],
    "globalSetup": "jest-preset-angular/global-setup"
  }
```

Configure JEST in tsconfig.json and tsconfig.spec.json

```json
    "types": ["jest"]
```

Configure the comands to execute the test in the package.json

```json
    "test": "jest",
    "test:watch": "jest --watchAll",
```

Remover karma.conf.js and the file test.ts

##
