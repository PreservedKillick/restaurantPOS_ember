Restaurants.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table');
  }
});
