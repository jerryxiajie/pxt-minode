namespace minode {


    /**
     * motor control
     */
    //% blockId=device_motor_control1 block="FAN_Control %connName| on %speed"
    export function FanControl_1(connName:ConnName , speed:number): void
    {
      pins.servoSetPulse(getPin(connName),speed);
    }

}
