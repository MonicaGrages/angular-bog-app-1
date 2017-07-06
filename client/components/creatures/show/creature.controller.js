CreatureController.$inject = ["$stateParams", 'creaturesService', '$state'];
function CreatureController($stateParams, creaturesService, $state){
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

  vm.deleteCreature = function() {
    creaturesService.deleteCreature(vm.creature.id).then(response => {
      $state.go('home');
    })
  }


  activate();

}
export default CreatureController;
