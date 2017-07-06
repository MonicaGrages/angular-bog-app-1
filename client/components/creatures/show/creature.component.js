import creatureController from "./creature.controller";
import creatureTemplate from "./creature.html";

const creatureComponent = {
  controller: creatureController,
  template: creatureTemplate
};

angular.module("BogApp").component("creature", creatureComponent);
