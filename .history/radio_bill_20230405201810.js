
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
        smsCostTotal += getSmsCost
    }

    function makeCall() {
        callCostTotal += getCallCosts
    }


    function getTotalCost() {
        return smsCostTotal + callCostTotal
      }
    
      function totalClassName() {
        if (theTotalCost >= getCriticalLevel()) {
          return "critical";
        } else if (theTotalCost >= getwarningLevel()) {
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
        getTotalCost,
        totalClassName,
        makeCall,
        makeSms
      };
}