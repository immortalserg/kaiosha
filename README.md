# HomeAssistant приложение для KaiOS

сделано на основе https://github.com/davidsmfreire/kaios-ha

скачайте код

отредактируйте файл static/js/main.bb899642.chunk.js

строки: 
```
o="URL_ADRESS",
a="API_KEY",
```

вставить свой адрес сервера Хомеассистент и API ключ

строка
```
u={domofon:"switch.relay01_l2",garage_led:"switch.garage_light"},
```
и
```
1:new h("switch/toggle","domofon"),2:new h("switch/toggle","garage_led")};
```
делаем соответствующие правки, приложение привязывает команды к кнопкам телефона, во второй строке номера это кнопки на Вашем телефоне, ещё пример:

```
u={domofon:"switch.relay01_l2",salon:"switch.switch02_l1",kitchen:"switch.switch02_l2",toilet:"switch.switch01_2",fan:"switch.switch01",kran:"switch.prise01_relay",plita:"switch.prise05_relay"},
```
```
1:new h("switch/toggle","domofon"),2:new h("switch/toggle","salon"),3:new h("switch/toggle","kitchen"),4:new h("switch/toggle","toilet"),5:new h("switch/toggle","fan"),6:new h("switch/toggle","kran"),7:new h("switch/toggle","plita")};
```

загрузите приложение через WebIDE
