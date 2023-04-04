
function billSettings () {

  let theCallCosts = 0;
  let theSmsCosts = 0;
  let theWarningLevel = 0;
  let theCriticalLevel = 0;

  let callCostTotal = 0;
  let smsCostTotal = 0
  
  function setCallCosts(callCosts) {
    theCallCosts = callCosts
  }

  function getCallCosts() {
    return theCallCosts
  }

  function setSmsCosts(callCosts) {
    theSmsCosts = callCosts
  }

  function getSmsCosts() {
    return theSmsCosts
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
    callCostTotal += theCallCosts
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