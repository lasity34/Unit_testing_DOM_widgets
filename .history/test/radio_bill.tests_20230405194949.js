

describe("Bill with radio buttons factory settings", function() {
    it("cost of sms should have a value of R0.75", function() {
        const billWithRadio = radioBill()

        billWithRadio.setSmsCost(0.75);
        assert.equal(0.75, billWithRadio.getSmsCost())
    })

    it("cost of call should have a value of R2.75", function() {
        const billWithRadio = radioBill()

        billWithRadio.setCallCosts(2.75);
        assert.equal(2.75, billWithRadio.getCallCosts())
    })

    it("cost of call should have a value of R2.75 and sms should have value of R0.75", function() {
        const billWithRadio = radioBill()

        billWithRadio.setCallCosts(2.75);
        billWithRadio.setSmsCost(0.75)
        assert.equal(2.75, billWithRadio.getCallCosts())
        assert.equal(0.75, billWithRadio.getSmsCosts())
    })
})