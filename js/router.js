Restaurants.Router.map(function() {
  this.resource('tables', { path: '/' });
  this.resource('selections', { path: '/selections'})
});


Restaurants.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table');
  }
});

Restaurants.TableRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('table', function(table) {
      return table.get('id')
    });
  }
});

Restaurants.SelectionsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('selection');
  }
});

