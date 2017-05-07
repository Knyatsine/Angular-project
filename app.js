
(function(){
var app =angular.module('store',[]);

app.controller('StoreController',function(){
	this.products = gem;
});

var gem = [
		  	{
				name:'Perfume',
				price:2.95,
				description:'Smells very beautful, really good for ladies ',
				canPurchase:true,
				images:
				{
					full:'https://a57ed064b59d6d24a0db-e6a144f900fc09b8b2fc3bba00c88f87.ssl.cf3.rackcdn.com/assets/en-gb/images/product/prod_1173491_1_613x613.jpg',
					thumb:'http://vivamanchester.co.uk/wp-content/uploads/2015/09/perfume-3-edited.jpg'
				}
		    },
			{
				name:'Deodorant',
				price:5.5,
				description:'Get rid of those bad smells by using this refreshing product',
				canPurchase:true,
				images: {
					full:'https://a57ed064b59d6d24a0db-e6a144f900fc09b8b2fc3bba00c88f87.ssl.cf3.rackcdn.com/assets/en-gb/images/product/prod_1173491_1_613x613.jpg',
					thumb:'http://vivamanchester.co.uk/wp-content/uploads/2015/09/perfume-3-edited.jpg'
				}


			}
		  ]

})();