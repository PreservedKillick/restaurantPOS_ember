Restaurants.Router.map(function(){
  this.resource('tables', { path:'/'}, function(){
    this.route('create');
    this.resource('table', { path:'/:table_id'}, function(){
      this.resource('selections', { path: '/selections'});
    });
  });
});

Restaurants.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('tables');
  }
});

Restaurants.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table');
  }
});

Restaurants.TableRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('table', params.table_id);
  }
});

Restaurants.SelectionsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('selection');
  }
});

