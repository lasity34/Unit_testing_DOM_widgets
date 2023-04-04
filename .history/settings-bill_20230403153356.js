
function billWithSettings () {

  let TotalCallCosts = 0;
  
  function setCallCosts(callCosts) {
    TotalCallCosts = callCosts
  }

  function getCallCosts() {
    return TotalCallCosts
  }

  return {
    setCallCosts,
    getCallCosts
  }

}