import operate from '../operate';

describe('Operate: two positive numbers operation ', () => {
  const one = 10;
  const two = 20;

  it('should add two numbers', () => {
    expect(operate(one, two, '+')).toEqual(String(one + two));
  });

  it('should minus two numbers', () => {
    expect(operate(two, one, '-')).toEqual(String(two - one));
  });

  it('should multiply two numbers', () => {
    expect(operate(one, two, 'x')).toEqual(String(one * two));
  });

  it('should divide two numbers', () => {
    expect(operate(two, one, '÷')).toEqual(String(two / one));
  });

  it('should modulo two numbers', () => {
    expect(operate(two, one, '%')).toEqual(String(two % one));
  });
});

describe('Operate: two decimal numbers operation ', () => {
  const one = 1.5;
  const two = 3.0;

  it('should add two numbers', () => {
    expect(operate(one, two, '+')).toBe(String(one + two));
  });

  it('should minus two numbers', () => {
    expect(operate(two, one, '-')).toEqual(String(two - one));
  });

  it('should multiply two numbers', () => {
    expect(operate(one, two, 'x')).toEqual(String(one * two));
  });

  it('should divide two numbers', () => {
    expect(operate(two, one, '÷')).toEqual(String(two / one));
  });

  it('should modulo two numbers', () => {
    expect(operate(two, one, '%')).toEqual(String(two % one));
  });
});

describe('Operate: two negative numbers operation ', () => {
  const one = -0.5;
  const two = -3;

  it('should add two numbers', () => {
    expect(operate(one, two, '+')).toBe(String(one + two));
  });

  it('substract two numbers', () => {
    expect(operate(two, one, '-')).toEqual(String(two - one));
  });

  it('multiply two numbers', () => {
    expect(operate(one, two, 'x')).toEqual(String(one * two));
  });

  it('divide two numbers', () => {
    expect(operate(two, one, '÷')).toEqual(String(two / one));
  });

  it('should modulo two numbers', () => {
    expect(operate(two, one, '%')).toEqual(String(two % one));
  });
});

describe('Operate: Negative tests', () => {
  const one = -3;
  const two = 0;
  it('error when divide with 0', () => {
    expect(operate(one, two, '÷')).toEqual("Can't divide by 0.");
  });

  it('error when modulo with 0', () => {
    expect(operate(one, two, '%')).toEqual(
      "Can't find modulo as can't divide by 0.",
    );
  });

  it('error when operation is unknown', () => {
    expect(() => {
      operate(two, 0, '/');
    }).toThrow(Error("Unknown operation '/'"));
  });
});
