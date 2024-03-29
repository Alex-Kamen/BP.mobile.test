## Задача

Необходимо сверстать полноэкранную веб-страницу (баннер) для мобильных устройств iPhone SE, 8+, 11 pro, 14, 14 plus, 14 pro max. Требования:
все в портретной ориентации
на 6 языках (языковые строки в архиве).

Для iPhone SE, 8+ использовать макет 🎨 Arta_8iphone_1. Пропорционально увеличить, для 8+.


Для iPhone 11 pro, 14, 14 plus, 14 pro max использовать макет 🎨 Arta_13iphone_1. Пропорционально уменьшить для iPhone 11 pro и увеличить для 14 plus, 14 pro max.

Язык должен выбираться исходя из языка системы, а также должно осуществляться переключение путем передачи параметра 'lang' в строке запроса (?lang=en). Значение параметра 'lang' - строка, двухсимвольный код языка. Если системный язык не входит в 6 указанных языков, должна отображаться страница на английском. Обработка параметра lang должна осуществляться на стороне клиента (в JavaScript).

Языковые строки могут занимать больше пространства, чем в исходном английском варианте (в макете). Перенос строки разрешается только в заголовке и ячейках с описанием свойств продукта. Часть языков будет нуждаться в уменьшении шрифта для размещения в соответствующих контейнерах. Файлы с языковыми строками не следует править вручную - подключать “как есть”, либо обрабатывать в сборщике.

Изображения страницы должны быть оптимизированы под мобильные retina экраны и иметь оптимальный размер. При отрисовке баннера на экране не должно быть полос прокрутки.

Технологии: HTML5, CSS3, нативный JavaScript. Сборщик Webpack (Gulp, Vite).

Информация по макету:

В макете используются шрифты группы SF Pro (системные шрифты iOS). Крестик, Restore, Terms of Use, Privacy Policy являются ссылками, укажите атрибут href='#' При нажатии на кнопку "Continue" происходит переход по ссылке. Каждой ячейке в панели выбора соответствуют ссылки, сверху вниз: <br>

● https://apple.com/ <br>
● https://google.com/

[Ссылка на макет.](https://www.figma.com/file/wrOajzDimHC2B9VKwhcxik/Test-tasks-(Front-end)?type=design&node-id=0%3A1&mode=design&t=rmrpql4b8uNfCVlH-1) <br>
[Языковые строки.](https://ncloud.aiby.tools/s/xjqJQ95yRjzaPfR)

## Сборка проекта

``` bash
# install dependencies
$ npm install 

# build project
$ npm run build
```
