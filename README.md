## Описание

Цель проекта попрактиковаться в разработке большого продакшн проекта на React, включая настройку всей инфраструктуры, тестовых сред, работу с сервером/данными и тд.

## Запуск проекта

`npm install` - устанавливаем зависимости

`npm run start:dev` или `npm run start:dev:vite` - запуск сервера + frontend проекта в dev режиме

---

## Скрипты

<details>
  <summary>Спойлер</summary>

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev:server` - Запуск backend сервера
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на vite + backend
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:e2e` - Запуск тестовой среды Cypress
- `npm run prepare` - прекоммит хуки husky
- `npm run storybook` - запуск Storybook
- `npm run build-storybook` - Сборка storybook билда
- `npm run generate:slice` - Скрипт для генерации FSD слайсов
- `npm run remove:feature` - Скрипт для удаления устаревших фич

</details>

---

## Архитектура проекта

Проект написан разработан с использованием методологии [Feature Sliced Design](https://feature-sliced.design/)

---

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config

- /config/babel - babel

- /config/build - конфигурация webpack

- /config/jest - конфигурация тестовой среды

- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

---

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.

Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Тесты

В проекте используются 4 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit` 

2. Тесты на компоненты с React testing library -`npm run test:unit`

3. e2e тесты на cypress - `npm run test:e2e`

4. Скриншотное тестирование с loki `npm run test:ui` (deprecated)



Подробнее о тестах - [документация тестирование](/docs/tests.md)

---

## Линтинг

В проекте используется prettiere для форматирования, eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin _eslint-plugin-feature-sliced-imports_,
который содержит 3 правила:

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2. fsd-cross-layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3. api-strict-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

#### Запуск линтеров

```
`npm run lint:ts` - Проверка ts файлов линтером
`npm run lint:ts:fix` - Исправление ts файлов линтером
`npm run lint:scss` - Проверка scss файлов style линтером
`npm run lint:scss:fix` - Исправление scss файлов style линтером
```

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.

Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

---

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.

В ci прогоняются тесты, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

---

## Feature toggle

Редизайн приложения выполнен с применением техники feature toggle, чтобы сохранить поддержку старого дизайна

Для автоматического удаления фичи использовать скрипт remove-feature.ts,

### Работа с feature-flags

Разрешено использование feature flags только с помощью хелпера _toggleFeatures_ или компонента _ToggleFeature_.

<details>
<summary>toggleFeatures</summary>

```

В toggleFeature передается объект с опциями

{

**name**: название фича-флага

**on**: функция, которая отработает после Включения фичи

**off**: функция, которая отработает после ВЫключения фичи

}


```

</details>


<details>
<summary>ToggleFeature</summary>

```

В ToggleFeature передаются пропсы с опциями

- **feature**: название фича-флага

- **on**: компонент, который вмонтируется после Включения фичи

- **off**: компонент, который вмонтируется после ВЫключения фичи

```

</details>

Для автоматического удаления фичи использовать скрипт remove-feature.ts, который принимает 2 аргумента

1.  Название удаляемого фича-флага
2.  Состояние (on\off)

---

## Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.

По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется

[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---


## Сущности (entities)

- [Article](/src/entities/Article)

- [Comment](/src/entities/Comment)

- [Counter](/src/entities/Counter)

- [Country](/src/entities/Country)

- [Currency](/src/entities/Currency)

- [Notification](/src/entities/Notification)

- [Profile](/src/entities/Profile)

- [Rating](/src/entities/Rating)

- [User](/src/entities/User)

## Фичи (features)

- [addCommentForm](/src/features/addCommentForm)

- [ArticleRating](/src/features/ArticleRating)

- [articleRecommendationsList](/src/features/ArticleRecommendationsList)

- [ArticleViewSelector](/src/features/ArticleViewSelector)

- [AuthByUsername](/src/features/AuthByUsername)

- [AvatarDropdown](/src/features/avatarDropdown)

- [EditableProfileCard](/src/features/editableProfileCard)

- [LangSwitcher](/src/features/LangSwitcher)

- [NotificationButton](/src/features/notificationButton)

- [ProfileRating](/src/features/profileRating)

- [ThemeSwitcher](/src/features/ThemeSwitcher)

- [scrollRestoration](/src/features/scrollRestoration)

