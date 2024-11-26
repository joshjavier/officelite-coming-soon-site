import type { Meta, StoryObj } from '@storybook/react'
import { SignupForm } from './signup-form'

const meta: Meta<typeof SignupForm> = {
  component: SignupForm,
  title: 'SignupForm',
}

export default meta
type Story = StoryObj<typeof SignupForm>

export const Default: Story = {}
