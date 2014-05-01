Restaurants.SelectionsController = Ember.ArrayController.extend({
  needs: "table",
  table: Ember.computed.alias("controllers.table"),

  actions: {
    orderSelection: function(selection){
      var table = this.get('table').get('model');
      table.get('selections').pushObject(selection);
    }
  }
});

