// Auto-generated. Do not edit.
declare namespace minode {

    /**
     * Get pinname
     */
    //% blockId=get_pin_name
    function getPin(connName: ConnName): number;

    /**
     * Get analog pinname
     */
    //% blockId=get_analog_pin_name
    function getanalogPin(connName: AnalogConnName): number;

    /**
     * Get Pin Property
     */
    //% blockId=get_pin_property
    function getPinProperty(connName: ConnName): number;

    /**
     * Do something when a switch is opened/closed
     * @param switchId a switch ID .
     * @param connName MiNode Connector Name
     * @param event Event to listen
     */
    //% blockId=device_on_switch_event block="switch %connName| on %event"
    function onSwitchEvent(connName: ConnName, event: SwitchEvent, body: () => void): void;

    /**
     * Get the switch state (open or not).
     */
    //% blockId=device_switch_is_opened block="switch %connName| is opened"
    //% advanced=true
    function switchIsOpened(connName: ConnName): boolean;

    /**
     * Get DHT11 temperature (celsius or fahrenheit).
     */
    //% blockId=device_DHT_GET_Temperature block="dht11 %connName| tempreature %FanStatus" 
    function DHTGetTemperature(connName: ConnName, style: DHTTemStyle): number;

    /**
     * Get DHT11 Humidity.
     */
    //% blockId=device_DHT_GET_Humidity block="dht11 %connName| humidity"
    //% advanced=true
    function DHTGetHumidity(connName: ConnName): number;

    /**
     * Do something when DHT11 temperature change.
     */
    //% blockId=device_on_DHTtemperature_CHANGE block="dht11 %connName| on temperature change"
    //% advanced=true
    function onDHTEvent(connName: ConnName, body: () => void): void;

    /**
     * Do something when PIR triggered.
     */
    //% blockId=device_on_PIR_trig block="pir %connName| on trigger"
    function onPIREvent(connName: ConnName, body: () => void): void;

    /**
     * Get the PIR state (trigger or not).
     */
    //% blockId=device_PIR_istrig block="pir %connName| is triggered"
    //% advanced=true
    function PIRIsTriggered(connName: ConnName): boolean;

    /**
     * Do something when Rotary change.
     */
    //% blockId=device_on_ROTARY_CHANGE block="rotary %connName| on trigger"
    function onRotaryEvent(connName: AnalogConnName, body: () => void): void;

    /**
     * Get Rotary percentage.
     */
    //% blockId=device_ROTARY_GET_Percentage block="rotary %connName| get Percentage"
    //% advanced=true
    function RotaryGetPercentage(connName: AnalogConnName): number;

    /**
     * Do something when Light level change.
     */
    //% blockId=device_on_LightSensor_CHANGE block="light %connName| on change"
    function onLightSensorEvent(connName: AnalogConnName, body: () => void): void;

    /**
     * Get Light level.from 1(brightest) to 5(darkness).
     */
    //% blockId=device_LightSensor_GET_light_level block="light %connName| get level"
    //% advanced=true shim=minode::LightSensorGetLevel
    function LightSensorGetLevel(connName: AnalogConnName): number;

    /**
     * Do something when MIC level change.
     */
    //% blockId=device_on_MIC_level_change block="mic %connName| on change"
    function onMICEvent(connName: AnalogConnName, body: () => void): void;

    /**
     * Get MIC level.from 1(quiet) to 5(noisy).
     */
    //% blockId=device_MIC_GET_mic_level block="mic %connName| get level"
    //% advanced=true
    function MICGetLevel(connName: AnalogConnName): number;

    /**
     * Choose an RGB color from the given table.
     */
    //% blockId=device_RGB_ChooseColor block="rgb led %connName| set %MiNodeColor"
    function RGBChooseColor(connName: ConnName, color: MiNodeColor): void;

    /**
     * Converts red, green, blue channels into a RGB color.
     */
    //% blockId=device_RGB_SetColor block="rgb led %connName| set red %red| green %green| blue %blue"
    //% advanced=true
    function RGBSetColor(connName: ConnName, red: number, green: number, blue: number): void;
}

// Auto-generated. Do not edit. Really.
