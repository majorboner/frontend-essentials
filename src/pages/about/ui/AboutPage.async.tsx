import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve, reject) => {
  // @ts-ignore
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
  setTimeout(() => resolve(import('./AboutPage')), 2200);
}));
