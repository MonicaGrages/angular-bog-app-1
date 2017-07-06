import newCreatureController from "./new.controller.js";
import newCreatureTemplate from "./new.html";

console.log("new creature component");


const newCreatureComponent = {
  controller: newCreatureController,
  template: newCreatureTemplate
};

angular.module("BogApp").component("newCreature", newCreatureComponent);
