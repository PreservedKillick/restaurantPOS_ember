Restaurants.TableController = Ember.ObjectController.extend({


  selectionTotal: function(){
    prices: Ember.computed.mapBy('model.selections', 'price'),
    console.log(Ember.computed.sum('prices'));
  }

});

