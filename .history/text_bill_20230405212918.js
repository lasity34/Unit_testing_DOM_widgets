function textBill() {
  let theCallCost = 0;
  let theSmsCost = 0;
  let theTotalCost = 0;
  let theWarningLevel = 0;
  let theCriticalLevel = 0;

  let totalCallCost = 0;
  let totalSmsCost = 0;

  function setCallCosts(callcost) {
    theCallCost = callcost;
  }

  function getCallCosts() {
    return theCallCost;
  }

  function setSmsCost(smsCost) {
    theSmsCost = smsCost;
  }

  function getSmsCost() {
    return theSmsCost;
  }

  function setWarningLevel(warningLevel) {
    theWarningLevel += warningLevel;
  }

  function getwarningLevel() {
    return theWarningLevel;
  }

  function setCriticalLevel(criticalLevel) {
    theCriticalLevel += criticalLevel;
  }

  function getCriticalLevel() {
    return theCriticalLevel;
  }

  function setTotalCostString(str) {
    if (str.includes("sms")) {
      totalSmsCost += 0.75;
    } else if (str.includes("call")) {
     totalCallCost += 2.75;
    }
  }

 
  function getTotalSmsCost() {
    return totalSmsCost 
  }

  function getTotalCallCost() {
    return totalCallCost 
  }

 theTotalCost = totalCallCost + totalSmsCost

  function getTotalCost() {
    return totalCallCost + totalSmsCost
  }

  function totalClassName() {
    if (getTotalCost() >= getCriticalLevel()) {
      return "critical";
    } else if (getTotalCost() >= getwarningLevel()) {
      return "warning";
    }
  }

  return {
    setCallCosts,
    getCallCosts,
    setSmsCost,
    getSmsCost,
    setWarningLevel,
    getwarningLevel,
    setCriticalLevel,
    getCriticalLevel,
    setTotalCostString,
    getTotalSmsCost,
    getTotalCallCost,
    getTotalCost,
    totalClassName,
  };
}
