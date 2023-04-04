

function calculateBill() {
    
    let theCallCost = 0;
    let theSmsCost = 0;
    let theWarningLevel = 0;

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


    return {
        setCallCosts,
        getCallCosts,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getwarningLevel
    }
}