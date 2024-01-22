/*
 Инициализация библиотек или работа с ними, которые подключаются через папку libs
 т.к. ESLint не знает о подключенных файлах, указываем их глобальную видимость:
*/
/* global Fancybox */
Fancybox.bind('[data-fancybox]');

// Импорт плагинов которые установили через npm
// import $ from 'jquery';

// Импорт секций
import sectionExample from '../../sections/example/example.js';

// Глобальные скрипты
console.log('This is index.js');

// Инициализация кода скриптов секций
sectionExample();
