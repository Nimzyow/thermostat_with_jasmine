describe("thermostat.js", () => {
  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("tempertaure starts at 20 degrees", () => {
    expect(thermostat.tempertaure()).toBe(20);
  });

  describe("function does not return as undefined", () => {
    it("increase", () => {
      expect(thermostat.increase).not.toBeUndefined();
    });
    it("decrease", () => {
      expect(thermostat.decrease).not.toBeUndefined();
    });
    it("powerSavingSwitch", () => {
      expect(thermostat.powerSavingSwitch).not.toBeUndefined();
    });
    it("reset", () => {
      expect(thermostat.reset).not.toBeUndefined();
    });
    it("energyUsage", () => {
      expect(thermostat.energyUsage).not.toBeUndefined();
    });
  });

  describe("functionality", () => {
    it("powerSavingStatus returns true by defualt", () => {
      expect(thermostat.powerSavingStatus()).toBe(true);
    });

    it("powerSavingSwitch returns false", () => {
      thermostat.powerSavingSwitch();
      expect(thermostat.powerSavingStatus()).toBe(false);
    });

    it("reset resets temperture to 20", () => {
      for (let i = 0; i < 5; i++) {
        thermostat.increase();
      }
      thermostat.reset();
      expect(thermostat.tempertaure()).toBe(20);
    });

    describe("tempertaure increase", () => {
      it("by 1", () => {
        thermostat.increase();
        expect(thermostat.tempertaure()).toBe(21);
      });

      it("maximum tempertaure is 25 degrees when power saving mode is on", () => {
        for (let i = 0; i < 10; i++) {
          thermostat.increase();
        }
        expect(thermostat.tempertaure()).toBe(25);
      });

      it("maximum tempertaure is 32 degrees when power saving mode is off", () => {
        thermostat.powerSavingSwitch();
        for (let i = 0; i < 18; i++) {
          thermostat.increase();
        }
        expect(thermostat.tempertaure()).toBe(32);
      });
    });

    describe("tempertaure decrease", () => {
      it("by -1", () => {
        thermostat.decrease();
        expect(thermostat.tempertaure()).toBe(19);
      });
      it("over 10 times should not go below 10 degrees", () => {
        for (let i = 0; i < 11; i++) {
          thermostat.decrease();
        }
        expect(thermostat.tempertaure()).toBe(10);
      });
    });
    describe("energy usage", () => {
      it("returns low-usage if below 18 degrees", () => {
        for (let i = 0; i < 4; i++) {
          thermostat.decrease();
        }
        expect(thermostat.energyUsage()).toBe("low-usage");
      });

      it("returns medium-usage if below 25 degrees but above 18 degrees", () => {
        expect(thermostat.energyUsage()).toBe("medium-usage");
      });

      it("returns high-usage if above 25 degrees", () => {
        for (let i = 0; i < 5; i++) {
          thermostat.increase();
        }
        expect(thermostat.energyUsage()).toBe("high-usage");
      });
    });
  });
});
