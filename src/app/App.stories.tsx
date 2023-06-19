import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { App } from './App';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'app',
  component: App,
  tags: ['autodocs'],
  decorators: [withRouter],
  argTypes: {
    className: { control: 'text' },
  },
  render: () => (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <App />
    </div>
  ),
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
  args: {
    className: '',
  },
};
