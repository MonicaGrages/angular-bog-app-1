const angular = require("angular");
require("angular-ui-router");

angular.module("BogApp", ["ui.router"]).config(router);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      template: "<creatures></creatures>"
    })
    .state("creature", {
      url: "/creature/:id",
      template: "<creature></creature>"
    })
    .state("newCreature", {
      url: "/creature/new",
      template: "<new-creature></new-creature>"
    });

  $urlRouterProvider.otherwise("/");
}
