window.Restaurants = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_ACTIVE_GEMERATION: true
});


Restaurants.ApplicationAdapter = DS.FixtureAdapter.extend();

// Restaurants.ApplicationAdapter = DS.LSAdapter.extend({
//   namespace: 'tables-emberjs'
// }
