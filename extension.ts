namespace minode {


    /**
     * motor control
     */
    //% blockId=device_motor_control1 block="FAN_Control %connName| on %speed"
    //% advanced=true
    export function FanControl_1(connName:ConnName , speed:number): void
    {
      pins.servoSetPulse(getPin(connName),speed);
    }

    /**
     * relay control
     */
    //% blockId=device_relay_control block="Relay %connName| set %status"
    //% advanced=true
    export function RelayControl(connName:ConnName , status:FanStatus): void
    {
      if(getPinProperty(connName) == 1)
      {
        switch(status) {
            case 1:
                pins.analogWritePin(getPin(connName),1023);
              break;
            case 2:
                pins.analogWritePin(getPin(connName),0);
              break;
        }
      }
      else
      {
        switch(status) {
            case 1:
                pins.digitalWritePin(getPin(connName),1);
              break;
            case 2:
                pins.digitalWritePin(getPin(connName),0);
              break;
        }
      }

    }

}
