

describe("Bill with radio buttons factory settings", function() {
    it("cost of sms should have a value of R0.75", function() {
        const billWithRadio = radioBill()

        billWithRadio.setSmsCost(0.75);
        assert.equal(0.75, billWithRadio.getSmsCost())
    })
})