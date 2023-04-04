describe("The bill with settings factory functions", function () {
    it("should be able to set the call cost", function() {
        const billWithSettings = billWithSettings()

        billWithSettings.setCallCosts(3)
        assert.equal(3, billWithSettings.getCallCosts())
    })


  });