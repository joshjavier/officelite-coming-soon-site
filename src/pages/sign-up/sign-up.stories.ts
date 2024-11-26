import type { Meta, StoryObj } from '@storybook/react'
import { SignUp } from './sign-up'

const meta: Meta<typeof SignUp> = {
  component: SignUp,
  title: 'Pages/SignUp',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof SignUp>

export const Default: Story = {}
