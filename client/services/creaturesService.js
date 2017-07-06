const angular = require("angular");

creaturesService.$inject = ["$http"];

function creaturesService ($http) {
  const service = this;

  service.getAllCreatures = function () {
    return $http.get("/creatures").then(res => {
      return res.data;
    });
  };

  service.getCreature = function (id) {
    return $http.get("/creatures/" + id).then(res => {
      return res.data;
    });
  };

  service.saveCreature = function (newCreature) {
    return $http.post("/creatures", newCreature).then(res => {
      return res.data;
    });
  };

  service.updateCreature = function (creatureToEdit) {
    return $http.put("/creatures/"+creatureToEdit.id, creatureToEdit)
      .then( res => {
        return res.data;
      })
  }

  service.deleteCreature = function(creatureId) {
    return $http.delete('/creatures/'+creatureId);
  }

  return service;
}

angular.module("BogApp").service("creaturesService", creaturesService);
