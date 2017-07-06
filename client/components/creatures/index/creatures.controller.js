  CreaturesController.$inject = ['creaturesService'];
  function CreaturesController(creaturesService){
    var vm = this;

    activate();

    function activate(){
      creaturesService.getAllCreatures().then(response => {
        vm.creatures = response;
      })
    }
  }
  export default CreaturesController;
