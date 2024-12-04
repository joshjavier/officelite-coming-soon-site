import {
  Select as AriaSelect,
  Button,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Popover,
  SelectProps,
  SelectValue,
  Text
} from 'react-aria-components'
import IconArrowDown from '../../assets/sign-up/icon-arrow-down.svg?react'
import IconCheck from '../../assets/sign-up/icon-check.svg?react'

import './style.css'

export interface Option {
  id: string
  label: string
  description?: string
}

interface Props extends SelectProps {
  label: string
  items: Option[]
}

export const Select = ({ label, items, ...props }: Props) => {

  return (
    <div className="select-container">
      <AriaSelect aria-label={label} {...props}>
        <Button>
          <SelectValue />
          <IconArrowDown className='dropdown-arrow' aria-hidden="true" />
        </Button>
        <Popover>
          <ListBox items={items}>
            {item => <Option id={item.id} label={item.label} description={item.description} />}
          </ListBox>
        </Popover>
      </AriaSelect>
    </div>
  )
}

interface OptionProps extends ListBoxItemProps {
  label: string
  description?: string
}

export const Option = ({ label, description, ...props }: OptionProps) => {
  return (
    <ListBoxItem textValue={label} {...props}>
      {({ isSelected }) => (
        <>
          <Text slot='label'>{label}</Text>
          {description && <Text slot='description'>{description}</Text>}
          {isSelected && <IconCheck className='icon-check' aria-hidden="true" />}
        </>
      )}
    </ListBoxItem>
  )
}
