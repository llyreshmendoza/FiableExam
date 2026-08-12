import { Box } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';
import { parseInput } from '../../logic/parseInput';
import type { Direction } from '../../logic/types';

interface GridLocatorProps {
  placement: string;
}

const GRID_SIZE = 5;

// NavigationIcon points up (North) by default at 0deg.
const ROTATION_BY_DIRECTION: Record<Direction, number> = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270,
};

export function GridLocator({ placement }: GridLocatorProps) {
  const result = parseInput(placement);

  const rows = Array.from({ length: GRID_SIZE }, (_, i) => GRID_SIZE - 1 - i);
  const cols = Array.from({ length: GRID_SIZE }, (_, i) => i);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${GRID_SIZE}, 40px)`,
        gridTemplateRows: `repeat(${GRID_SIZE}, 40px)`,
        gap: '2px',
        width: 'fit-content',
        m: 4,
      }}
    >
      {rows.map((y) =>
        cols.map((x) => {
          const isMarkerCell =
            result.success &&
            result.placement.x === x &&
            result.placement.y === y;

          return (
            <Box
              key={`${x}-${y}`}
              data-testid={`cell-${x}-${y}`}
              sx={{
                border: '1px solid',
                borderColor: 'grey.500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isMarkerCell && (
                <NavigationIcon
                  data-testid="marker"
                  color="primary"
                  sx={{
                    transform: `rotate(${ROTATION_BY_DIRECTION[result.placement.direction]}deg)`,
                  }}
                />
              )}
            </Box>
          );
        }),
      )}
    </Box>
  );
}