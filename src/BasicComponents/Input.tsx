import { ChangeEvent } from 'react'
import * as styles from './BasicComponent.styles'
import { InputProps } from './BasicComponent.types'

const Input = <T extends string | number>(props: InputProps<T>) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.type === 'number') {
      props.setValue((Number(e.target.value) ?? 0) as T)
    } else {
      props.setValue(e.target.value as T)
    }
  }

  return (
    <input
      className={props.className}
      css={[styles.input, props.error && styles.inputError]}
      type={props.type ?? 'text'}
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}
      required={props.required}
    />
  )
}

export default Input
