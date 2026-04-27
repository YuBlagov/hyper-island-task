import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
}
export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { placeholder: 'Add a task...' },
}

export const Focus: Story = {
  args: { placeholder: 'Add a task...', value: 'Clean floors' },
}