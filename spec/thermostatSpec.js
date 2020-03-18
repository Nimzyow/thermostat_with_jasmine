let Thermostat = function() {
  this.currentTempertaure = 20;
  this.powerSavingOn = true;
  this.MIN_TEMPERTAURE = 10;
  this.maxTempertaurePowerSavingOn = 25;
  this.maxTempertaurePowerSavingOff = 32;
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
  if (this.powerSavingStatus()) {
    this.maxTempertaure = 25;
  } else {
    this.maxTempertaure = 32;
  }
};

Thermostat.prototype.powerSavingStatus = function() {
  return this.powerSavingOn;
};

Thermostat.prototype.reset = function() {
  this.currentTempertaure = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this.currentTempertaure < 18) {
    return "low-usage";
  } else if (this.currentTempertaure < 25) {
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
