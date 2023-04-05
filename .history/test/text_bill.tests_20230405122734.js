


describe("Text bill with factory functions", function() {
    it("cost should set call value to R2.75", function () {
        const calculateTextBill = textBill();
    
        calculateTextBill.setCallCosts(2.75);
        assert.equal(2.75, calculateTextBill.getCallCosts());
      });
    
      it("cost should set sms value to R0.75", function () {
        const calculateTextBill = textBill();
    
        calculateTextBill.setSmsCost(0.75);
        assert.equal(0.75, calculateTextBill.getSmsCost());
      });
    
      it("cost should be set sms to R0.75 and call to R2.75", function () {
        const calculateTextBill = textBill();
    
        calculateTextBill.setCallCosts(2.75)
        calculateTextBill.setSmsCost(0.75);
        assert.equal(2.75, calculateTextBill.getCallCosts());
        assert.equal(0.75, calculateTextBill.getSmsCost());
      });
    
      it("should be able to set warning level to 30 ", function () {
        const calculateTextBill = textBill();
    
        calculateTextBill.setWarningLevel(30);
        assert.equal(20, calculateTextBill.getwarningLevel());
      });
    
      it("should be able to set critical level to 50 ", function () {
        const calculateTextBill = textBill();
    
        calculateTextBill.setCriticalLevel(50);
        assert.equal(30, calculateTextBill.getCriticalLevel());
      });
})