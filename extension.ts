namespace minode {


    /**
     * motor control
     */
    //% blockId=device_motor_control1 block="FAN_Control %connName| on %speed"
    export function FanControl_1(connName:ConnName , speed:number): void
    {
      if(getPin(connName) == 3)
      {
        pins.servoWritePin(7,speed);
      }
      else if(getPin(connName) == 2)
      {
        pins.servoWritePin(8,speed);
      }
      else if(getPin(connName) == 1)
      {
        pins.servoWritePin(9,speed);
      }

    }

}
