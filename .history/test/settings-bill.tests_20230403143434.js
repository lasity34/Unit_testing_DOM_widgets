describe("The bill with settings factory functions", function () {
    it("should be able to set the call cost", function() {
      let settingsBill = billWithSettings()

      settingsBill.setCallCost(2)
      assert.equal(2, settingsBill.getCallCost())

      let settingsBill2 = billWithSettings();

      settingsBill2.setCallCost(3)
      assert.equal(3, settingsBill2.getCallCost())
    })


  });