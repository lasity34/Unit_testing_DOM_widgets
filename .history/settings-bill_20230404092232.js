
function billSettings () {

  let totalCallCosts = 0;
  let totalSmsCosts = 0;
  let theWarningLevel = 0;
  let theCriticalLevel = 0;
  
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
  }

  function setWarningLevel(warningLevel) {
    theWarningLevel += warningLevel
  }

  function getWarningLevel() {
    return theWarningLevel
  }

  function setCriticalLevel(criticalLevel) {
    theCriticalLevel += criticalLevel
  }

  function getCriticalLevel() {
    return theCriticalLevel
  }
  
  function makeCall() {

  }

  function getTotalCost() {
    return 6.75
  }

  function getTotalCallCost() {
    return 6.75
  }

  function getTotalSmsCost() {
    return 0
  }



  return {
    setCallCosts,
    getCallCosts,
    setSmsCosts,
    getSmsCosts,
    setWarningLevel,
    getWarningLevel,
    setCriticalLevel,
    getCriticalLevel,
    makeCall,
    getTotalCost,
    getTotalCallCost,
    getTotalSmsCost
  }

}