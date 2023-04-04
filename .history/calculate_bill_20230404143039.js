

function calculateBill() {
    
    let theCallCost = 0
    let theSmsCost = 0

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


    return {
        setCallCosts,
        getCallCosts,
        setSmsCost,
        getSmsCost
    }
}