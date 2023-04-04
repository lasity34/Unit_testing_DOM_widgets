describe("The bill with settings factory functions", function () {
    it("should be able to set the call cost", function() {
        const billWithSettings = billSettings()
        billWithSettings.setCallCosts(3)
        assert.equal(3, billWithSettings.getCallCosts())

        const billWithSettings2 = billSettings();
        billWithSettings2.setCallCosts(2)
        assert.equal(2, billWithSettings2.getCallCosts())
    })
    it("should be able to set the sms cost", function() {
        const billWithSettings = billSettings()
        billWithSettings.setSmsCosts(0.85)
        assert.equal(0.85, billWithSettings.getSmsCosts())

        const billWithSettings2 = billSettings();
        billWithSettings2.setSmsCosts(0.75)
        assert.equal(0.75, billWithSettings2.getSmsCosts())
    })
    it("should be able to set both the sms and the call cost", function() {
     

        const billWithSettings2 = billSettings();
        billWithSettings2.setCallCosts(2.85)
        billWithSettings2.setSmsCosts(0.75)
        assert.equal(0.75, billWithSettings2.getSmsCosts())
    })


  });