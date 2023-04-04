describe("The bill with settings factory functions", function () {
    it("should be able to set the call cost", function() {
        let settingsBill = billWithSettings
        settingsBill.getCallCost(1.85)
        assert.equal(1.85, settingsBill.getCallCost())
    })
  });