#include "pxt.h"
#include "MiNode.h"


using namespace pxt;

MiNode node;

namespace minode {

  /**
   * Do something when a switch is opened /closed
   * @param switchId a switch ID .
   * @param connName MiNode Connector Name
   * @param event Event to listen
   */

  //% blockId=device_on_switch_event block="switch %connName| on %event"
  //% icon="\uf192"
  void onSwitchEvent(ConnName connName, SwitchEvent event, Action body) {
    int id;
    MiNodeSwitch* pSwitch;

    pSwitch = node.switches.attach(connName);
    id = pSwitch->getId();

    registerWithDal(id, event, body);
  }


  /**
   * Get the switch state (open or not).
   */

  //% blockId=device_switch_is_opened block="switch %connName| is opened"

  bool switchIsOened(ConnName connName) {

    MiNodeSwitch* pSwitch;
    int isOpened;

    pSwitch = node.switches.attach(connName);
    isOpened = pSwitch->isOpened();

    return isOpened ? true : false;
  }

  /**
   * Control the mini Fan (open or close).
   */

  //% blockId=device_fan_control block="fan %connName| is %FanStatus"

  void FanControl(ConnName connName , FanStatus status)
  {
    MiNodeFan* pFan;

    pFan = node.fan.attach(connName);

    switch(status) {
      case MINODE_FAN_OPEN:
          pFan->fanOpen();
        break;
      case MINODE_FAN_CLOSE:
          pFan->fanClose();
        break;
    }
  }

    /**
   * Get DHT11 temperature (celsius or fahrenheit).
   */

  //% blockId=device_DHT_GET_Temperature block="DHT11 %connName| tempreature %FanStatus"

  int DHTGetTemperature(ConnName connName , DHTTemStyle style)
  {
    MiNodeDHT* pDHT11;
    int dht_tempreature=0;

    pDHT11 = node.dht11.attach(connName);

    switch(style) {
      case MINODE_DHT_CELSIUS:
          dht_tempreature = pDHT11->getTemperature();
        break;
      case MINODE_FAN_FAHRENHEIT:
          dht_tempreature = pDHT11->getFahrenheitTemperature();
        break;
    }

    return dht_tempreature;
  }

  /**
   * Get DHT11 Humidity.
   */

  //% blockId=device_DHT_GET_Humidity block="DHT11 %connName| humidity"

  int DHTGetHumidity(ConnName connName)
  {
    MiNodeDHT* pDHT11;
    int dht_humidity=0;

    pDHT11 = node.dht11.attach(connName);

    dht_humidity = pDHT11->getHumidity();

    return dht_humidity;
  }


  /**
   * Do something when PIR triggered
   */

  //% blockId=device_on_PIR_trig block="PIR %connName| on trigger"
  void onPIREvent(ConnName connName, Action body) {
    int id;
    MiNodePIR* pPir;

    pPir = node.pir.attach(connName);
    id = pPir->getId();

    registerWithDal(id, MINODE_PIR_EVT_TRIG, body);
  }

  /**
 * Get the PIR state (trigger or not).
 */

  //% blockId=device_PIR_istrig block="switch %connName| is triggered"
  bool PIRIsTriggered(ConnName connName) {

    MiNodePIR* pPir;
    int triggered;

    pPir = node.pir.attach(connName);
    triggered = pPir->isTriged();

    return triggered ? true : false;
  }

  /**
   * Do something when Rotary change
   */

  //% blockId=device_on_ROTARY_CHANGE block="Rotary %connName| on trigger"
  void onRotaryEvent(ConnName connName, Action body) {
    int id;
    MiNodeRotary* pRotary;

    pRotary = node.rotary.attach(connName);
    id = pRotary->getId();

    registerWithDal(id, MINODE_ROTARY_EVT_CHANGE, body);
  }

  /**
   * Get Rotary percentage.
   */

  //% blockId=device_ROTARY_GET_Percentage block="ROTARY get %connName| Percentage"

  int RotaryGetPercentage(ConnName connName)
  {
    MiNodeRotary* pRotary;
    int rotaryPercentage=0;

    pRotary = node.rotary.attach(connName);

    rotaryPercentage = pRotary->getPercentage();

    return rotaryPercentage;
  }

  /**
 * Do something when Light level change
 */

  //% blockId=device_on_LightSensor_CHANGE block="LightSensor %connName| on change"
  void onLightSensorEvent(ConnName connName, Action body) {
    int id;
    MiNodeLight* pLight;

    pLight = node.light.attach(connName);
    id = pLight->getId();

    registerWithDal(id, MINODE_LIGHT_EVT_LEVEL_CHANGE, body);
  }


  /**
   * Get Light level.from 1(brightest) to 5(darkness).
  */

  //% blockId=device_LightSensor_GET_light_level block="LightSensor get %connName| level"

  int LightSensorGetLevel(ConnName connName)
  {
    MiNodeLight* pLight;
    int lightLevel=0;

    pLight = node.light.attach(connName);

    lightLevel = pLight->getLightLevel();

    return lightLevel;
  }

}
