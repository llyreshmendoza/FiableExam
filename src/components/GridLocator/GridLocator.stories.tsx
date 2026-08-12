import type { Meta, StoryObj } from '@storybook/react-vite';
import { GridLocator } from './GridLocator';

const meta: Meta<typeof GridLocator> = {
  title: 'Components/GridLocator',
  component: GridLocator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GridLocator>;

export const Default: Story = {
  args: {
    placement: '1,1 NORTH',
  },
};

export const FacingEast: Story = {
  args: {
    placement: '2,3 EAST',
  },
};

export const FacingSouth: Story = {
  args: {
    placement: '2,2 SOUTH',
  },
};

export const FacingWest: Story = {
  args: {
    placement: '2,2 WEST',
  },
};

export const SouthWestOrigin: Story = {
  args: {
    placement: '0,0 SOUTH',
  },
};

export const NorthEastCorner: Story = {
  args: {
    placement: '4,4 WEST',
  },
};

export const InvalidInput: Story = {
  args: {
    placement: '5,5 UP',
  },
};