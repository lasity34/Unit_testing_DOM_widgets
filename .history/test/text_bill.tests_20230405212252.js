


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
        assert.equal(30, calculateTextBill.getwarningLevel());
      });
    
      it("should be able to set critical level to 50 ", function () {
        const calculateTextBill = textBill();
    
        calculateTextBill.setCriticalLevel(50);
        assert.equal(50, calculateTextBill.getCriticalLevel());
      });
})

describe("use text_bill values", function() {
    it("should be able to take in the text string call", function() {

        const calculateTextBill = textBill();

        calculateTextBill.setTotalCostString("call")
        assert.equal(2.75, calculateTextBill.getTotalCost())
    })

    it("should be able to take in the text string sms", function() {

        const calculateTextBill = textBill();

        calculateTextBill.setTotalCostString("sms")
        calculateTextBill.setSmsCost()
        assert.equal(0.75, calculateTextBill.getTotalCost())
    })

    it("should be able to take in the text string sms and then a call", function() {

        const calculateTextBill = textBill();

        calculateTextBill.setTotalCostString("sms")
        assert.equal(0.75, calculateTextBill.getTotalCost())

        calculateTextBill.setTotalCostString("call")
        assert.equal(3.5, calculateTextBill.getTotalCost())
    })
})

describe("warning and critical level for text_bill", function() {
    it("should return classname if warning level goes above 30", function() {

        const calculateTextBill = textBill();

        calculateTextBill.setCriticalLevel(50);
        calculateTextBill.setWarningLevel(30)
    
        calculateTextBill.setTotalCostString("sms")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        assert.equal("warning", calculateTextBill.totalClassName())

    })

    it("should return classname if warning level goes above 50", function() {

        const calculateTextBill = textBill();

        calculateTextBill.setCriticalLevel(50);
        calculateTextBill.setWarningLevel(30)
    
        calculateTextBill.setTotalCostString("sms")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        calculateTextBill.setTotalCostString("call")
        
        assert.equal("critical", calculateTextBill.totalClassName())

    })
})

