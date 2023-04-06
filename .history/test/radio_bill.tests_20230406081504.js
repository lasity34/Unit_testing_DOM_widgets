

describe("Bill with radio buttons factory function", function() {
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
        assert.equal(0.75, billWithRadio.getSmsCost())
    })

    it("warning level should have a value of 30", function() {
        const billWithRadio = radioBill()

       billWithRadio.setWarningLevel(30)

       assert.equal(30, billWithRadio.getwarningLevel())
    })

    it("Critical level should have a value of 50", function() {
        const billWithRadio = radioBill()

       billWithRadio.setCriticalLevel(50)

       assert.equal(50, billWithRadio.getCriticalLevel())
    })
})

describe("use radio button values", function() {
    it("should make 2 calls", function() {
        const billWithRadio = radioBill();

        billWithRadio.setCallCosts(2.75)
        billWithRadio.setSmsCost(0.75)
        billWithRadio.makeCall();
        billWithRadio.makeCall();

        assert.equal(5.5, billWithRadio.getTotalCost())
        assert.equal(5.5, billWithRadio.getCallCostTotal())
        assert.equal(0, billWithRadio.getsmsCostTotal())
    })

    it("should make 3 sms", function() {
        const billWithRadio = radioBill();

        billWithRadio.setSmsCost(0.75)
        billWithRadio.makeSms();
        billWithRadio.makeSms();
        billWithRadio.makeSms();

        assert.equal(2.25, billWithRadio.getTotalCost())
        assert.equal(2.25, billWithRadio.getsmsCostTotal())
        assert.equal(0, billWithRadio.getCallCostTotal())
    })

    it("should make 2 sms and 2 call", function() {
        const billWithRadio = radioBill();

        billWithRadio.setSmsCost(0.75)
        billWithRadio.setCallCosts(2.75)
        billWithRadio.makeSms();
        billWithRadio.makeSms();
        billWithRadio.makeCall();
        billWithRadio.makeCall();

        assert.equal(7.00, billWithRadio.getTotalCost())
        assert.equal(1.5, billWithRadio.getsmsCostTotal())
        assert.equal(5.5, billWithRadio.getCallCostTotal())
    })
})