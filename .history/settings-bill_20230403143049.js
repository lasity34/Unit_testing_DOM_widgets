


  function billWithSettings() {

    let billCost = 0

    function SetCallCost (callCost) {
      billCost = callCost
    }

    function getCallCost () {
     return billCost
    }

    return {
      SetCallCost,
      getCallCost
    }


  }
