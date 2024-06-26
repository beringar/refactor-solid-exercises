import Sensor from "../sensor/randomSensor.ts";
import { MockNormalSensor } from "../sensor/__mocks__/fakeSensor.ts";

export default class Alarm {
  private highPressureThreshold: number;
  private lowPressureThreshold: number;

  private sensor: Sensor;
  private alarmOn: boolean;

  constructor(sensor: Sensor = new MockNormalSensor()) {
    this.lowPressureThreshold = 17;
    this.highPressureThreshold = 21;
    this.sensor = sensor;
    this.alarmOn = false;
  }

  public check() {
    const psiPressureValue = this.sensor.popNextPressurePsiValue();

    if (psiPressureValue < this.lowPressureThreshold || this.highPressureThreshold < psiPressureValue) {
      this.alarmOn = true;
    }
  }

  public isAlarmOn() {
    return this.alarmOn;
  }
}
