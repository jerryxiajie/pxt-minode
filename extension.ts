namespace minode {

  /**
   * Do something when a switch is opened /closed
   * @param switchId a switch ID .
   * @param connName MiNode Connector Name
   * @param event Event to listen
   */

  //% blockId=device_on_switch_event block="switch %connName| on %event"
  //% icon="\uf192"
  //% shim=minode::onSwitchEvent
  export function onSwitchEvent(connName : ConnName , event : SwitchEvent, body : Action): void
  {
  }

    /**
   * Get the switch state (open or not).
   */

  //% blockId=device_switch_is_opened block="switch %connName| is opened"
  //% shim=minode::switchIsOened
  export function switchIsOened(connName : ConnName): boolean
  {
    return;
  }

  /**
 * Control the mini Fan (open or close).
 */
  //% blockId=device_fan_control block="fan %connName| is %FanStatus"
  //% shim=minode::FanControl
  export function FanControl(connName : ConnName , status : FanStatus): void
  {
  }

  /**
  * Get DHT11 temperature (celsius or fahrenheit).
  */
  //% blockId=device_DHT_GET_Temperature block="DHT11 %connName| tempreature %FanStatus"
  //% shim=minode::DHTGetTemperature
  export function DHTGetTemperature(connName : ConnName,style : DHTTemStyle) : number
  {
    return;
  }

  /**
  * Get DHT11 Humidity.
  */
  //% blockId=device_DHT_GET_Humidity block="DHT11 %connName| humidity"
  //% shim=minode::DHTGetHumidity
  export function DHTGetHumidity(connName : ConnName) : number
  {
    return;
  }

  /**
  * Do something when DHT11 temperature change
  */
  //% blockId=device_on_DHTtemperature_CHANGE block="on DHT11 %connName| temperature change."
  //% shim=minode::onDHTEvent
  export function onDHTEvent(connName : ConnName,body : Action) : void
  {
  }

  /**
  * Do something when PIR triggered
  */
  //% blockId=device_on_PIR_trig block="PIR %connName| on trigger"
  //% shim=minode::onPIREvent
  export function onPIREvent(connName : ConnName, body : Action) : void
  {
  }

  /**
  * Get the PIR state (trigger or not).
  */
  //% blockId=device_PIR_istrig block="PIR %connName| is triggered"
  //% shim=minode::PIRIsTriggered
  export function PIRIsTriggered(connName : ConnName) : boolean
  {
    return;
  }

  /**
   * Do something when Rotary change
   */
  //% blockId=device_on_ROTARY_CHANGE block="Rotary %connName| on trigger"
  //% shim=minode::onRotaryEvent
  export function onRotaryEvent(connName : ConnName, body : Action) : void
  {
  }

  /**
   * Get Rotary percentage.
  */
  //% blockId=device_ROTARY_GET_Percentage block="ROTARY get %connName| Percentage"
  //% shim=minode::RotaryGetPercentage
  export function RotaryGetPercentage(connName : ConnName) : number
  {
    return;
  }

  /**
  * Do something when Light level change
  */
  //% blockId=device_on_LightSensor_CHANGE block="LightSensor %connName| on change"
  //% advanced=true
  //% shim=minode::onLightSensorEvent
  export function onLightSensorEvent(connName : ConnName, body : Action) : void
  {
  }

  /**
   * Get Light level.from 1(brightest) to 5(darkness).
  */
  //% blockId=device_LightSensor_GET_light_level block="LightSensor get %connName| level"
  //% advanced=true
  //% shim=minode::LightSensorGetLevel
  export function LightSensorGetLevel(connName : ConnName) : number
  {
    return;
  }

  /**
  * Do something when MIC level change
  */
  //% blockId=device_on_MIC_level_change block="MIC %connName| on change"
  //% advanced=true
  //% shim=minode::onMICEvent
  export function onMICEvent(connName : ConnName,body : Action) : void
  {
  }

  /**
   * Get MIC level.from 1(quiet) to 5(noisy).
  */
  //% blockId=device_MIC_GET_mic_level block="MIC get %connName| level"
  //% advanced=true
  //% shim=minode::MICGetLevel
  export function MICGetLevel(connName : ConnName) : number
  {
    return;
  }

    /**
 * Choose an RGB color.
 */
  //% blockId=device_RGB_ChooseColor block="RGB %connName| set %MiNodeColor"
  //% advanced=true
  //% shim=minode::RGBChooseColor
  export function RGBChooseColor(connName : ConnName ,color : MiNodeColor) : void
  {
  }

  /**
  * Set RGB color in HEX.
  */
  //% blockId=device_RGB_SetColor block="RGB %connName| set %text"
  //% advanced=true
  //% shim=minode::RGBSetColor
  export function RGBSetColor(connName : ConnName,text : number) : void
  {
  }

}
