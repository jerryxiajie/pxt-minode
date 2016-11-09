#include "pxt.h"
#include "MiNode.h"


using namespace pxt;

MiNode node;

namespace minode {

  void onSwitchEvent(ConnName connName, SwitchEvent event, Action body) {
    int id;
    MiNodeSwitch* pSwitch;

    pSwitch = node.switches.attach(connName);
    id = pSwitch->getId();

    registerWithDal(id, event, body);
  }

  bool switchIsOened(ConnName connName) {

    MiNodeSwitch* pSwitch;
    int isOpened;

    pSwitch = node.switches.attach(connName);
    isOpened = pSwitch->isOpened();

    return isOpened ? true : false;
  }

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

  int DHTGetHumidity(ConnName connName)
  {
    MiNodeDHT* pDHT11;
    int dht_humidity=0;

    pDHT11 = node.dht11.attach(connName);

    dht_humidity = pDHT11->getHumidity();

    return dht_humidity;
  }

  void onDHTEvent(ConnName connName, Action body) {
    int id;
    MiNodeDHT* pDHT11;

    pDHT11 = node.dht11.attach(connName);
    id = pDHT11->getId();

    registerWithDal(id, MINODE_DHT_EVT_CHANGE, body);
  }

  void onPIREvent(ConnName connName, Action body) {
    int id;
    MiNodePIR* pPir;

    pPir = node.pir.attach(connName);
    id = pPir->getId();

    registerWithDal(id, MINODE_PIR_EVT_TRIG, body);
  }

  bool PIRIsTriggered(ConnName connName) {

    MiNodePIR* pPir;
    int triggered;

    pPir = node.pir.attach(connName);
    triggered = pPir->isTriged();

    return triggered ? true : false;
  }

  void onRotaryEvent(ConnName connName, Action body) {
    int id;
    MiNodeRotary* pRotary;

    pRotary = node.rotary.attach(connName);
    id = pRotary->getId();

    registerWithDal(id, MINODE_ROTARY_EVT_CHANGE, body);
  }

  int RotaryGetPercentage(ConnName connName)
  {
    MiNodeRotary* pRotary;
    int rotaryPercentage=0;

    pRotary = node.rotary.attach(connName);

    rotaryPercentage = pRotary->getPercentage();

    return rotaryPercentage;
  }

  void onLightSensorEvent(ConnName connName, Action body) {
    int id;
    MiNodeLight* pLight;

    pLight = node.light.attach(connName);
    id = pLight->getId();

    registerWithDal(id, MINODE_LIGHT_EVT_LEVEL_CHANGE, body);
  }

  int LightSensorGetLevel(ConnName connName)
  {
    MiNodeLight* pLight;
    int lightLevel=0;

    pLight = node.light.attach(connName);

    lightLevel = pLight->getLightLevel();

    return lightLevel;
  }

  void onMICEvent(ConnName connName, Action body) {
    int id;
    MiNodeMIC* pMic;

    pMic = node.mic.attach(connName);
    id = pMic->getId();

    registerWithDal(id, MINODE_MIC_EVT_NOISE, body);
  }

  int MICGetLevel(ConnName connName)
  {
    MiNodeMIC* pMic;
    int micLevel=0;

    pMic = node.mic.attach(connName);

    micLevel = pMic->getMicLevel();

    return micLevel;
  }

  void RGBChooseColor(ConnName connName , MiNodeColor color)
  {
    MiNodeRGB* pRGB;

    pRGB = node.rgb.attach(connName);

    pRGB->chooseColor(color);
  }

  void RGBSetColor(ConnName connName , int text)
  {
    MiNodeRGB* pRGB;
    pRGB = node.rgb.attach(connName);

    pRGB->setRGBInHex(text);
  }

}
