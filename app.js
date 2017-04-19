(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope){
	var lunch = this;
	lunch.message = "";

	lunch.check = function(){
		if(lunch.list === ""){
			lunch.message = "Please enter data first";
		}
		else
		{
			console.log(lunch.list.split(",").length);
			if (lunch.list.split(",").length > 3){
				lunch.message = "Too Much!";
			}
			else{
				lunch.message = "Enjoy!";
			}

		}
		
	}
}


})();