(function() {
  var app = angular.module('gemStore', ['store-directives']);
  var store;
      
  app.controller('StoreController', ['$scope', '$http', function($scope, $http){
    store = this;
    $http.get('store-products.json').then(function(data) {
      store.products= JSON.parse(localStorage.getItem("products")) || data.data;
      localStorage.setItem('products', angular.toJson(store.products));
    })
  }]);
  app.controller('ReviewController', function() {
    this.review = {};
    this.addReview = function(product){
      for(var i=0; i<store.products.length; i++){
        if(store.products[i].name == product.name){
          store.products[i].reviews.push(this.review);
          localStorage.setItem('products', JSON.stringify(store.products));
        }
      }      
    };
  });
})();