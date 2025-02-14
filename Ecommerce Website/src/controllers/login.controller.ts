import * as angular from 'angular';

interface ICustomScope extends angular.IScope
{
  vm: any;
}

export class LoginController
{
  static $inject = ['$scope', '$location'];

  public user: { email: string, password: string };

  constructor(private $scope: ICustomScope)
  {
    this.user = {email: "", password: ""}
    $scope['vm'] = this;
  }

  public onValidate(): void{
    if (this.user.email === 'system' && this.user.password === 'isaplim')
    {
      //Logic
      alert("Correct")
    }
    else{
      //Logic
      alert("Wrong")
    }
  }
}

angular.module('store').controller('LoginController',  LoginController);