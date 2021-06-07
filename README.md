# Давняя Суджа
[![GitHub](https://img.shields.io/github/license/dan-sazonov/old-sudga)](https://github.com/dan-sazonov/old-sudga/blob/develop/LICENSE)
![OpenSource](https://img.shields.io/badge/Open%20Source-%E2%99%A5-red)
[![Code style: Airbnb](https://img.shields.io/badge/code%20style-Airbnb-ff385c)](https://github.com/airbnb/javascript)
[![Front‑End_Checklist followed](https://img.shields.io/badge/Front‑End_Checklist-followed-brightgreen.svg)](https://github.com/thedaviddias/Front-End-Checklist/)
[![Issues](https://img.shields.io/github/issues/dan-sazonov/old-sudga)](https://github.com/dan-sazonov/old-sudga/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/dan-sazonov/old-sudga)](https://github.com/dan-sazonov/old-sudga/pulls)
> The project is being developed in Russian. Translation into other languages is not planned for the foreseeable future.

## О проекте
Сайт для систематизации информации об исторически значимых местах Суджанского района.
Карта дает наглядное представление об уникальных архитектурных объектах, местах, связанных с известными людьми.
Для рассылки актуальной информации и общения с аудиторией создан бот в телеграм -
@old_sudga_bot ([dan-sazonov/old-sudga-bot](https://github.com/dan-sazonov/old-sudga-bot)).
_Разработка идет на ветке `develop`, для удобства она сделана дефолтной. В `main` сливается после прохождения
контрольной точки или после выпуска стабильной версии, законченной на данном этапе._
### Стек:
- **Front-end**: HTML5, [Scss](https://github.com/sass/sass) /CSS3, JS (ES8), [jQuery](https://github.com/jquery/jquery),
[Gulp 4](https://github.com/gulpjs/gulp), [webpack](https://github.com/webpack/webpack),
[Bootstrap 4](https://github.com/twbs/bootstrap)
- **Back-end**: [Django](https://github.com/django/django)

## ТЗ
### Цель:
- представить информацию об истории Суджанского края
### Задачи:
- собрать и систематизировать материал об исторически значимых местах Суджи и Суджанского района
- создать сайт для публикации материалов и обеспечить к нему доступ через QR-коды, размещенные на исторических объектах
### Целевая аудитория:
- люди, интересующиеся историей и краеведением
- школьники и студенты, изучающие историю и краеведение
- туристы, представители туристического бизнеса

## Контрольные точки, todo
- [Канбан - бета версия](https://github.com/dan-sazonov/old-sudga/projects/1)
- [Канбан - финалка](https://github.com/dan-sazonov/old-sudga/projects/2)
- [Логобук](/design/logobook.md)
- [Макет сайта](https://www.figma.com/file/5XTgdbaoxZckt15BIIGF2j/%D0%94%D0%B0%D0%B2%D0%BD%D1%8F%D1%8F-%D0%A1%D1%83%D0%B4%D0%B6%D0%B0-%D0%BC%D0%B0%D0%BA%D0%B5%D1%82?node-id=0%3A1)
- [X] Создание скетчей сайта, обсуждение ТЗ
- [X] Обсуждение тем с руководством Суджанского краеведческого музея
- [X] Обсуждение рабочих вопросов с администрацией Замостья
- [X] Обсуждение задач и их распределение
- [X] Разработка дизайна
- [ ] Верстка, фронт
- [ ] Написать парсер для статей с Google Docs
- [ ] Закончить верстку сайта, сверстать статьи руками
- [ ] Настроить SEO, OG. Оптимизация
- [ ] **Деплой минимальной рабочей версии в бету _(конец июня)_**
- [ ] Таблички, пиар
- [ ] Написать нормальный бэкенд для социалки
- [ ] Написать CMS с визивигом
- [ ] **Деплой законченной версии _(начало сентября)_**
- [ ] Оптимизация, рефакторинг согласно [todo](https://github.com/dan-sazonov/old-sudga/projects/1#card-52513044) _**(после первого стабильного релиза)**_

## Идеи
- Идеи по коненту в отдельном [таске](https://github.com/dan-sazonov/old-sudga/projects/1#card-55367718)
### Страницы сайта
:white_large_square: - ожидается;<br>
:black_square_button: - в процессе; <br>
:white_check_mark: - сделано; <br>
:x: - проблема.

| Страница | Дизайн | Дизайн -<br>адаптация | mobile | mobile<br>landscape | desktop | Тесты |
|:--------|:------:|:------:|:-------:|:-----:|:-------:|:-----:|
| Главная | :white_check_mark: | :white_check_mark: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| Статья (темплейт) | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_large_square: | :white_large_square: |
| Галерея | :white_check_mark: | :white_check_mark: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| Все статьи | :white_check_mark: | :white_check_mark: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| О нас | :white_check_mark: | :white_check_mark: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| Участвовать в развитии проекта | :white_check_mark: | :white_check_mark:  | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| Использование наших материалов | :white_check_mark: | :white_check_mark: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| Страница 404 | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_large_square: | :white_large_square: |
| Страница для других ошибок | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_large_square: | :white_large_square: |
| Лицензия (файл) | :heavy_minus_sign: |  :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :white_check_mark: | :heavy_minus_sign: |
| Пользовательское соглашение (файл) |  :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :white_large_square: | :heavy_minus_sign: |
| Политика конфиденциальности (файл) |  :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :white_large_square: | :heavy_minus_sign: |

## Хотите сотрудничать?
Если вы обнаружили ошибку в коде или у вас есть идеи, откройте 
[issue](https://github.com/dan-sazonov/old-sudga/issues). 
Вы можете взять ишью, и сказать мне, что работаете над ним.<br>
Если вы хотите предложить свое решение, сделайте 
[pull request](https://github.com/dan-sazonov/old-sudga/pulls).<br>
Пожалуйста, пишите комментарии к коммитам и названия пулл-реквестов и ишью на английском языке.
### Сборка
- `npm run dev` - сборка проекта в режиме разработки и запуск локального сервера
- `npm run build` - сборка для деплоя
- `npm run stats` - анализирует размер бандла, открывает в браузере
- `npm run lint` - запускает js линтер
- `npm run deploy-beta` - _не сработает_
## Автор
Автор проекта - [@dan-sazonov](https://github.com/dan-sazonov). <br>
**Связаться со мной:**<br>
[:airplane: Telegram](https://t.me/dan_sazonov) <br>
[:e-mail: Email](mailto:p-294803@yandex.ru) <br>

## Лицензия
Проект под лицензией Apache License Version 2.0. Подробности см. в файле [LICENSE](https://github.com/dan-sazonov/old-sudga/blob/main/LICENSE).
