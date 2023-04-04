describe("The bill with settings factory functions", function () {
    it("should be able to set the call cost", function() {
        const billWithSettings = billSettings()
        billWithSettings.setCallCosts(3)
        assert.equal(3, billWithSettings.getCallCosts())

        const billWithStrings2 = billSettings();
        billWithStrings2.setCallCosts(2)
        assert.equal(2, billWithSettings.getCallCosts())
    })
    it("should be able to set the sms cost", function() {

    })

  });