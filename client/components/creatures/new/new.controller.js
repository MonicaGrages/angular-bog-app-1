newCreatureController.$inject = ['creaturesService', '$state'];

function newCreatureController(creaturesService, $state){
  var vm = this;
  vm.creature = {};

console.log('hello');

  vm.saveCreature = function() {
    console.log("hi");
    creaturesService.saveCreature(vm.creature).then(response => {
      vm.creature = response;
      $state.go("home");
    })
  }


}
export default newCreatureController;
