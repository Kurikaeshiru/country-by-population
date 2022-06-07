import { formatNumber } from './formatNumber';

test('format numbers in readable form', () => {
  expect(formatNumber(0)).toBe('0');
  expect(formatNumber(12)).toBe('12');
  expect(formatNumber(123)).toBe('123');
  expect(formatNumber(1234)).toBe('1234');
  expect(formatNumber(12345)).toBe('12 345');
  expect(formatNumber(123456)).toBe('123 456');
  expect(formatNumber(1234567, ' ')).toBe('1 234 567');
  expect(formatNumber(12345678, '.')).toBe('12.345.678');
});
