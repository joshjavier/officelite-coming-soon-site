import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from './hero'

const meta: Meta<typeof Hero> = {
  component: Hero,
  title: 'Hero',
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {}
