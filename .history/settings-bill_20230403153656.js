
function billSettings () {

  let totalCallCosts = 0;
  let totalSmsCosts = 0;
  
  function setCallCosts(callCosts) {
    totalCallCosts = callCosts
  }

  function getCallCosts() {
    return totalCallCosts
  }

  function setSmsCosts(callCosts) {
    totalSmsCosts = callCosts
  }

  function getSmsCosts() {
    return totalSmsCosts

  return {
    setCallCosts,
    getCallCosts,
    setSmsCosts,
    getSmsCosts
  }

}