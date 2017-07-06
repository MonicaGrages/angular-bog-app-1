  CreatureController.$inject = ["$stateParams", 'creaturesService'];
  function CreatureController($stateParams, creaturesService){
    var vm = this;

    function activate() {
      creaturesService.getCreature($stateParams.id).then(response => {
        vm.creature = response;
      })
    }


    activate();

  }
  export default CreatureController;
