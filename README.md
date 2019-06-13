# Final Project - Handout Donation Stories


## About the Application

1. This application is being developed by the 'The Scriptors' group - Ripan Halder, Nikita Gundyal, Ruchi Niwalkar and Snehal Mundhe.
2. The application is being developed in Angular 6, typescript, rxjs, mongoDB, mangoose, nodeJS.
3. This site will be used for donating money or other charity items to the needy.
4. The exclusive feature of this application will be exempting the tax amounts on the donated money.

## User Stories
1. An user should be able to sign up sucessfully to the application.
2. An user should be able to enter correct inputs on the sign up page and validate all details correctly.
3. An user should be able to navigate to different pages using the navigation bar.
4. An user must be able to add a new story.
5. An user should be able to view a story having story-title, story-content, story-image, story-likes and story-comments.
6. An user must be able to login successfully to the application.
7. An user should be able to enter correct inputs on the login page and validate all details correctly.
8. An user should be able to donate money by routing to the donation/ payment page.
9. An user should be able to add payment details.
10. An user who is an admin should be able to delete or update an existing story.
11. An user should be able to delete own comments.
12. An user shouldbe able to like a story.

## Domain Driven Design
1. We have added the entity classes in the design - Users, Admin, Donors, Recipent, Payment, Story, Category.
2. The classes Admin, Donors and Recipient has an aggregation association with classes Users and Payment.
3. The Story class has an aggregation association with Category.
4. The payment class has a value object of Address.
5. All the entities will connect to the database through services.
6. The repository will have tables like Users, Admin, Donors, Recipent, Payment, Story, Category.
7. The Users table will have a foreign key of Admin / Donors/ Recipient.

### The design is as below:

<img src="./Donation_DDD.svg">

# Angular6

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

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
