import { Sensor } from "../sensor";

export default class MockLowSensor extends Sensor {
  public popNextPressurePsiValue() {
    return 16;
  }
}

export class MockHighSensor extends Sensor {
  public popNextPressurePsiValue() {
    return 22;
  }
}

export class MockNormalSensor extends Sensor {
  public popNextPressurePsiValue() {
    return 18;
  }
}
