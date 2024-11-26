import { TextField as AriaTextField, Input, TextFieldProps } from 'react-aria-components'
import IconCross from '../../assets/sign-up/icon-cross.svg?react'

import './style.css'

interface Props extends TextFieldProps {
  label: string
  placeholder?: string
}

export const TextField = ({ label, ...props }: Props) => {
  return (
    <div className='text-field-container'>
      <AriaTextField aria-label={label} {...props}>
        {({ isInvalid }) => (
          <>
            <Input />
            {isInvalid && <IconCross className='icon-error' aria-hidden="true" />}
          </>
        )}
      </AriaTextField>
    </div>
  )
}
