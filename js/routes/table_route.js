Restaurants.TableRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('table', params.id);
  }
});
