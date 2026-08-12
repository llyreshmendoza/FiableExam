import type { Direction, ParseResult } from './types';

const VALID_DIRECTIONS: Direction[] = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

export function parseInput(input: string): ParseResult {
  if (typeof input !== 'string' || input.trim() === '') {
    return { success: false, error: 'Input must be a non-empty string.' };
  }

  const trimmed = input.trim();
  const parts = trimmed.split(' ').filter((p) => p.length > 0);

  if (parts.length !== 2) {
    return {
      success: false,
      error: `Invalid format. Expected "x,y DIRECTION", got "${input}".`,
    };
  }

  const [coords, rawDirection] = parts;
  const coordParts = coords.split(',');

  if (coordParts.length !== 2) {
    return {
      success: false,
      error: `Invalid coordinates. Expected "x,y", got "${coords}".`,
    };
  }

  const [xStr, yStr] = coordParts.map((c) => c.trim());

  if (!/^-?\d+$/.test(xStr) || !/^-?\d+$/.test(yStr)) {
    return {
      success: false,
      error: `x and y must be integers, got "${xStr},${yStr}".`,
    };
  }

  const x = Number(xStr);
  const y = Number(yStr);

  if (x < 0 || x > 4 || y < 0 || y > 4) {
    return {
      success: false,
      error: `x and y must be between 0 and 4, got "${x},${y}".`,
    };
  }

  const direction = rawDirection.trim().toUpperCase();

  if (!VALID_DIRECTIONS.includes(direction as Direction)) {
    return {
      success: false,
      error: `Direction must be one of NORTH, EAST, SOUTH, WEST, got "${rawDirection}".`,
    };
  }

  return {
    success: true,
    placement: { x, y, direction: direction as Direction },
  };
}