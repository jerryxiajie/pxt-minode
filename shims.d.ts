// Auto-generated. Do not edit.
declare namespace minode {

    /**
     * Do something when a switch is opened /closed
     * @param switchId a switch ID .
     * @param connName MiNode Connector Name
     * @param event Event to listen
     */
    //% blockId=device_on_switch_event block="switch %connName| on %event"
    //% icon="\uf192" shim=minode::onSwitchEvent
    function onSwitchEvent(connName: ConnName, event: SwitchEvent, body: () => void): void;

    /**
     * Get the switch state (open or not).
     */
    //% blockId=device_switch_is_opened block="switch %connName| is opened" shim=minode::switchIsOened
    function switchIsOened(connName: ConnName): boolean;

    /**
     * Control the mini Fan (open or close).
     */
    //% blockId=device_fan_control block="fan %connName| is %FanStatus" shim=minode::FanControl
    function FanControl(connName: ConnName, status: FanStatus): void;

    /**
     * Get DHT11 temperature (celsius or fahrenheit).
     */
    //% blockId=device_DHT_GET_Temperature block="DHT11 %connName| tempreature %FanStatus" shim=minode::DHTGetTemperature
    function DHTGetTemperature(connName: ConnName, style: DHTTemStyle): number;

    /**
     * Get DHT11 Humidity.
     */
    //% blockId=device_DHT_GET_Humidity block="DHT11 %connName| humidity" shim=minode::DHTGetHumidity
    function DHTGetHumidity(connName: ConnName): number;

    /**
     * Do something when PIR triggered
     */
    //% blockId=device_on_PIR_trig block="PIR %connName| on trigger" shim=minode::onPIREvent
    function onPIREvent(connName: ConnName, body: () => void): void;

    /**
     * Get the PIR state (trigger or not).
     */
    //% blockId=device_PIR_istrig block="switch %connName| is triggered" shim=minode::PIRIsTriggered
    function PIRIsTriggered(connName: ConnName): boolean;

    /**
     * Do something when Rotary change
     */
    //% blockId=device_on_ROTARY_CHANGE block="Rotary %connName| on trigger" shim=minode::onRotaryEvent
    function onRotaryEvent(connName: ConnName, body: () => void): void;

    /**
     * Get Rotary percentage.
     */
    //% blockId=device_ROTARY_GET_Percentage block="ROTARY get %connName| Percentage" shim=minode::RotaryGetPercentage
    function RotaryGetPercentage(connName: ConnName): number;
}

// Auto-generated. Do not edit. Really.
