

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

    function setWarningLevel()


    return {
        setCallCosts,
        getCallCosts,
        setSmsCost,
        getSmsCost
    }
}