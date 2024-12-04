import { Form } from 'react-aria-components'
import { TextField } from '../text-field'
import { Button } from '../button'
import { Option, Select } from '../select'

import './style.css'

const pricingOptions: Option[] = [
  {
    id: 'basic',
    label: 'Basic Pack',
    description: 'Free',
  },
  {
    id: 'pro',
    label: 'Pro Pack',
    description: '$9.99',
  },
  {
    id: 'ultimate',
    label: 'Ultimate Pack',
    description: '$19.99',
  },
]

interface Props {
  initialPlan?: string
}

export const SignupForm = ({ initialPlan }: Props) => {
  return (
    <Form aria-label='Sign up'>
      <TextField label='Name' placeholder='Name' isRequired autoFocus />

      <TextField
        type='email'
        label='Email Address'
        placeholder='Email Address'
        isRequired
      />

      <Select
        label='Pricing'
        items={pricingOptions}
        placeholder='Choose your pack'
        isRequired
        defaultSelectedKey={initialPlan}
      />

      <TextField
        type='tel'
        label='Phone Number'
        placeholder='Phone Number'
        isRequired
      />

      <TextField label='Company' placeholder='Company' />

      <Button color='primary' type='submit'>Get on the list</Button>
    </Form>
  )
}
