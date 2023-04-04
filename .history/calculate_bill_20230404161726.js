

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

    function setSmsCostString(str) {
        const splitStr = str.split(",").map(item => item.includes(sms) ? item += 0.75 : item)
        console.log(splitStr)
    }

  


    function getTotalCost() {
        return theTotalCost
    }


    return {
        setCallCosts,
        getCallCosts,
        setSmsCost,
        getSmsCost,
        setSmsCostString,
        setWarningLevel,
        getwarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        getTotalCost,
       
    }
}