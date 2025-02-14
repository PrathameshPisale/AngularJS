import * as angular from "angular";

export class OrderController
{
  static $inject = ['$scope'];

  order: { email: string, password: string };

  constructor()
  {
    this.order = {email: "", password: ""}
  }
}

angular.module('store').controller('OrderController',  OrderController);