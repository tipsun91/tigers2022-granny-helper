const express = require('express');
// Cookie & Session
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

module.exports = function configApp(app) {
  // HTTP request logger middleware for node.js.
  app.use(require('morgan')('dev'));
  // Обработка POST запросов.
  // urlencoded.
  app.use(express.urlencoded({ extended: true }));
  // json.
  app.use(express.json());
  // Папка для статичных файлов
  app.use(express.static(require('path').resolve('public')));

  // Cookie & Session
  app.use(cookieParser());
  app.use(session({
    store: new FileStore(),
    name: process.env.SESSION_COOKIE ?? 'session',  // Имя куки для хранения id сессии. По умолчанию - connect.sid
    secret: process.env.SESSION_SECRET ?? 'secret',	// Секретное слово для шифрования, может быть любым
    resave: false, 				                          // Пересохранять ли куку при каждом запросе
    saveUninitialized: false, 		                  // Создавать ли сессию без инициализации ключей в req.session
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,                  // Срок истечения годности куки в миллисекундах
      httpOnly: true, 				                      // Серверная установка и удаление куки, по умолчанию true
    }
  }));
  // Check
  app.use(require('../middlewares/isAuth'));
  app.use(require('../middlewares/reactSsr'));

  // Импорт маршрутов.
  app.use('/', require('../routes/index'));   // Основные странички
  app.use('/reg', require('../routes/reg'));     // Регистрация
  app.use('/auth', require('../routes/auth'));    // Авторизация
  app.use('/profile', require('../routes/profile')); // Профиль
  app.use('/load', require('../routes/loading')) // загрузка картинки
}
