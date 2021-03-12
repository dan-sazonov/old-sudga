# Давняя Суджа
[![GitHub](https://img.shields.io/github/license/dan-sazonov/old-sudga)](https://github.com/dan-sazonov/old-sudga/blob/develop/LICENSE)
![OpenSource](https://img.shields.io/badge/Open%20Source-%E2%99%A5-red)
[![Front‑End_Checklist followed](https://img.shields.io/badge/Front‑End_Checklist-followed-brightgreen.svg)](https://github.com/thedaviddias/Front-End-Checklist/)

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
[Gulp 4](https://github.com/gulpjs/gulp), [Bootstrap 4](https://github.com/twbs/bootstrap)
- **Back-end**: [Django](https://github.com/django/django)
### npm scripts:
- `create` - устанавливает необходимые пакеты, включая глобальные
- `dev` - собирает проект, запускает отслеживание изменений, поднимает сервер на localhost, открывает его из Firefox DE
- `build` - собирает проект в директорию `dist`
- `test` - запускает ESlint, собирает проект
- `updateJS` - принудительное обновление js в `dist`

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
- [Канбан](https://github.com/dan-sazonov/old-sudga/projects/1)
- [Логобук](/design/logobook.md)
- [Макет сайта](https://www.figma.com/file/5XTgdbaoxZckt15BIIGF2j/%D0%94%D0%B0%D0%B2%D0%BD%D1%8F%D1%8F-%D0%A1%D1%83%D0%B4%D0%B6%D0%B0-%D0%BC%D0%B0%D0%BA%D0%B5%D1%82?node-id=0%3A1)
- [X] Создание скетчей сайта, обсуждение ТЗ
- [X] Обсуждение тем с руководством Суджанского краеведческого музея
- [X] Обсуждение рабочих вопросов с администрацией Замостья
- [X] Обсуждение задач и их распределение
- [ ] Разработка дизайна _**(начало марта)**_
- [ ] Верстка, фронт _**(март)**_
- [ ] Деплой фронта, настройка хостинга для работы с бэком. [Таск](https://github.com/dan-sazonov/old-sudga/projects/1#card-51482948) _**(конец марта)**_
- [ ] Бэк _**(середина апреля)**_
- [ ] Деплоинг, фиксы _**(конец апреля)**_
- [ ] Заполнение контентом _**(конец апреля)**_
- [ ] SEO, раскрутка, выход из беты _**(начало мая)**_
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
| Главная | :x: |:white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| Статья (темплейт) | :white_check_mark: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| Галерея | :white_check_mark: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| Все статьи | :white_check_mark: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| О нас | :white_check_mark: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| Участвовать в развитии проекта | :white_check_mark: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| Использование наших материалов | :white_check_mark: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| Страница 404 | :white_check_mark: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| Страница для других ошибок | :white_check_mark: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: | :white_large_square: |
| Лицензия (файл) | :heavy_minus_sign: |  :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :white_check_mark: | :heavy_minus_sign: |
| Пользовательское соглашение (файл) |  :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :white_large_square: | :heavy_minus_sign: |
| Политика конфиденциальности (файл) |  :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :heavy_minus_sign: | :white_large_square: | :heavy_minus_sign: |

## Хотите сотрудничать?
Coming soon!

## Автор
Coming soon!

## Лицензия
Coming soon!
