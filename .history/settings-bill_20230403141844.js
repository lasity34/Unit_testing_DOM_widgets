

  function billWithSettings() {

    let theCallCost = 0

    function setCallCost(callCost) {
     theCallCost = callCost
    }

    

    return {
      setCallCost
    }
  }
