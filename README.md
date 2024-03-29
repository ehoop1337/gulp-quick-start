# gulp-quick-start

### Установка:
```bash
npm install
```

### Prettier для стандартизации (паттерн файлов):
```shell
**/*.{js,pug,scss,css}
```

### Запуск сервера для разработки:
```bash
npm run dev
```
Примечание: При переименовании файлов, старый файл не удаляется.

### Production-сборка проекта:
```bash
npm run build
```

### Структура проекта:

|      Path       |                                                                                                                                                      |
|:---------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------:|
|      dist       |                                                              папка с собранным проектом                                                              |
|       src       |                                         внутри должны находиться файлы pug которые билдятся в html-страницы                                          |
|    src/parts    |                                                                 повторяющиеся блоки                                                                  |
|  src/sections   |                                                                   отдельные секции                                                                   |
|  src/templates  |                                                               шаблоны для наследования                                                               |
|   src/assets    |                                                                 все ресурсы проекта                                                                  |
| src/assets/css  |                                              index.scss главный файл, который билдится в bundle.min.css                                              |
|  src/assets/js  |                                               index.js главный файл, который билдится в bundle.min.js                                                |
| src/assets/font |                                                                 шрифты в формте ttf                                                                  |
| src/assets/img  |                                                            векторные и растровые картинки                                                            |
| src/assets/mov  |                                                                      видефайлы                                                                       |
| src/assets/doc  |                                                                      документы                                                                       |
| src/assets/libs | css и js файлы библиотек, которые нужно прописать в конфиге (переменная libs.{js,css}.paths), что бы они объединились и сбилдились libs.min.{js,css} |





