
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

  function setCriticalLevel(lcriticalLeve) {
    theCriticalLevel += level
  }

  function getCriticalLevel() {
    return theCriticalLevel
  }
  




  return {
    setCallCosts,
    getCallCosts,
    setSmsCosts,
    getSmsCosts,
    setWarningLevel,
    getWarningLevel,
    setCriticalLevel,
    getCriticalLevel
  }

}