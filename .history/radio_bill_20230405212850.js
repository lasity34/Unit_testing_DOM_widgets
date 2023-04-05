
function radioBill() {
    let theCallCost = 0;
    let theSmsCost = 0;
    let theTotalCost = 0;
    let theWarningLevel = 0;
    let theCriticalLevel = 0;

    let callCostTotal = 0;
    let smsCostTotal = 0;
  
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

   
    function makeSms() {
        smsCostTotal += theSmsCost
    }

    function makeCall() {
        callCostTotal += theCallCost
    }

    function getCallCostTotal() {
        return callCostTotal
    }

    function getsmsCostTotal() {
        return smsCostTotal
    }

    function getTotalCost() {
        return  callCostTotal + smsCostTotal
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
        getsmsCostTotal,
        getCallCostTotal,
        getTotalCost,
        totalClassName,
        makeCall,
        makeSms
      };
}