# IvyDynamicModule

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



Bazel + Rollup?
Will dynamically loaded modules resolve the entire dependency chain?
What is the recommended way to go forward with dynamic loading modules?

https://github.com/angular/angular-bazel-example
https://medium.com/@gregmagolan/production-code-splitting-with-bazel-8a7da242bf83

If the dependency is already loaded into the app, it should just use that instead of having to download it again.


New Angular project that loads an external module outside of angular app and have it loaded into the angular app 8.
