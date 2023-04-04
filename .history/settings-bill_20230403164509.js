
function billSettings () {

  let totalCallCosts = 0;
  let totalSmsCosts = 0;
  let warningLevel = 0;
  let criticalLevel = 0;
  
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

  function setWarningLevel(level) {
    warningLevel += level
  }

  function getWarningLevel() {
    return level
  }

  function setCriticalLevel(level) {
    criticalLevel += level
  }

  function getCriticalLevel() {
    return level
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