

describe("Calculating bill with factory functions", function() {
    it("cost should be set to R2.75", function() {

        const calculateWithBill = calculateBill();

        calculateWithBill.setCallCosts(2.75);
        assert.equal(2.75, calculateWithBill.getCallCosts())


    })
})