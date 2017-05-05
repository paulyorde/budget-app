function BankController($firebaseObject) {
   var ref = firebase.database().ref().child("bank");
   this.data = $firebaseObject(ref);
}

angular.
  module('bank').
  component('bank', {
    template: `{{$ctrl.data.total}}`,
    controller: BankController 
  });

  