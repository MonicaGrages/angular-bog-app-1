newCreatureController.$inject = ['creaturesService', '$state'];

function newCreatureController(creaturesService, $state){
  var vm = this;
  vm.creature = {};

  vm.saveCreature = function() {
    creaturesService.saveCreature(vm.creature).then(response => {
      vm.creature = response;
      $state.go("home");
    })
  }


}
export default newCreatureController;
