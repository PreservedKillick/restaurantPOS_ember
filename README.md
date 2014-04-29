** Make an app for restaurants to keep track of their customers' orders. **

http://www.learnhowtoprogram.com/lessons/restaurant-orders
Day 2 of Ember
4/29/2014

* As a restaurant owner, I want to add tables to my restaurant, so that our servers can keep track of the bill at each table.

* As a restaurant owner, I want to add an item to our menu, so that our servers can note when a table has ordered that item.

* As a server, I want to choose a table and add an item to its bill, so that I can keep track of what the table has ordered.

* As a server, I want to see the total bill for a table, so I know how much to charge my customers.

* As a restaurant owner, I want my users to log in, so that hooligans can't mess with our site. Hint: Ember unfortunately doesn't have a standard way to handle authentication, but the most common is to use an auth token in your request headers. This most popular plugin for this approach is Ember.SimpleAuth. They have a nice version that is compatible with Devise, but it requires some modifications to Devise. The README is pretty incomplete, so I opened a pull request with a better walk-through; until it's merged, you can check it out on my fork.

**************************************************************************
starter-kit
===========

A starter kit for Ember

Your Ember.js project is almost ready! Here's how to get started:

- Start writing your app in js/app.js.

- Describe your application HTML in index.html.

- During development, you can link to js/libs/ember-*.js to get the
  unminified version of Ember.js.

- Add CSS to css/style.css

- Open index.html in your browser

Tests
=====

This starter kit comes with an integration test sample, written for QUnit runner.

You can run the tests by opening the `index.html?test` page in your browser.

The test is located in the `tests/tests.js` file. You can see how such an
integration test should be written, using QUnit assertions and ember-testing helpers.

For more information about ember-testing package see [ember-testing](http://emberjs.com/guides/testing/integration/)

For more information about the QUnit testing framework, see [QUnit](http://qunitjs.com/)

Contact
====

www.emberjs.com
**************************************************************************
