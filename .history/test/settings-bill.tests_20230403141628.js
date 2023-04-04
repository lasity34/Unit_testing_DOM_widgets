describe("The bill with settings factory functions", function () {
    it("should be able to set the call cost", function() {
        let settingsBill = billWithSettings()
        settingsBill.setCallCost(1.85)
        assert.equal(1.85, settingsBill.getCallCost())

        let settingsBill2 = billWithSettings()
        settingsBill2.setCallCost(2.75)
        assert.equal(2.75, settingsBill2.getCallCost())
    })
  });