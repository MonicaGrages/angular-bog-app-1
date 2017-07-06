editCreatureController.$inject = ['creaturesService', '$state'];

function editCreatureController(creaturesService, $state){
  var vm = this;

  vm.updateCreature = function(id) {
    creaturesService.updateCreature(id).then(response => {
      vm.creature = response;
      $state.go("home");
    })
  }

}
export default editCreatureController;
