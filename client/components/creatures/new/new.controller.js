newCreatureController.$inject = ['creaturesService'];
function newCreatureController(creaturesService){
  var vm = this;

  vm.saveCreature = function() {
    creaturesService.saveCreature().then(response => {
      vm.creature = response.creature;
    })
  }


}
export default newCreatureController;
