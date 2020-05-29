# Angular9Course1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Requirements

Node.js `https://nodejs.org/`
Angular 9.1.4 `npm install -g @angular/cli@9.1.4`
Json server `npm install -g json-server`

## Start the project

Run `git clone https://github.com/EugenePodkovka/Angular9Course1.git`
Open the project folder
Run `json-server --watch src/db/db.json`
The database emulator will be available by the URL `http://localhost:3000`
Run `npm install`
Run `ng serve`
Navigate to `http://localhost:4200/`

## Running tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

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