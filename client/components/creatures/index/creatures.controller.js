  CreaturesController.$inject = [];
  function CreaturesController(){
    var vm = this;

    activate();

    function activate(){
      vm.creatures = [];
    }
  }
  export default CreaturesController;
