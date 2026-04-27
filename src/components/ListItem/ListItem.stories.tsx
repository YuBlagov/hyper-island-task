import type { Meta, StoryObj } from '@storybook/react'
import { ListItem } from './ListItem'

const meta: Meta<typeof ListItem> = {
  title: 'Components/ListItem',
  component: ListItem,
}
export default meta
type Story = StoryObj<typeof ListItem>

export const Default: Story = {
  args: { label: 'Workout', checked: false },
}

export const Checked: Story = {
  args: { label: 'Workout', checked: true },
}