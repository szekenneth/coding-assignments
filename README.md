# Cart


<br>
<p align="center">
 <img src="https://i.imgur.com/OESQ8sq.gif"></img>
</p>

<br>

## Requirements
* NodeJS 16.x or higher
* Angular 11.x or higher / Latest AngularJS (bonus points if you did this)
* Github account

## Getting Started
* fork the repository
* Make it private repository
* add user `btoaelbore` as Collaborator
* update this `README` file to include the installation guide

## IMPORTANT
* DON'T CREATE PULL REQUEST
* DON'T use any 3rd party UI library i.e Material Design or Bootstrap

## Installation
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.
* Install required packages using `npm install` on currect directory.
* Development server
  * Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Create Simple Shopping Cart 
Please see the Attached `gif` for the Design
* List all the Products 
  * Product Name, 
  * Description 
  * Price of the Product
  * In Stock (Should be hidden in UI)
* On Each Product it should have "Add to Cart" button
* When i click the "Add to Cart" button it should
  * Add to Cart List
  * Increment the quantity of each Product in the Cart List
  * Increment the number of quantity in the header 
* List all the Products that you added to the Carts 
  * Product Name
  * Description
  * Price of the Product
  * Quantity
* On Each Product in the Cart it should have "Remove from Cart" button
* When I click the "Remove from Cart" button it should 
  * Decrement number of quantity of the Product
  * Decrement the total number of quantity in the header
  * When the quantity of each Product become "0" zero it will remove from list


## Notes
* If you have questions and concerns you can create discussion, Go to "Discussion" tab then create New
* Data should only in the client side you can use `localStorage`, `Singleton variable`, or `state management` library
* Make it simple DON'T use any 3rd Party UI Library i.e Material Design or Angular Bootstrap
* Don't over Architect it


