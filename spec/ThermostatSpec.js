describe("Thermostat", function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("Default settings", function(){
    it('Should be set at 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('PSM should be on', function(){
      expect(thermostat.powerSavingMode).toBe(true);
    });
  });

  describe("Temperature range", function(){
    it('Minimum temperature of 10 degrees', function(){
      expect(thermostat.minTemperature()).toEqual(10);
    });

    it('Maximum temperature of 25 degrees when PSM mode on', function(){
      expect(thermostat.maxTemperature()).toEqual(25);
    });

    it('Maximum temperature of 32 degrees when PSM mode off', function(){
      thermostat.powerSavingMode = false;
      expect(thermostat.maxTemperature()).toEqual(32);

    });

  });
  
});
