

describe("Calculating bill with factory functions", function() {
    it("cost should be set call to R2.75", function() {

        const calculateWithBill = calculateBill();

        calculateWithBill.setCallCosts(2.75);
        assert.equal(2.75, calculateWithBill.getCallCosts());

       

    })
    it("cost should be set sms to R0.75", function() {

        const calculateWithBill = calculateBill();

        calculateWithBill.setSmsCost(0.75);
        assert.equal(0.75, calculateWithBill.getSmsCost())


    })
})