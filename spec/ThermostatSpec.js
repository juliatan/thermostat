describe("Thermostat", function() {
 
  describe("Default settings", function(){
    it('Should be set at 20 degrees', function(){

      thermostat = new Thermostat(20);
      expect(thermostat.temperature).toBe(20);

    });

  });
  
});
