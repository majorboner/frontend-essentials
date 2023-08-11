import { classNames } from './classNames';

describe('classNames', () => {
  test('Проверка с с одним значением', () => {
    expect(classNames('test-class-name', {}, []))
      .toBe('test-class-name');
  });
  test('Проверка с главным классом и модами', () => {
    expect(classNames(
      'test-class-name',
      { default: true, disabled: false },
      [],
    ))
      .toBe('test-class-name default');
  });
  test('Проверка со всеми значениями', () => {
    expect(classNames(
      'test-class-name',
      { default: true, disabled: false },
      ['collapsed'],
    ))
      .toBe('test-class-name collapsed default');
  });
});
