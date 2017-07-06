CreatureController.$inject = ["$stateParams", 'creaturesService'];
function CreatureController($stateParams, creaturesService){
  var vm = this;

  function activate() {
    creaturesService.getCreature($stateParams.id).then(response => {
      vm.creature = response;
    })
  }

  vm.updateCreature = function() {
    vm.creatureToEdit = vm.creature;
    creaturesService.updateCreature(vm.creatureToEdit).then(response => {
      vm.creature = response;
    })
    vm.isEditing = false;
  }


  activate();

}
export default CreatureController;
