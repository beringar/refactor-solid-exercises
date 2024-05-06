export abstract class Sensor {
  abstract popNextPressurePsiValue(): number;
  protected samplePressure() {
    // placeholder implementation that simulate a real sensor in a real tire
    const pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
    return pressureTelemetryValue;
  }

  protected offset() {
    return 16;
  }
}
