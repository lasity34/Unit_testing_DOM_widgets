

function calculateBill() {
    
    let theCallCost = 0;
    let theSmsCost = 0;
    let theTotalCost = 0
    let theWarningLevel = 0;
    let theCriticalLevel = 0;
    


    function setCallCosts(callcost) {
        theCallCost = callcost
    }

    function getCallCosts() {
        return theCallCost
    }

    function setSmsCost(smsCost) {
        theSmsCost = smsCost
    }

    function getSmsCost() {
        return theSmsCost
    }

   

    

    function setWarningLevel(warningLevel) {
        theWarningLevel += warningLevel
    }

    function getwarningLevel() {
        return theWarningLevel
    }

    function setCriticalLevel(criticalLevel) {
        theCriticalLevel += criticalLevel
    }

    function getCriticalLevel() {
        return theCriticalLevel
    }

    function setTotalCostString(str) {
    
        const splitString = str.split(",")

        for (let i = 0; i < splitString.length; i++) {
            if (splitString[i].includes("sms")) {
                theTotalCost += 0.75
            } else if (splitString[i].includes("call")) {
                theTotalCost += 2.75
            }
        }
      
    }

  


    function getTotalCost() {
        return theTotalCost
    }

    function totalClassName() {
        if (theTotalCost >= getCriticalLevel) {
            return "critical"
        } else if (theTotalCost >= getwarningLevel) {
            return "warnings"
        }
    }


    return {
        setCallCosts,
        getCallCosts,
        setSmsCost,
        getSmsCost,
        setTotalCostString,
        setWarningLevel,
        getwarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        getTotalCost,
       totalClassName
    }
}