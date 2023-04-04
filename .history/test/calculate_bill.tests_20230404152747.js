describe("Calculating bill with factory functions", function () {
  it("cost should set call value to R2.75", function () {
    const calculateWithBill = calculateBill();

    calculateWithBill.setCallCosts(2.75);
    assert.equal(2.75, calculateWithBill.getCallCosts());
  });

  it("cost should set sms value to R0.75", function () {
    const calculateWithBill = calculateBill();

    calculateWithBill.setSmsCost(0.75);
    assert.equal(0.75, calculateWithBill.getSmsCost());
  });

  it("cost should be set sms to R0.75 and call to R2.75", function () {
    const calculateWithBill = calculateBill();

    calculateWithBill.setCallCosts(2.75)
    calculateWithBill.setSmsCost(0.75);
    assert.equal(2.75, calculateWithBill.getCallCosts());
    assert.equal(0.75, calculateWithBill.getSmsCost());
  });

  it("should be able to set warning level to 20 ", function () {
    const calculateWithBill = calculateBill();

    calculateWithBill.setWarningLevel(20);
    assert.equal(20, calculateWithBill.getwarningLevel());
  });

  it("should be able to set critical level to 30 ", function () {
    const calculateWithBill = calculateBill();

    calculateWithBill.setCriticalLevel(30);
    assert.equal(30, calculateWithBill.getCriticalLevel());
  });
});

describe("use calculate_bill values", function() {
    it("should take in a string with 2 sms", function(){
        const calculateWithBill = calculateBill()

        calculateWithBill.setSmsCost(0.75)

        calculateWithBill.makeSms();
        calculateWithBill.makeSms();
        assert.equal(1.5, calculateWithBill.getTotalCost())
    }) 
})
