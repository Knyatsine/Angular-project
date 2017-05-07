
(function(){
var app =angular.module('store',[]);

app.controller('StoreController',function(){
	this.product = gem;
});

var gem = {
	name:'Perfume',
	price:2.95,
	description:'Smells very beautful, really good for ladies ',
	canPurchase:false,
	soldOut:false,
}

})();