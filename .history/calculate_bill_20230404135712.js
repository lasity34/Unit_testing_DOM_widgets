

function calculateBill() {
    
    let theCallCost = 0

    function setCallCosts(callcost) {
        theCallCost = callcost
    }

    function getCallCosts() {
        return theCallCost
    }


    return {
        setCallCosts,
        getCallCosts
    }
}