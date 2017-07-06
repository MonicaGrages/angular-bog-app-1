import newCreatureController from "./new.controller.js";
import newCreatureTemplate from "./new.html";


const newCreatureComponent = {
  controller: newCreatureController,
  template: newCreatureTemplate
};

angular.module("BogApp").component("newCreature", newCreatureComponent);
