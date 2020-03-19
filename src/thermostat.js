let Thermostat = function() {
  this.DEFAULT_TEMPERTAURE = 20;
  this.currentTempertaure = this.DEFAULT_TEMPERTAURE;
  this.powerSavingOn = true;
  this.MIN_TEMPERTAURE = 10;
  this.maxTempertaurePowerSavingOn = 25;
  this.maxTempertaurePowerSavingOff = 32;
  this.min_energy_usage = 18;
  this.medium_energy_usage = 25;
};

Thermostat.prototype.tempertaure = function() {
  return this.currentTempertaure;
};

Thermostat.prototype.increase = function() {
  if (this.tempertaureIncreaseCheck()) {
    this.currentTempertaure += 1;
  }
};

Thermostat.prototype.decrease = function() {
  if (this.tempertaureDecreaseCheck()) {
    this.currentTempertaure -= 1;
  }
};

Thermostat.prototype.powerSavingSwitch = function() {
  this.powerSavingOn = !this.powerSavingOn;
};

Thermostat.prototype.powerSavingStatus = function() {
  return this.powerSavingOn;
};

Thermostat.prototype.reset = function() {
  this.currentTempertaure = this.DEFAULT_TEMPERTAURE;
};

Thermostat.prototype.energyUsage = function() {
  if (this.currentTempertaure < this.min_energy_usage) {
    return "low-usage";
  } else if (this.currentTempertaure < this.medium_energy_usage) {
    return "medium-usage";
  } else return "high-usage";
};

Thermostat.prototype.tempertaureIncreaseCheck = function() {
  if (this.powerSavingOn) {
    return this.currentTempertaure < this.maxTempertaurePowerSavingOn;
  } else {
    return this.currentTempertaure < this.maxTempertaurePowerSavingOff;
  }
};

Thermostat.prototype.tempertaureDecreaseCheck = function() {
  return this.currentTempertaure > this.MIN_TEMPERTAURE;
};
