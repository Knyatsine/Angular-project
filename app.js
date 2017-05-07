
(function(){
var app =angular.module('store',[]);

app.controller('StoreController',function(){
	this.product = gem;
});

var gem = [
{
	name:'Perfume',
	price:2.95,
	description:'Smells very beautful, really good for ladies ',
	canPurchase:true,
	
},

{
	name:'Deodorant',
	price:5.5,
	description:'Get rid of those bad smells by using this refreshing product',
	canPurchase:false,

},


];
})();