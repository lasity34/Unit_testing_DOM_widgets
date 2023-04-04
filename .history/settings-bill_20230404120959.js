function billSettings() {
  let theCallCost = 0;
  let theSmsCost = 0;
  let theWarningLevel = 0;
  let theCriticalLevel = 0;

  let callCostTotal = 0;
  let smsCostTotal = 0;

  function setCallCosts(callCosts) {
    theCallCost = callCosts;
  }

  function getCallCosts() {
    return theCallCost;
  }

  function setSmsCosts(smsCosts) {
    theSmsCost = smsCosts;
  }

  function getSmsCosts() {
    return theSmsCost;
  }

  function setWarningLevel(warningLevel) {
    theWarningLevel += warningLevel;
  }

  function getWarningLevel() {
    return theWarningLevel;
  }

  function setCriticalLevel(criticalLevel) {
    theCriticalLevel += criticalLevel;
  }

  function getCriticalLevel() {
    return theCriticalLevel;
  }

  function makeCall() {
    if (!hasBeenReached) {
      callCostTotal += theCallCost;
    }
  }

  function getTotalCost() {
    return callCostTotal + smsCostTotal;
  }

  function getTotalCallCost() {
    return callCostTotal;
  }

  function makeSms() {
    if (!hasBeenReached()) {
      smsCostTotal += theSmsCost;
    }
  }

  function getTotalSmsCost() {
    return smsCostTotal;
  }

  function hasBeenReached() {
    return getTotalCost() >= getCriticalLevel();
  }

  function totalClassName() {
    if (hasBeenReached()) {
      return "critical";
    }

    if (getTotalCost() >= getWarningLevel()) {
      return "warning";
    }
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
    getTotalSmsCost,
    makeSms,
    totalClassName,
  };
}
