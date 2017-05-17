var app = app || {};

$(document).ready(function () {
  app.router = new app.AppRouter();
  Backbone.history.start();
  console.log("The page has loaded - pages.js");
});
