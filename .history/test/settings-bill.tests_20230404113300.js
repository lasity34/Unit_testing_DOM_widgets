describe("The bill with settings factory functions", function () {

    it("should be able to set the call cost", function() {
        const billWithSettings = billSettings()
        billWithSettings.setCallCosts(2.85)
        assert.equal(2.85, billWithSettings.getCallCosts())

        const billWithSettings2 = billSettings();
        billWithSettings2.setCallCosts(2.75)
        assert.equal(2.75, billWithSettings2.getCallCosts())
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

        billWithSettings2.setSmsCosts(0.75)
        billWithSettings2.setCallCosts(2.85)
        assert.equal(0.75, billWithSettings2.getSmsCosts())
        assert.equal(2.85, billWithSettings2.getCallCosts())

        const billWithSettings = billSettings();
        billWithSettings.setSmsCosts(0.85)
        billWithSettings.setCallCosts(3.85)
        assert.equal(0.85, billWithSettings.getSmsCosts())
        assert.equal(3.85, billWithSettings.getCallCosts())
    })

    it("should be able to set warning level", function() {
     
        const warningSettings = billSettings();

        warningSettings.setWarningLevel(20);
        assert.equal(20, warningSettings.getWarningLevel())

     
    })

    it("should be able to set critical level", function() {
     
        const criticalSettings = billSettings();

        criticalSettings.setCriticalLevel(40);
        assert.equal(40, criticalSettings.getCriticalLevel())

     
    })

    it("should be able to set critical and warning level", function() {
     
        const warningSettings = billSettings();
        const criticalSettings = billSettings();
        warningSettings.setWarningLevel(30)
        criticalSettings.setCriticalLevel(40);
        assert.equal(30, warningSettings.getWarningLevel())
        assert.equal(40, criticalSettings.getCriticalLevel())

     
    })

  });
  describe("use values", function () {
    it("should be able to make 3 calls", function() {
        const billWithSettings2 = billSettings();
        
        billWithSettings2.setCallCosts(2.25)
        billWithSettings2.setSmsCosts(0.85)

        billWithSettings2.makeCall()
        billWithSettings2.makeCall()
        billWithSettings2.makeCall()

        assert.equal(6.75, billWithSettings2.getTotalCost())
        assert.equal(6.75, billWithSettings2.getTotalCallCost())
        assert.equal(0, billWithSettings2.getTotalSmsCost())
   
    })

    it("should be able to make 2 calls at R1.35 each", function() {
        const billWithSettings2 = billSettings();
        
        billWithSettings2.setCallCosts(1.35)
        billWithSettings2.setSmsCosts(0.85)

        billWithSettings2.makeCall()
        billWithSettings2.makeCall()


        assert.equal(2.70, billWithSettings2.getTotalCost())
        assert.equal(2.70, billWithSettings2.getTotalCallCost())
        assert.equal(0, billWithSettings2.getTotalSmsCost())
   
    })

    it("should be able to make 2 sms at R0.85 each", function() {
        const billWithSettings2 = billSettings();
        
        billWithSettings2.setCallCosts(1.35)
        billWithSettings2.setSmsCosts(0.85)

        billWithSettings2.makeSms()
        billWithSettings2.makeSms()


        assert.equal(1.70, billWithSettings2.getTotalCost())
        assert.equal(0, billWithSettings2.getTotalCallCost())
        assert.equal(1.70, billWithSettings2.getTotalSmsCost())
   
    })

    it("should be able to make 2 sms at R0.85 each & call at R1.35 each", function() {
        const billWithSettings2 = billSettings();
        
        billWithSettings2.setCallCosts(1.35)
        billWithSettings2.setSmsCosts(0.85)

        billWithSettings2.makeSms()
        billWithSettings2.makeSms()
        billWithSettings2.makeCall()

        assert.equal(3.05, billWithSettings2.getTotalCost())
        assert.equal(1.35, billWithSettings2.getTotalCallCost())
        assert.equal(1.70, billWithSettings2.getTotalSmsCost())
   
    })

   

  })

  describe("warning and critical level", function() {

    it("It should return a class name if warning level is reached", function() {
        let billWithSettings2 = billSettings()

        billWithSettings2.setCallCosts(1.35)
        billWithSettings2.setSmsCosts(0.85)
        billWithSettings2.setWarningLevel(5)
        billWithSettings2.setCriticalLevel(10)

        billWithSettings2.makeSms()
        billWithSettings2.makeSms()
        billWithSettings2.makeCall()
        billWithSettings2.makeCall()
        billWithSettings2.makeCall()

        assert.equal("warning", billWithSettings2.totalClassName())
    })

    it("It should return a class name if critical level is reached", function() {
        let billWithSettings2 = billSettings()

        billWithSettings2.setCallCosts(1.35)
        billWithSettings2.setSmsCosts(0.85)
        billWithSettings2.setWarningLevel(5)
        billWithSettings2.setCriticalLevel(10)
        
        billWithSettings2.makeSms()
        billWithSettings2.makeSms()
        billWithSettings2.makeCall()
        billWithSettings2.makeCall()
        billWithSettings2.makeCall()
        billWithSettings2.makeSms()
        billWithSettings2.makeSms()
        billWithSettings2.makeCall()
        billWithSettings2.makeCall()
        billWithSettings2.makeCall()

        assert.equal("critical", billWithSettings2.totalClassName())
    })
  })