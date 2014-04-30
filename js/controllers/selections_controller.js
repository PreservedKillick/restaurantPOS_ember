Restaurants.SelectionsController = Ember.ArrayController.extend({
  selectionTotal: function(){
    return this.get('model.sum');
  }.property('@each.price')
});


//is "sum" viable?  would need to get total of selected selections for a table
//in template, would need to include <div>Total: {{selectionTotal}}</div>
