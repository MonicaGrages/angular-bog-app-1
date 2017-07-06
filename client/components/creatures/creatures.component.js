import creaturesController from "./creatures.controller.js";
import creaturesTemplate from "./creatures.html";

const creaturesComponent = {
  controller: creaturesController,
  template: creaturesTemplate
};

angular.module("BogApp").component("creatures", creaturesComponent);
