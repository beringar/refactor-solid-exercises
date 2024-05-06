import { describe, expect, it } from "vitest";
import Alarm from "./alarm";
import MockLowSensor, { MockHighSensor, MockNormalSensor } from "../sensor/__mocks__/fakeSensor";

const mockLowSensor = new MockLowSensor();
const mockHighSensor = new MockHighSensor();
const mockNormalSensor = new MockNormalSensor();

describe("Tyre Pressure Monitoring System", () => {
  describe("when pressure value is below low threshold", () => {
    it("isAlarmOn should be true", () => {
      const alarm = new Alarm(mockLowSensor);
      alarm.check();
      expect(alarm.isAlarmOn()).eql(true);
    });
  });
  describe("when pressure value is below low threshold", () => {
    it("isAlarmOn should be true", () => {
      const alarm = new Alarm(mockHighSensor);
      alarm.check();
      expect(alarm.isAlarmOn()).eql(true);
    });
  });
  describe("when pressure value is normal", () => {
    it("isAlarm on should be false", () => {
      const alarm = new Alarm(mockNormalSensor);
      alarm.check();
      expect(alarm.isAlarmOn()).eql(false);
    });
  });
});

//spy and mock = bad design symptom
