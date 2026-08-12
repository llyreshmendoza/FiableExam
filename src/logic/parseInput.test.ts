import { describe, it, expect } from 'vitest';
import { parseInput } from './parseInput';

describe('parseInput', () => {
  it('parses a valid placement', () => {
    const result = parseInput('1,1 NORTH');
    expect(result).toEqual({
      success: true,
      placement: { x: 1, y: 1, direction: 'NORTH' },
    });
  });

  it.each([
    ['0,0 SOUTH', { x: 0, y: 0, direction: 'SOUTH' }],
    ['4,4 WEST', { x: 4, y: 4, direction: 'WEST' }]
  ])('parses boundary/valid placement "%s"', (input, expected) => {
    const result = parseInput(input as string);
    expect(result).toEqual({ success: true, placement: expected });
  });

  it('normalizes lowercase direction', () => {
    const result = parseInput('1,1 north');
    expect(result).toEqual({
      success: true,
      placement: { x: 1, y: 1, direction: 'NORTH' },
    });
  });

  it('rejects x out of range', () => {
    const result = parseInput('5,0 NORTH');
    expect(result.success).toBe(false);
  });

  it('rejects negative coordinates', () => {
    const result = parseInput('-1,2 NORTH');
    expect(result.success).toBe(false);
  });

  it('rejects non-integer coordinates', () => {
    const result = parseInput('1.5,2 NORTH');
    expect(result.success).toBe(false);
  });

  it('rejects invalid direction', () => {
    const result = parseInput('1,1 NORTHEAST');
    expect(result.success).toBe(false);
  });

  it('rejects malformed input (missing comma)', () => {
    const result = parseInput('1 1 NORTH');
    expect(result.success).toBe(false);
  });

  it('rejects empty string', () => {
    const result = parseInput('');
    expect(result.success).toBe(false);
  });
});