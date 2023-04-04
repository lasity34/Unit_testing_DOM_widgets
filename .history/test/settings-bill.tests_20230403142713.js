describe("The bill with settings factory functions", function () {
    it("should be able to set the call cost", function() {
      let settingsBill = billWithSettings()

      settingsBill.setCallCosts(2)
      assert.equal(2, getCallCosts(2))
    })
  });