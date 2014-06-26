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

  describe("Reset", function(){
    it('can reset the temperature 20', function(){
      expect(thermostat.reset()).toEqual(20);
    });
  });

  describe("Increase temperature", function(){
    describe('PSM on', function(){
      it('can increase the temperature if <25', function(){
        thermostat.increaseTemp();
        expect(thermostat.temperature).toEqual(21) 
      });

      it('does not increase the temperature if >=25', function(){
        thermostat.temperature = 26;
        thermostat.increaseTemp();
        expect(thermostat.temperature).toEqual(26) 
      });
    });

    describe('PSM off', function(){
      it('cannot increase the temperature if >=32', function(){
        thermostat.powerSavingMode = false;
        thermostat.temperature = 32;
        thermostat.increaseTemp();
        expect(thermostat.temperature).toEqual(32)
      });

      it('can increase the temperature if <32', function(){
        thermostat.powerSavingMode = false;
        thermostat.increaseTemp();
        expect(thermostat.temperature).toEqual(21)
      });

    });

  });

  
});
