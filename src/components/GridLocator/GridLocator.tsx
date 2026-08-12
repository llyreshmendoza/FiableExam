import { Box } from '@mui/material';

interface GridLocatorProps {
  placement: string;
}

const GRID_SIZE = 5;

export function GridLocator({ placement }: GridLocatorProps) {
  // Row 4 is rendered first (top of screen), row 0 last (bottom of screen)
  // so that (0,0) visually appears at the bottom-left = South-West.
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
    cols.map((x) => (
      <Box
        key={`${x}-${y}`}
        sx={{
          border: '1px solid',
          borderColor: 'grey.500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    )),
  )}
</Box>
  );
}