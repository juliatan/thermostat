function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.minTemperature = function() {
  return 10;
};

Thermostat.prototype.maxTemperature = function() {
  if (this.powerSavingMode) {
    return 25;
  }
  return 32;
};

Thermostat.prototype.reset = function() {
  return 20
};

Thermostat.prototype.increaseTemp = function() {
  if(this.temperature <=25) {
    this.temperature += 1;
  }
};

Thermostat.prototype.decreaseTemp = function() {
  if(this.temperature >10) {
    this.temperature -= 1;
  }
};

Thermostat.prototype.energyUsage = function() {
  if(this.temperature < 18) return "low";
  if(this.temperature < 25) return "medium";
  return "high";
};