import editCreatureController from "./edit.controller.js";
import editCreatureTemplate from "./edit.html";


const editCreatureComponent = {
  controller: editCreatureController,
  template: editCreatureTemplate
};

angular.module("BogApp").component("editCreature", editCreatureComponent);
