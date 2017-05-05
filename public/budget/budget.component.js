function budgetController($firebaseObject) {
	var ref = firebase.database().ref().child("budget");
    this.data = $firebaseObject(ref);
}

angular.module('budget')
	.component('budget', {
		template: `<p>{{$ctrl.data.groceries}}</p>`,
		controller: budgetController
	});