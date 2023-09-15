import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StoreProvider } from 'app/providers/StoreProvider';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  decorators: [(Story) => <StoreProvider><Story /></StoreProvider>],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Mockstore = ({ taskboxState, children }) => (
  <StoreProvider
    store={configureStore({
      reducer: {
        taskbox: createSlice({
          name: 'taskbox',
          initialState: taskboxState,
          reducers: {
            updateTaskState: (state, action) => {
              const { id, newTaskState } = action.payload;
              const task = state.tasks.findIndex((task) => task.id === id);
              if (task >= 0) {
                state.tasks[task].state = newTaskState;
              }
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </StoreProvider>
);

export const Standard: Story = {
  args: {},
  decorators: [(Story) => <ThemeDecorator theme={Theme.LIGHT}><Story /></ThemeDecorator>],
};
