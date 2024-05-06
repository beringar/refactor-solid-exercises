// The reading of the pressure value from the sensor is simulated in this implementation.
// Because the focus of the exercise is on the other class.

import { Sensor } from "./sensor";

export default class RandomSensor extends Sensor {
  public popNextPressurePsiValue() {
    const pressureTelemetryValue = this.samplePressure();

    return this.offset() + pressureTelemetryValue;
  }
}
