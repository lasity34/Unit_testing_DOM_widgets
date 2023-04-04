


  function billWithSettings() {

    let billCost = 0

    function setCallCost (callCost) {
      billCost = callCost
    }

    function getCallCost () {
     return billCost
    }

    return {
      setCallCost,
      getCallCost
    }


  }
