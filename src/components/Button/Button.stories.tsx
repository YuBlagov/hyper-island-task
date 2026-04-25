import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Click me',
    variant: 'primary',
  },
}

export const Neutral: Story = {
  args: {
    label: 'Click me',
    variant: 'neutral',
  },
}

export const Subtle: Story = {
  args: {
    label: 'Click me',
    variant: 'subtle',
  },
}