import * as angular from 'angular';

export class ProductController
{
  static $inject = ['$scope'];

  products: { id: number, name: string, price: number, picture: string}[];

  constructor()
  {
    this.products = [
      { id: 1, name: "Laptop", price: 45000, picture: "laptop.png" },
      { id: 2, name: "Mouse", price: 500, picture: "mouse.png" },
      { id: 3, name: "Keyboard", price: 1000, picture: "keyboard.png" },
      { id: 4, name: "Monitor", price: 6000, picture: "monitor.png" }
    ]
  }
}

angular.module('store').controller('ProductController',  ProductController);