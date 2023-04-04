

  function billWithSettings() {

    let theCallCost = 0

    function setCallCost(callCost) {
     theCallCost = callCost
    }

    function getCallCost() {
      return theCallCost
    }

    

    return {
      setCallCost,
      getCallCost
    }
  }
