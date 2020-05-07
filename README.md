# Angular9Course1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

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

## Course help
Поля класса описываем в следующей последовательности, блоки полей и методы отделяем
пустой строкой:
(1) - Инпуты,
(2) - Аутпуты
(3) - Другие декорируемые свойства
(4) - публичные поля
(5) - приватные поля
(6) - конструктор
(7) - методы жизненного цикла с префиксом ng
(8) - обработчики событий с префиксом on
(9) - публичные методы
(10)- приватные методы

Проект организовать по функционалу, а не по типам сущностей.
Например:
 cart
    components
    models
    services
 products
    components
    models
    services
 shared
    directives
    pipes
 core
    services
