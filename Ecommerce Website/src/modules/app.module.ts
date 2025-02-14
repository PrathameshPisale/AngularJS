import * as angular from 'angular';
import 'angular-route';
import { LoginController } from '../controllers/login.controller';
import { HomeController } from '../controllers/home.controller';
import { ListController } from '../controllers/list.controller';
import { OrderController } from '../controllers/order.controller';
import { ProductController } from '../controllers/products.controller';

const appModule = angular.module('store', ['ngRoute']);

appModule.config(['$routeProvider', ($routeProvider: any) => {
  $routeProvider
    .when("/list", { 
      templateUrl: "views/list.html",
      controller: "ListController",
      controllerAs: "ListCtrl"
    })
    .when("/login", {
      templateUrl: "index.html",
      controller: "LoginController",
      controllerAs: "LoginCtrl"
    })
    .when("/home", {
      templateUrl: "views/home.html",
      controller: "HomeController",
      controllerAs: "HomeCtrl"
    })
    .when("/order", {
      templateUrl: "views/order.html",
      controller: "OrderController",
      controllerAs: "OrderCtrl"
    })
    .otherwise({ redirectTo: "/login" });
}]);

angular.module('store').controller('LoginController', ['$scope', LoginController]);
angular.module('store').controller('HomeController', HomeController);
angular.module('store').controller('ListController', ListController);
angular.module('store').controller('OrderController', OrderController);
angular.module('store').controller('ProductController', ProductController);