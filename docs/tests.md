## Тесты

В проекте используются 4 вида тестов:

## Тесты

1. Обычные unit тесты на jest - `npm run test:unit`

2. Тесты на компоненты с React testing library -`npm run test:unit`

3. ~~Скриншотное тестирование с loki `npm run test:ui`~~

4. e2e тестирование с Cypress `npm run test:e2e`

### RTL & Unit тесты

В проекте протестированы все виды разработанных модулей:

- Компоненты
- Редюсеры
- Async Thunks
- Селекторы
- Хуки

Конфиг для jest находится в config/jest

Моки, провайдеры и хелперы в т.ч. для RTL тестов в src/shared/lib/tests

Документация [Jest](https://jestjs.io/docs/getting-started)

Документация [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### e2e тесты

В конце разработки модули были покрыты е2е тестами на фреймфорке cypress

Документация [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
