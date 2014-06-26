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
