export type Direction = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST';

export interface Placement {
  x: number;
  y: number;
  direction: Direction;
}

export type ParseResult =
  | { success: true; placement: Placement }
  | { success: false; error: string };