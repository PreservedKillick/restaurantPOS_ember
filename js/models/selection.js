Restaurants.Selection = DS.Model.extend({
  tables: DS.hasMany('table'),

  title: DS.attr('string'),
  price: DS.attr('number')
});

Restaurants.Selection.FIXTURES = [
  {
    id: 1,
    title: 'taco',
    price: 1.75
  },
  {
    id: 2,
    title: 'pizza',
    price: 12.00
  },
  {
    id: 3,
    title: 'hummus',
    price: 4.25
  },
  {
    id: 4,
    title: 'pita',
    price: 2.25
  }
];
