(function(){
  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    $http.get('store-products.json').then(function(response){
        store.products = response.data;
    });
  }]);

    app.controller("ReviewController", function(){
      this.review = {};

      this.addReview = function(product){
        product.reviews.push(this.review);
        this.review = {};
      };

    });

})();
