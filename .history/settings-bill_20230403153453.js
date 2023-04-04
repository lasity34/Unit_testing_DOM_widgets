
function billSettings () {

  let totalCallCosts = 0;
  let totalSmsCosts = 0;
  
  function setCallCosts(callCosts) {
    totalCallCosts = callCosts
  }

  function getCallCosts() {
    return totalCallCosts
  }

  return {
    setCallCosts,
    getCallCosts
  }

}