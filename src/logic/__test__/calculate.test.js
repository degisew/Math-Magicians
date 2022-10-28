import calculate from '../calculate';

describe('Calculate', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  test('return null', () => {
    expect(calculate(obj, '1')).toEqual({ next: '1', total: null });
  });

  test('return null', () => {
    const obj = {

      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, '1')).toEqual({ next: '1', total: null });
  });

  test('return null', () => {
    const obj = {
      total: null,
      next: '2',
      operation: null,
    };
    expect(calculate(obj, '1')).toEqual({ next: '21', total: null });
  });

  test('return null', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, '=')).toEqual({});
  });
});
