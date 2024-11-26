import { Form } from 'react-aria-components'
import { TextField } from '../text-field'
import { Button } from '../button'
import { Option, Select } from '../select'

import './style.css'

const pricingOptions: Option[] = [
  {
    label: 'Basic Pack',
    description: 'Free',
  },
  {
    label: 'Pro Pack',
    description: '$9.99',
  },
  {
    label: 'Ultimate Pack',
    description: '$19.99',
  },
]

export const SignupForm = () => {
  return (
    <Form aria-label='Sign up'>
      <TextField label='Name' placeholder='Name' isRequired />

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
