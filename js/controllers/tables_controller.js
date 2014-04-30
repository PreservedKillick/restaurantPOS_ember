Restaurants.TablesController = Ember.ArrayController.extend({
  actions: {
    createTable: function() {
      var number = this.get('newNumber');
      if (!number.trim()) { return; }

      var table = this.store.createRecord('table', {
        number: number
      });

      this.set('newNumber', '');

      table.save();
    }
  }
});
